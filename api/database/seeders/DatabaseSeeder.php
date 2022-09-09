<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create();
        // \App\Models\Cliente::factory(5)->create();
        // \App\Models\Endereco::factory(5)->create();
        // \App\Models\categoria::factory(5)->create();
        // \App\Models\Produto::factory(5)->create();
        // \App\Models\Estoque::factory(5)->create();
        // \App\Models\Estoque_produtos::factory(5)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
