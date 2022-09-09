@extends('dashboard')

@section('title', 'Teste')
 
@section('content')
<form method="post" action={{route('alterarproduto', ['id' => $id])}}>
  @csrf
  <div class="card mt-4 breadcrumb mb-4">
    <div class="card-body">
      <div class="row">
          <div class="col">
              <h4 class="card-title">
                  <span class="fa fa-boxes d-none d-md-inline"></span>
                  Editar estoque
              </h4>
          </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-2">
            <label class="form-label">Nome : </label>
            <input class="form-control" value="{{ $dados['local'] }}" type="text" name="local">
            <!-- <small class="text-danger">Campo obrigatório</small> -->
        </div>
        <div class="col-2">
          <label class="form-label">Cep : </label>
          <input class="form-control" value="{{ $enderecos->cep }}" type="text" name="cep">
          <!-- <small class="text-danger">Campo obrigatório</small> -->
        </div>
        <div class="col">
          <label class="form-label">Logradouro : </label>
          <input class="form-control" value="{{ $enderecos->logradouro }}" type="text" name="logradouro">
          <!-- <small class="text-danger">Campo obrigatório</small> -->
        </div>
        <div class="col-2">
            <label class="form-label">Numero : </label>
            <input class="form-control" value="{{ $enderecos->numero }}" type="number" name="numero">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <label class="form-label">Bairro : </label>
            <input class="form-control" value="{{ $enderecos->bairro }}" type="text" name="bairro">
        </div>
        <div class="col">
            <label class="form-label">Municipio : </label>
            <input class="form-control" value="{{ $enderecos->municipio }}" type="text" name="municipio">
        </div>
        <div class="col">
            <label class="form-label">UF : </label>
            <input class="form-control" value="{{ $enderecos->uf }}" type="text" name="uf">
        </div>
        <div class="col">
            <label class="form-label">Complemento : </label>
            <input class="form-control" value="{{ $enderecos->complemento }}" type="text" name="complemento">
        </div>
          {{-- <div class="col-1">
            <label class="form-check-label">Status </label>
            <input class="form-check-input" type="checkbox" name="status" value="1" aria-label="Status">
          </div> --}}
      </div>
    
    </div>
    <div class="card-footer">
        <div class="row">
            <div class="col">
                <button type="submit" style='width: 80px; height:40px;'  class="btn btn-dark" value="Salvar">Salvar</button>
            </div>
            <div class="col-1">
                <button type="button" style='width: 80px; height:40px;'  class="btn btn-dark" value="voltar"><a style="text-decoration: none; color: white;" href="{{ route('estoques') }}">Voltar</a></button>
            </div>
        </div>
    </div>
</form>

 
@endsection

