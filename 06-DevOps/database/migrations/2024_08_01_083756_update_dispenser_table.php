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
        Schema::table('dispensers', function (Blueprint $table) {
            $table->string('name');
            $table->string('status');
            $table->string('location');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('dispensers', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->dropColumn('status');
            $table->dropColumn('location');
        });
    }
};
