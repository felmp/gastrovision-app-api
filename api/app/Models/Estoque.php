<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estoque extends Model
{
    use HasFactory;

    public $timestamps = false;
    
    protected $table = "estoques";

    protected $fillable = [
        'local',
        'endereco_id',
        'latitude',
        'longitude',
    ];

    public function endereco()
    {
        return $this->hasOne(Endereco::class);
    }
}
