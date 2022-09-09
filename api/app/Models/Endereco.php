<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    use HasFactory;

    public $timestamps = false;
    
    protected $table = 'enderecos';

    protected $fillable = [
        'cep',
        'logradouro',
        'numero',
        'bairro',
        'municipio',
        'uf',
        'complemento',
    ];

    public function estoque()
    {
        return $this->belongsTo(Estoque::class);
    }
}
