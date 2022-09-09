<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index()
    {
        $categorias = Categoria::all();
        return view('components.categorias.listarcategorias', compact('categorias'));
    }

    public function store(Request $request)
    {

        $newCategoria = new Categoria();
        $newCategoria->nome = $request->input('nome');
        if($request->status){
            $newCategoria->status = $request->input('status');
        } else {
            $newCategoria->status = 0;
        }
        
        $newCategoria->save();
        
        return $this->index();
    }
    
    public function show($id)
    {
        $categoria = Categoria::findOrFail($id);
        return $categoria;
    }

    public function update(Request $request)
    {
        $id = $request->id;
        $oldcategoria = Categoria::findOrFail($id);
        $oldcategoria->nome = $request->input('nome');
        if($request->status){
            $oldcategoria->status = $request->input('status');
        } else {
            $oldcategoria->status = 0;
        }
        $response = $oldcategoria->update();
        return $this->index();
    }

    public function destroy(Request $request)
    {
        $id = $request->id;
        $categoria = Categoria::findOrFail($id);
        $categoria->delete();
        return $this->index();
    }

    public function criar()
    {
        return view('components.categorias.novocategorias');
    }

    public function editar(Request $request)
    {
        $id = $request->id;
        $dados = $this->show($id);
        // return $dados["nome"];

        return view('components.categorias.editarcategorias', compact('dados','id'));
    }

    
}