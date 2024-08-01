<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

Route::get('/', [IndexController::class, 'index'])->name('index.index');
Route::get('/create', [IndexController::class, 'create'])->name('index.create');
Route::post('/', [IndexController::class, 'store'])->name('index.store');
