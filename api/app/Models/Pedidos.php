<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedidos extends Model
{
    use HasFactory;

    public $timestamps = false;
    
    protected $table = "pedidos";

    protected $fillable = [
        'cliente_id',
        'estoque_id',
        'produto_id',
        'quantidade',
        'descricao',
        'status',
        'titulo'
    ];

}
