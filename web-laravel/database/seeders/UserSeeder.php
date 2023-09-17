<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\User;
use Illuminate\Database\Seeder;

final class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(
            count: 10,
        )->create()->hasAttached(
            Address::factory(
                count: rand(1, 15)
            )->make(),
        );
    }
}
