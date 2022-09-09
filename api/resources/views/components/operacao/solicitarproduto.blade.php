@extends('dashboard')

@section('title', 'Teste')
 
@section('content')
 
<div class="card mt-4 breadcrumb mb-4">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <h4 class="card-title">
                    <span class="fa fa-boxes d-none d-md-inline"></span>
                    Solicitar produto
                </h4>
            </div>
        </div>
        <hr>
        <table class="table">        
            <h5 class="text-center">Solicitações</h5>
   
            <thead>
              <tr>
                <th scope="col" style="width: 10%">Titulo</th>
                <th scope="col" style="width: 20%">Produto</th>
                <th scope="col" style="width: 20%">Cliente</th>
                <th scope="col" style="width: 10%">Estoque</th>
                <th scope="col" style="width: 10%">Quantidade</th>
                <th scope="col" style="width: 40%">Descricao</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              @foreach ( $pedidosAprovados as $p )
                <tr>
                  @if ($p->titulo == null)
                    <td> Sem titulo </td>
                  @else
                    <td>{{ $p->titulo }}</td>
                  @endif
                    <td>{{ $p->produto }}</td>
                    <td>{{ $p->cliente }}</td>
                    <td>{{ $p->local }}</td>
                    <td>{{ $p->quantidade }}</td>
                    <td>{{ $p->descricao }}</td>
                    <td>
                      <button type="button" class="btn btn-dark"><a style="text-decoration: none; color: white;" name="id" href="{{ route('aceitarpedido', ['estoque_id' => $p->estoque_id, 'produto_id' => $p->produto_id, 'quantidade' => $p->quantidade, 'id' => $p->id ]) }}"><i class="fa fa-check" aria-hidden="true"></i></button>
                    </td>
                </tr>
              @endforeach
            </tbody>
          </table>
    </div>
  </div>
  
 
@endsection