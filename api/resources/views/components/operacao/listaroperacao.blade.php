@extends('dashboard')

@section('title', 'Teste')
 
@section('content')
 
<div class="card mt-4 breadcrumb mb-4">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <h4 class="card-title">
                    <span class="fa fa-boxes d-none d-md-inline"></span>
                    Entrada 
                </h4>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-dark"><a style="text-decoration: none; color: white;" href="{{ route('novaentrada') }}">Novo</a></button>
            </div>
        </div>
        <hr>
        @foreach ( $estoque as $e )
        <table class="table">
            <h5 class="text-center">{{ $e->local }}</h5>
           
            
            <thead>
              <tr>
                <th scope="col" style="width: 20%">Produto</th>
                <th scope="col" style="width: 80%">Quantidade</th>
                <th scope="col" style="width: 94%">Preco</th>
                <th scope="col" ></th>
                <th scope="col" ></th>
              </tr>
            </thead>
            <tbody>
              @foreach ( $estoque_produto as $ep )
                <tr>
                  @if ($ep->estoque_id == $e->id)            
                    <td>{{ $ep->nome }}</td>
                    <td>{{ $ep->quantidade_produto }}</td>
                    <td>{{ $ep->preco }}</td>
                  @endif
                  <td>
                    {{-- <button type="button" class="btn btn-dark"><a style="text-decoration: none; color: white;" name="id" href="{{ route('telaalterarproduto', ['id' => $produto->id] ) }}"><i class="fa fa-pencil" aria-hidden="true"></i></a></button> --}}
                  </td>
                  <td>
                    {{-- <button type="button" class="btn btn-danger"><a style="text-decoration: none; color: white;" name="id" href="{{ route('deletarproduto', ['id' => $produto->id] ) }}"><i class="fa fa-trash" aria-hidden="true"></i></a></button> --}}
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>
        @endforeach
    </div>
  </div>
  
 
@endsection