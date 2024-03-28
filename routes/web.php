<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/about_management/trade_union_organization', function () {
//     return view('frontend/trade_union');
// });
// Route::get('/about_management/work_schedule', function () {
//     return view('frontend/work_schedule');
// });
// Route::get('/about_management/regional_lab', function () {
//     return view('frontend/regional_lab');
// });
// Route::get('/directions/fito_security', function () {
//     return view('frontend/fito_sequrity');
// });
// Route::get('/conections/left_request', function () {
//     return view('frontend/request_form');
// });

Route::name('frontend.')->group(function (){

    Route::get('/', [\App\Http\Controllers\Frontend\HomeController::class, 'index'])->name('home');
    Route::get('/post_content', [\App\Http\Controllers\Frontend\PostController::class, 'index'])->name('post_content');
    Route::get('/connections/left_request', [\App\Http\Controllers\Frontend\RequestController::class, 'index'])->name('left_request');
    Route::get('/connections', [\App\Http\Controllers\Frontend\ConnectionsController::class, 'index'])->name('connections');
    Route::get('/directions', [\App\Http\Controllers\Frontend\DirectionsController::class, 'index'])->name('directions');
    Route::get('/hash_tag_search', [\App\Http\Controllers\Frontend\HashTagSearchController::class, 'index'])->name('hash_tag_search');
    Route::get('/directions/fito_sequrity', [\App\Http\Controllers\Frontend\FitoController::class, 'index'])->name('fito_sequrity');
    Route::get('/about_management/regional_lab', [\App\Http\Controllers\Frontend\RegionalLabController::class, 'index'])->name('regional_lab');
    Route::get('/about_management', [\App\Http\Controllers\Frontend\ManagementController::class, 'index'])->name('about_management');
    // Route::resource('/categories', \App\Http\Controllers\Frontend\CategoriesController::class)->names('categories.');

});
