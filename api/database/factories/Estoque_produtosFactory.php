<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\estoque_produtos>
 */
class Estoque_produtosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'estoque_id' => 1,
            'produto_id' => 1,
            'quantidade_produto' => 5,
            'vencimento' => Carbon::parse('2022-09-18'),
        ];
    }
}
