<?php

use App\Models\User;
use Diglactic\Breadcrumbs\Breadcrumbs;
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;
 
Breadcrumbs::for('home', function (BreadcrumbTrail $trail): void {
    $trail->push('Головна', route('home'));
});

 //--------------------//

Breadcrumbs::for('directions', function (BreadcrumbTrail $trail): void {
    $trail->parent('home');
    $trail->push('Напрямки', route('directions'));
});

Breadcrumbs::for('fito_sequrity', function (BreadcrumbTrail $trail): void {
    $trail->parent('directions');
    $trail->push('Фітосанітарна безпека, насінництво та розсадництво', route('fito_sequrity'));
});


//--------------------//


Breadcrumbs::for('connections', function (BreadcrumbTrail $trail): void {
    $trail->parent('home');
    $trail->push("Зв'язки з громадськістю", route('connections'));
});

Breadcrumbs::for('left_request', function (BreadcrumbTrail $trail): void {
    $trail->parent('connections');
    $trail->push("Залишити звернення", route('left_request'));
});



// Route::get('/', [\App\Http\Controllers\Frontend\HomeController::class, 'index'])->name('home');
    Route::get('/post_content', [\App\Http\Controllers\Frontend\PostController::class, 'index'])->name('post_content');
    // Route::get('/directions', [\App\Http\Controllers\Frontend\DirectionsController::class, 'index'])->name('directions');
    // Route::get('/connections/left_request', [\App\Http\Controllers\Frontend\RequestController::class, 'index'])->name('left_request');
    // Route::get('/directions/fito_sequtity', [\App\Http\Controllers\Frontend\FitoController::class, 'index'])->name('fito_sequrity');
    Route::get('/about_management/regional_lab', [\App\Http\Controllers\Frontend\RegionalLabController::class, 'index'])->name('regional_lab');