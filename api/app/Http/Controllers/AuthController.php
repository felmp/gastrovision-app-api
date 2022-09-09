<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $input = $request->validated();
        
        $credentials = [
            'email' => $input['email'],
            'password' => $input['password'],
        ];

        if (! $token = auth()->attempt($credentials))
        {
            $msg = 'Login e|ou Senha Incorretos';
            return response()->json(['error' => $msg], 401);
        }

        $usuario = DB::table('usuarios')->select('nome', 'email', 'telefone')->where('email', '=', $input['email'])->get();

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'usuario' => $usuario,
        ]);
    }
}
