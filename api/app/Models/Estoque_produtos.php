<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estoque_produtos extends Model
{
    use HasFactory;

    
    public $timestamps = false;
    
    protected $table = "estoque_produtos";

    protected $fillable = [
        'estoque_id',
        'produto_id',
        'quantidade_produto',
        'lote',
        'vencimento',
    ];

}
