<?php

use App\Http\Controllers\IndexController;
use App\Http\Controllers\DispenserController;
use Illuminate\Support\Facades\Route;


Route::get('/', [IndexController::class, 'index']);
Route::get('/create', [IndexController::class, 'create']);

Route::resource('/dispensers', DispenserController::class)->only(['index', 'show']);
