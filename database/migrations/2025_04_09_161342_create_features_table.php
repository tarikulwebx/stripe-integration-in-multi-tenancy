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
        Schema::create('features', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lookup_key');
            $table->string('description')->nullable();
            $table->timestamps();
            $table->unique('lookup_key');
            $table->index('lookup_key');
        });

        Schema::create('feature_plan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('plan_id')->constrained('plans')->onDelete('cascade');
            $table->foreignId('feature_id')->constrained('features')->onDelete('cascade');
            $table->unique(['plan_id', 'feature_id']);
            $table->index(['plan_id', 'feature_id']);
        });

        Schema::create('feature_tenant', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenant_id')->constrained('tenants')->onDelete('cascade');
            $table->foreignId('feature_id')->constrained('features')->onDelete('cascade');
            $table->unique(['tenant_id', 'feature_id']);
            $table->index(['tenant_id', 'feature_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('features');
        Schema::dropIfExists('feature_plan');
        Schema::dropIfExists('feature_tenant');
    }
};
