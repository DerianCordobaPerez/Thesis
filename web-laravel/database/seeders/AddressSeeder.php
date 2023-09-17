<?php

namespace Database\Seeders;

use App\Models\Address;
use Illuminate\Database\Seeder;

final class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Address::factory(
            count: 10,
        )->create();
    }
}
