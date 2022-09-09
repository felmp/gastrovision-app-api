<?php

namespace App\Http\Controllers;

use App\Models\Estoque;
use App\Models\Estoque_produtos;
use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EstoqueProdutosController extends Controller
{
    public function index()
    {
        $estoque = Estoque_produtos::join('estoques', 'estoques.id', 'estoque_produtos.estoque_id')
                        ->join('produtos', 'produtos.id', 'estoque_produtos.produto_id')
                        ->select('estoque_produtos.id', 'estoques.id as estoque_id', 'estoques.local', 'produtos.id as produto_id', 'produtos.nome', 'estoque_produtos.quantidade_produto', 'produtos.preco')
                        ->get();
        
                        return response()->json($estoque);
    }

    // public function entrada(Request $request)
    // {

    // }

    public function store(Request $request)
    {
        $estoque = Estoque_produtos::all();

        $tem_no_estoque = Estoque_produtos::select("*")
                                          ->where("estoque_id", $request->estoque)
                                          ->where("produto_id", $request->produto)
                                          ->where("quantidade_produto", ">=", $request->quantidade)
                                          ->count();

        $item = Estoque_produtos::select("*")
                                ->where("estoque_id", $request->estoque)
                                ->where("produto_id", $request->produto)
                                ->where("quantidade_produto", ">=", $request->quantidade)
                                ->get();
        
                                
        $newProdutoNoEstoque = new Estoque_produtos();
        $newProdutoNoEstoque->estoque_id = $request->estoque;
        $newProdutoNoEstoque->produto_id = $request->produto;
        $newProdutoNoEstoque->quantidade_produto = $request->quantidade;
        $newProdutoNoEstoque->lote = $request->lote;
        // $newProdutoNoEstoque->vencimento = $request->vencimento;
                                          
        if($tem_no_estoque > 0)
        {
            DB::table('estoque_produtos')
              ->where('id', $item[0]->id)
              ->update(['quantidade_produto' => ( $item[0]-> quantidade_produto + $request->quantidade)]);

            // $newProdutoNoEstoque->save();
            return $this->listar();

        }

        $newProdutoNoEstoque->save();

        return $this->listar();
    }

    public function show($id)
    {
        $produtoNoEstoque = Estoque_produtos::findOrFail($id);
        return response()->json($produtoNoEstoque);
    }

    // public function update(Request $request, $id)
    // {
    //     if ( DB::table('estoque_produtos')->where('id', $id)->count() == 0 )
    //     {
    //         return response()->json('Informe um código existente');
    //     }
    //     $oldProdutoNoEstoque = Estoque_produtos::findOrFail($id);
    //     $oldProdutoNoEstoque->estoque_id = $request->estoque_id;
    //     $oldProdutoNoEstoque->produto_id = $request->produto_id;
    //     $oldProdutoNoEstoque->quantidade_produto = $request->quantidade_produto;
    //     $oldProdutoNoEstoque->lote = $request->lote;
    //     $oldProdutoNoEstoque->vencimento = $request->vencimento;
    //     $responseUpdateProdutpNoEstoque = $oldProdutoNoEstoque->update();
    //     if ( $responseUpdateProdutpNoEstoque ){
    //         return response()->json($oldProdutoNoEstoque);
    //     }
    // }

    public function destroy($id)
    {
        if ( DB::table('estoque_produtos')->where('id', $id)->count() == 0 )
        {
            return response()->json('Informe um código valido');
        }
        $deleteProdutoNoEstoque = Estoque_produtos::findOrFail($id);
        $deleteProdutoNoEstoque->delete();
        return response()->json('Deletado com sucesso.');
    }

    public function listar()
    {
        $estoque_produto = Estoque_produtos::join('estoques', 'estoques.id', 'estoque_produtos.estoque_id')
                                           ->join('produtos', 'produtos.id', 'estoque_produtos.produto_id')
                                           ->select('estoque_produtos.id', 'estoques.id as estoque_id', 'produtos.nome', 'estoque_produtos.quantidade_produto', 'produtos.preco')
                                           //    ->orderBy('estoque_produtos.id')
                                           ->get();

        $estoque = Estoque::all();
                                   
        return view('components.operacao.listaroperacao', compact('estoque', 'estoque_produto'));
    }

    public function nova()
    {
        $estoques = Estoque::all();
        $produtos = Produto::all();

        return view('components.operacao.entradaoperacao', compact('estoques', 'produtos'));
    }
}
