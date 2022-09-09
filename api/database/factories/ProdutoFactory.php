<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Produtos>
 */
class ProdutoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nome' => 'Cateter Duplo J com Fio Guia',
            'cod_ncm' => 'cod-ce-f-29/22',
            'preco' => 35.00,
            'categoria_id' => 1,
            'descricao' => 'Os fios guia são desenhados para direcionar um cateter em uma localização anatômica desejada durante procedimentos de diagnóstico ou intervenção, facilitando a colocação do instrumento.',
            'registro_anvisa' => 1001
        ];
    }
}
