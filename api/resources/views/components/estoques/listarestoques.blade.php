@extends('dashboard')

@section('title', 'Teste')
 
@section('content')
 
<div class="card mt-4 breadcrumb mb-4">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <h4 class="card-title">
                    <span class="fa fa-boxes d-none d-md-inline"></span>
                    Estoques
                </h4>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-dark"><a style="text-decoration: none; color: white;" href="{{ route('novoestoques') }}">Novo</a></button>
            </div>
        </div>
        <hr>
        <table class="table">
            <thead>
              <tr>
                <th scope="col" style="width: 94%">Nome</th>
                <th scope="col" ></th>
              </tr>
            </thead>
            <tbody>
              @foreach ($estoques as $estoque)
                <tr>
                  <td>{{ $estoque->local }}</td>
                  <td class="col-1">
                    <button type="button" class="btn btn-dark"><a style="text-decoration: none; color: white;" name="id" href="{{ route('telaalterarestoque', ['id' => $estoque->id] ) }}"><i class="fa fa-pencil" aria-hidden="true"></i></a></button>
                  </td>
                </tr>
              @endforeach
            </tbody>
          </table>
    </div>
  </div>
  
 
@endsection