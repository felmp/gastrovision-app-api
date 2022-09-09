@extends('dashboard')

@section('title', 'Teste')
 
@section('content')
 
<div class="card mt-4 breadcrumb mb-4">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <h4 class="card-title">
                    <span class="fa fa-boxes d-none d-md-inline"></span>
                    Categorias
                </h4>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-dark"><a style="text-decoration: none; color: white;" href="{{ route('novocategorias') }}">Novo</a></button>
            </div>
        </div>
        <hr>
        <table class="table">
            <thead>
              <tr>
                <th scope="col" style="width: 94%">Nome</th>
                <th scope="col" ></th>
                <th scope="col" ></th>
              </tr>
            </thead>
            <tbody>
              @foreach ($categorias as $categoria)
                <tr>
                  <td>{{ $categoria->nome }}</td>
                  <td>   
                    <button type="button" class="btn btn-dark"><a style="text-decoration: none; color: white;" name="id" href="{{ route('telacategoria', ['id' => $categoria->id] ) }}"><i class="fa fa-pencil" aria-hidden="true"></i></
                  </td>
                  <td>
                    <button type="button" class="btn btn-danger"><a style="text-decoration: none; color: white;" name="id" href="{{ route('deletarcategoria', ['id' => $categoria->id] ) }}"><i class="fa fa-trash" aria-hidden="true"></i></
                  </td>
                </tr>
              @endforeach
            </tbody>
          </table>
    </div>
  </div>
  
 
@endsection