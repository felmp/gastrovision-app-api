@extends('dashboard')

@section('title', 'Teste')
 
@section('content')
 
<div class="card mt-4 breadcrumb mb-4">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <h4 class="card-title">
                    <span class="fa fa-boxes d-none d-md-inline"></span>
                    Produtos
                </h4>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-dark"><a style="text-decoration: none; color: white;" href="{{ route('novoprodutos') }}">Novo</a></button>
            </div>
        </div>
        <hr>
        <table class="table">
            <thead>
              <tr>
                <th scope="col" style="width: 20%">Nome</th>
                <th scope="col" style="width: 80%">Descricão</th>
                <th scope="col" style="width: 94%">Preco</th>
                <th scope="col" ></th>
                <th scope="col" ></th>
              </tr>
            </thead>
            <tbody>
              @foreach ($produtos as $produto)
                <tr>
                  <td>{{ $produto->nome }}</td>
                  <td>{{ $produto->descricao }}</td>
                  <td>{{ $produto->preco }}</td>
                  <td>
                    <button type="button" class="btn btn-dark"><a style="text-decoration: none; color: white;" name="id" href="{{ route('telaalterarproduto', ['id' => $produto->id] ) }}"><i class="fa fa-pencil" aria-hidden="true"></i></a></button>
                  </td>
                 <td>
                    <button type="button" class="btn btn-danger"><a style="text-decoration: none; color: white;" name="id" href="{{ route('deletarproduto', ['id' => $produto->id] ) }}"><i class="fa fa-trash" aria-hidden="true"></i></a></button>
                  </td>
                </tr>
              @endforeach
            </tbody>
          </table>
    </div>
  </div>
  
 
@endsection