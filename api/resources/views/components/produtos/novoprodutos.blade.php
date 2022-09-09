@extends('dashboard')

@section('title', 'Teste')
 
@section('content')
<form method="post" action={{ route('criarproduto') }} enctype="multipart/form-data">
  @csrf
  <div class="card mt-4 breadcrumb mb-4">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <h4 class="card-title">
                    <span class="fa fa-boxes d-none d-md-inline"></span>
                    Novo produto
                </h4>
            </div>
        </div>
        <hr>
        <div class="row">
          <div class="col">
              <label class="form-label">Nome : </label>
              <input class="form-control" type="text" name="nome">
              <!-- <small class="text-danger">Campo obrigatório</small> -->
          </div>
          <div class="col-4">
            <label class="form-label">Categoria : </label>
            <select name="categoria" class="form-select form-select-md">
                @foreach ($categorias as $categoria)
                    <option value={{ $categoria->id }}>{{ $categoria->nome }}</option>
                @endforeach
            </select>
          </div>
          <div class="col">
            <label class="form-label">Preço : </label>
            <input class="form-control" type="text" name="preco">
            <!-- <small class="text-danger">Campo obrigatório</small> -->
          </div>
      </div>
      <div class="row">
        <div class="col">
            <label class="form-label">Descrição : </label>
            <input class="form-control" type="text" name="descricao">
            <!-- <small class="text-danger">Campo obrigatório</small> -->
        </div>
        <div class="col">
            <label class="form-label">Registro Anvisa : </label>
            <input class="form-control" type="text" name="registro">
            <!-- <small class="text-danger">Campo obrigatório</small> -->
        </div>
          <div class="col">
            <label class="form-label" for="image">Imagem : </label>
            <input type="file" class="form-control" name="imagem" id="imagem" value="1" aria-label="imagem">
          </div>
      </div>
      
    </div>
    <div class="card-footer">
        <div class="row">
            <div class="col">
                <button type="submit" style='width: 80px; height:40px;'  class="btn btn-dark" value="Salvar">Salvar</button>
            </div>
            <div class="col-1">
                <button type="button" style='width: 80px; height:40px;'  class="btn btn-dark" value="voltar"><a style="text-decoration: none; color: white;" href="{{ route('produtos') }}">Voltar</a></button>
            </div>
        </div>
    </div>
  </div>
</form>

 
@endsection

