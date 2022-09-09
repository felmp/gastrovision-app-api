<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
   
    public function index()
    {
        $user = User::all();
        return response()->json($user);
    }

    public function store(Request $request)
    {
        $newUser = new User();
        $newUser->nome = $request->nome;
        $newUser->email = $request->email;
        $newUser->telefone = $request->telefone;
        $newUser->password = Hash::make($request->password);
        $newUser->save();

        return response()->json($newUser);

    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $user = new User();
        $user->nome = $request->nome;
        $user->email = $request->email;
        $user->telefone = $request->telefone;
        $user->password = Hash::make($request->password);
        $response = $user->update();
  
        return response()->json($user);

    }

    public function destroy($id)
    {
        $cliente = User::findOrFail($id);
        $cliente->delete();

        return "Deletado com sucesso.";
    }
}
