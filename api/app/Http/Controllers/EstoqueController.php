<?php

namespace App\Http\Controllers;

use App\Models\Endereco;
use App\Models\Estoque;
use Illuminate\Http\Request;

class EstoqueController extends Controller
{
    public function index()
    {
        return response()->json(Estoque::all());
    }

    public function show($id)
    {
        $estoque = Estoque::findOrFail($id);
        return $estoque;
    }

    public function store(Request $request)
    {
        $newEndereco = new Endereco();
        $newEndereco->cep = $request->cep;
        $newEndereco->logradouro = $request->logradouro;
        $newEndereco->numero = $request->numero;
        $newEndereco->bairro = $request->bairro;
        $newEndereco->municipio = $request->municipio;
        $newEndereco->uf = $request->uf;
        $newEndereco->complemento = $request->complemento;
        $responseEndereco = $newEndereco->save();

        if ( $responseEndereco )
        {
            $newEstoque = new Estoque();
            $newEstoque->local = $request->local;
            $newEstoque->endereco_id = $newEndereco->id;
            $newEstoque->latitude = $request->latitude;
            $newEstoque->longitude = $request->longitude;
            $responseEstoque = $newEstoque->save();

            if ($responseEstoque)
            {
                return $this->listar();
            }
        } else 
        {
            return "Por Favor verificar os campos de Endereço.";
        }
        
    }

    public function telacriar()
    {
        // $categorias = Categoria::all();
        return view('components.estoques.novoestoques');
    }

    public function listar()
    {
        $estoques = Estoque::all();
        return view('components.estoques.listarestoques', compact('estoques'));
    }

    public function editar(Request $request)
    {
        $id = $request->id;
        $dados = $this->show($id);
        $enderecos = Endereco::findOrFail($id);
        // return $dados["nome"];

        return view('components.estoques.editarestoques', compact('dados','id', 'enderecos'));
    }
}
