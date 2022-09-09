<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\EstoqueController;
use App\Http\Controllers\EstoqueProdutosController;
use App\Http\Controllers\PedidosController;
use App\Http\Controllers\ProdutosController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('login');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->name("dashboard");

Route::get('/registrar', function () {
    return view('register');
})->name("register");

// Route::get('/alterar-senha', function () {
//     return view('password');
// })->name("password");


// Route::get('/categorias', function () {
//     return view('components/categorias/listarcategorias');
// })->name("categorias");

// Route::get('/categorias/novo', function () {
//     return view('components/categorias/novocategorias');
// })->name("novacategoria");

Route::get('/categorias', [CategoriaController::class, 'index'])->name("categorias");
Route::get('/categorias/novo', [CategoriaController::class, 'criar'])->name("novocategorias");
Route::post('/categorias/novo', [CategoriaController::class, 'store'])->name("criarcategoria");
Route::get('/categorias/deletar', [CategoriaController::class, 'destroy'])->name("deletarcategoria");
Route::get('/categorias/detalhes', [CategoriaController::class, 'editar'])->name("telacategoria");
Route::post('/categorias/detalhes', [CategoriaController::class, 'update'])->name("alterarcategoria");


Route::get('/produtos', [ProdutosController::class, 'listar'])->name("produtos");
Route::get('/produtos/novo', [ProdutosController::class, 'telacriar'])->name("novoprodutos");
Route::post('/produtos/criar', [ProdutosController::class, 'store'])->name("criarproduto");
Route::get('/produtos/deletar', [ProdutosController::class, 'destroy'])->name("deletarproduto");
Route::get('/produtos/detalhes', [ProdutosController::class, 'editar'])->name("telaalterarproduto");
Route::post('/produtos/detalhes', [ProdutosController::class, 'update'])->name("alterarproduto");

Route::get('/estoques', [EstoqueController::class, 'listar'])->name("estoques");
Route::get('/estoques/novo', [EstoqueController::class, 'telacriar'])->name("novoestoques");
Route::post('/estoques/criar', [EstoqueController::class, 'store'])->name("criarestoque");
Route::get('/estoques/detalhes', [EstoqueController::class, 'editar'])->name("telaalterarestoque");
Route::post('/estoques/detalhes', [EstoqueController::class, 'update'])->name("alterarestoque");

Route::get('/operacao/novo', [EstoqueProdutosController::class, 'nova'])->name("novaentrada");
Route::post('/operacao/adicionar', [EstoqueProdutosController::class, 'store'])->name("adicionarestoque");
Route::get('/operacao/entrada', [EstoqueProdutosController::class, 'listar'])->name("entrada");
Route::get('/solicitar-produto', [PedidosController::class, 'mostrar_pedidos'])->name("solicitacao");
Route::get('/aceitar', [PedidosController::class, 'aceitar_pedido'])->name("aceitarpedido");


