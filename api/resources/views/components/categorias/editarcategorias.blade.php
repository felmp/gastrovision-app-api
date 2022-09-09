@extends('dashboard')

@section('title', 'Teste')
 
@section('content')
<form method="post" action={{route('alterarcategoria', ['id' => $id])}}>
  @csrf
  <div class="card mt-4 breadcrumb mb-4">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <h4 class="card-title">
                    <span class="fa fa-boxes d-none d-md-inline"></span>
                    Editar categoria
                </h4>
            </div>
        </div>
        <hr>
        <br>
        <div class="row">
          <div class="col">
              <label>Nome : </label>
              <input type="text" value="{{$dados['nome']}}" name="nome" maxlength="60" size="30">
              <!-- <small class="text-danger">Campo obrigatório</small> -->
          </div>
          <div class="col-8">
            <label>Status : </label>
            @if ($dados['status'] == 1)
                <input type="checkbox" name="status" value='1' aria-label="Status" checked>              
            @else
                <input type="checkbox" name="status" value='0' aria-label="Status">
            @endif
          </div>
      </div>
    </div>
    <div class="card-footer">
        <div class="row">
            <div class="col">
                <button type="submit" style='width: 80px; height:40px;'  class="btn btn-dark" value="Salvar">Salvar</button>
            </div>
            <div class="col-1">
                <button type="button" style='width: 80px; height:40px;'  class="btn btn-dark" value="voltar"><a style="text-decoration: none; color: white;" href="{{ route('categorias') }}">Voltar</a></button>
            </div>
        </div>
    </div>
  </div>
</form>

 
@endsection

