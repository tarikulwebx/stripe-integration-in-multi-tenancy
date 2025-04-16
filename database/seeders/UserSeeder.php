<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate([
            'email' => 'tarikulwebx@gmail.com',
        ], [
            'name' => 'Tarikul Islam',
            'email' => 'tarikulwebx@gmail.com',
            'password' => Hash::make('password'),
            'is_admin' => true,
        ]);

        User::firstOrCreate([
            'email' => 'admin@gmail.com',
        ], [
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'is_admin' => true,
        ]);

        User::firstOrCreate([
            'email' => 'admin@gmail.com',
        ], [
            'name' => 'User',
            'email' => 'user@gmail.com',
            'password' => Hash::make('password'),
            'is_admin' => false,
        ]);
    }
}
