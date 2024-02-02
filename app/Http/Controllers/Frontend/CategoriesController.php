<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CategoriesController extends Controller
{
    
    public function index() : Response
    {

        return Inertia::render('Categories/Page', []);

    }

    public function show($id) : Response
    {

        return Inertia::render('Categories/[Category]', ['category'=>'T-Shirt']);

    }

}
