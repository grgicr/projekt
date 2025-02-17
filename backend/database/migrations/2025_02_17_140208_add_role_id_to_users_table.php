<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'role_id')) { // Provjera da li kolona već postoji
                $table->unsignedBigInteger('role_id')->default(2)->after('password'); // Dodajemo role_id nakon passworda

                // Dodajemo foreign key na roles tabelu
                $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'role_id')) { // Provjera da li kolona postoji prije brisanja
                $table->dropForeign(['role_id']);
                $table->dropColumn('role_id');
            }
        });
    }
};
