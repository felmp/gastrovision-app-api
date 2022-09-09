<?php

namespace App\Http\Controllers;

use App\Models\Estoque_produtos;
use App\Models\Pedidos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PedidosController extends Controller
{
    public function solicitar_pedido(Request $request)
    {

        $pedido = new Pedidos();
        $pedido->cliente_id = $request->cliente_id;
        $pedido->estoque_id = $request->estoque_id;
        $pedido->produto_id = $request->produto_id;
        $pedido->quantidade = $request->quantidade_produto;
        $pedido->descricao = $request->descricao;
        $pedido->titulo = $request->titulo;
        $pedido->status = 0;

        $pedido->save();
        

    }

    public function mostrar_pedidos()
    {
        //join('estoques', 'estoques.id', 'estoque_produtos.estoque_id')
        $pedidosAprovados = Pedidos::join('estoques as e', 'e.id', 'pedidos.estoque_id')
                                   ->join('produtos as p', 'p.id', 'pedidos.produto_id')
                                   ->join('clientes as c', 'c.id', 'pedidos.cliente_id')
                                   ->select('titulo', 'c.nome as cliente', 'e.local as local', 'p.nome as produto', 'quantidade', 'pedidos.descricao as descricao', 'pedidos.estoque_id', 'pedidos.produto_id', 'pedidos.id as idimage.png')
                                   ->where('status', 0)
                                   ->get();


        $pedidos = Pedidos::where('status', 0);

        return view('components.operacao.solicitarproduto', compact('pedidosAprovados'));

    }

    public function aceitar_pedido(Request $request)
    {
        //    return $request;
        $tem_no_estoque = Estoque_produtos::select("*")
                                          ->where("estoque_id", $request->estoque_id)
                                          ->where("produto_id", $request->produto_id)
                                          ->where("quantidade_produto", ">=", $request->quantidade)
                                          ->count();

        $item = Estoque_produtos::select("*")
                                ->where("estoque_id", $request->estoque_id)
                                ->where("produto_id", $request->produto_id)
                                ->where("quantidade_produto", ">=", $request->quantidade)
                                ->get();
        
        if ( $tem_no_estoque > 0 )
        { 
            $feito_retirada_do_estoque = DB::table('estoque_produtos')
                ->where('id', $item[0]->id)
                ->update(['quantidade_produto' => ( $item[0]-> quantidade_produto - $request->quantidade)]);

                DB::table('pedidos')->where('id', $request->id)->update(['status' => 1]); // $pedido->save();

            return  $this->mostrar_pedidos();

        }else{

            return response()->json("Estoque não possui essa quantidade no estoque.");
        }


    }

    
}
