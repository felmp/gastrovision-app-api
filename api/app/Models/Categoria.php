<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    
    public $timestamps = false;
    
    protected $table = "categorias";

    protected $fillable = [
        'nome',
        'status',
    ];

    public function produto()
    {
        return $this->belongsTo(Produto::class);
    }
}
