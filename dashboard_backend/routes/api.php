<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\UserController;











// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::post('add_product',[ProductController::class,'add_product']);
Route::get('list',[ProductController::class,'list']);
Route::delete('delete/{id}',[ProductController::class,'Delete']);

