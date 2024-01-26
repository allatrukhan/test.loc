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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/about_management/trade_union_organization', function () {
    return view('frontend/trade_union');
});
Route::get('/about_management/work_schedule', function () {
    return view('frontend/work_schedule');
});
Route::get('/about_management/regional_lab', function () {
    return view('frontend/regional_lab');
});
Route::get('/directions/fito_security', function () {
    return view('frontend/fito_sequrity');
});
Route::get('/conections/left_request', function () {
    return view('frontend/request_form');
});

Route::name('frontend.')->group(function (){

    Route::get('/', [\App\Http\Controllers\Frontend\HomeController::class, 'index'])->name('home');

});
