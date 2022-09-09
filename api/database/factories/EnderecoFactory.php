<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\endereco>
 */
class EnderecoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'cep' => '59.133-040',
            'logradouro' => 'Rua do Xareu',
            'numero' => '150',
            'bairro' => 'Pajuçara',
            'municipio' => 'Natal',
            'uf' => 'RN',
            'complemento' => 'Próximo ao supershow bandeirantes',
        ];
    }
}
