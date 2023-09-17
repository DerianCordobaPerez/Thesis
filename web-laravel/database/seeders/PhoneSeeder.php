<?php

namespace Database\Seeders;

use App\Models\Phone;
use Illuminate\Database\Seeder;

final class PhoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Phone::factory(
            count: 10,
        )->create();
    }
}
