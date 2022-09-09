<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\Endereco;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClienteController extends Controller
{
   
    public function index()
    {
        return response()->json(Cliente::all());
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
            $newCliente = new Cliente();
            $newCliente->nome = $request->nome;
            $newCliente->email = $request->email;
            $newCliente->telefone = $request->telefone;
            $newCliente->endereco_id = $newEndereco->id;
            $response = $newCliente->save();
            if( $response )
            {
                return response()->json($newCliente);
            }
        } else {
            return "Por Favor verificar os campos de Endereço.";
        }

        
    }

    public function show($id)
    {
        $cliente = Cliente::findOrFail($id);
        return response()->json($cliente);
    }

    public function update(Request $request, $id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->nome = $request->nome;
        $cliente->email = $request->email;
        $cliente->telefone = $request->telefone;
        $cliente->enderenco = $request->enderenco;
        $response = $cliente->update();
        if($response){
        return response()->json($response);
        }
    }

    public function destroy($id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->delete();
    }
}
