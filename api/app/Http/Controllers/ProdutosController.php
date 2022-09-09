<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProdutosController extends Controller
{
    public function index()
    {
        return response()->json(Produto::all());
    }

    public function listar()
    {
        $produtos = Produto::all();
        return view('components.produtos.listarprodutos', compact('produtos'));
    }

    public function store(Request $request)
    {

        $newProduto = new Produto();
        $newProduto->nome = $request->input('nome');
        // $newProduto->cod_ncm = $request->input('cod_ncm');
        $newProduto->preco = $request->input('preco');
        $newProduto->categoria_id = $request->input('categoria');
        $newProduto->descricao = $request->input('descricao');
        $newProduto->registro_anvisa = $request->input('registro');

        if($request->hasFile('imagem')){
            $imagem = $request->imagem;
         // $extensao = $imagem->extension();

            $nome = $imagem->getClientOriginalName();
            $nome = date("now").'-'.$nome;
            $imagem->storeAs('produtos', $nome);
            $newProduto->imagem = $nome;
        }


        $responseProduto = $newProduto->save();
        // return response()->json($newProduto);
        return $this->listar();

    }

    public function show($id)
    {
        $produto = Produto::findOrFail($id);
        return $produto;
    }

    public function update(Request $request)
    {
        $id = $request->id;
        $oldProduto = Produto::findOrFail($id);
        $oldProduto->nome = $request->nome;
        // $oldProduto->cod_ncm = $request->cod_ncm;
        $oldProduto->descricao = $request->descricao;
        $oldProduto->registro_anvisa = $request->registro;
        $oldProduto->preco = $request->preco;
        $oldProduto->categoria_id = 1;


        if($oldProduto->imagem == null){
            if($request->hasFile('imagem')){
                
                $imagem = $request->imagem;

                $nome = $imagem->getClientOriginalName();
                $nome = date("now").'-'.$nome;
                $imagem->storeAs('produtos', $nome);
                $oldProduto->imagem = $nome;

            }
        } else {
                Storage::delete('produtos/' . $oldProduto->imagem);

                $imagem = $request->imagem;
                $nome = $imagem->getClientOriginalName();
                $nome = date("now").'-'.$nome;
                $imagem->storeAs('produtos', $nome);
                $oldProduto->imagem = $nome;
            
        }

        
        $responseProduto = $oldProduto->update();

        return $this->listar();
    }

    public function destroy(Request $request)
    {
        // dd($request);
        
        $id = $request->id;
        if ( DB::table('produtos')->where('id', $id)->count() == 0 )
        {
            return response()->json('Informe um código de produto existente');
        }
        $deleteProduto = Produto::findOrFail($id);

        Storage::delete('produtos/' . $deleteProduto->imagem);
        $deleteProduto->delete();
        
        return $this->listar();
    }

    public function telacriar()
    {
        $categorias = Categoria::all();
        return view('components.produtos.novoprodutos', compact('categorias'));
    }

    public function editar(Request $request)
    {
        $id = $request->id;
        $dados = $this->show($id);
        $categorias = Categoria::all();
        
        return view('components.produtos.editarprodutos', compact('dados','id', 'categorias'));
    }
}
