<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    
    public $timestamps = false;
    
    protected $table = "produtos";

    protected $fillable = [
        'nome',
        'cod_ncm',
        'preco',
        'categoria_id',
        'descricao',
        'registro_anvisa',
        'imagem'
    ];

    public function categoria()
    {
        return $this->hasOne(Produto::class);
    }

}
