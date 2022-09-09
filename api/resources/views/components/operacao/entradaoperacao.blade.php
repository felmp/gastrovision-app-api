@extends('dashboard')

@section('title', 'Teste')
 
@section('content')
<form method="post" action={{ route('adicionarestoque') }} enctype="multipart/form-data">
  @csrf
  <div class="card mt-4 breadcrumb mb-4">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <h4 class="card-title">
                    <span class="fa fa-boxes d-none d-md-inline"></span>
                    Nova entrada no estoque
                </h4>
            </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-4">
            <label class="form-label">Estoque : </label>
            <select name="estoque" class="form-select form-select-md">
                @foreach ($estoques as $e)
                    <option value={{ $e->id }}>{{ $e->local }}</option>
                @endforeach
            </select>
          </div>
          <div class="col-4">
            <label class="form-label">Produto : </label>
            <select name="produto" class="form-select form-select-md">
                @foreach ($produtos as $p)
                    <option value={{ $p->id }}>{{ $p->nome }}</option>
                @endforeach
            </select>
          </div>
          <div class="col">
            <label class="form-label">Quantidade <small class="text-danger">*</small> :</label>
            <input class="form-control" type="text" name="quantidade">
            {{-- <small class="text-danger">Campo obrigatório</small> --}}
          </div>
          <div class="col">
            <label class="form-label">Lote : </label>
            <input class="form-control" type="text" name="lote">
            <!-- <small class="text-danger">Campo obrigatório</small> -->
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

