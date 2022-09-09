<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\EstoqueController;
use App\Http\Controllers\EstoqueProdutosController;
use App\Http\Controllers\PedidosController;
use App\Http\Controllers\ProdutosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('/client', ClienteController::class);
Route::post('/login', [AuthController::class, 'login']);
Route::resource('/user', UsuarioController::class);
Route::resource('/category', CategoriaController::class);
Route::resource('/product', ProdutosController::class);
Route::resource('/estoques', EstoqueController::class);
Route::resource('/estoque_produto', EstoqueProdutosController::class);
Route::post('/fazer_pedido', [PedidosController::class, 'solicitar_pedido']);


    Route::group(['middleware' => ['jwt.verify']], function() 
    {

    }
);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
