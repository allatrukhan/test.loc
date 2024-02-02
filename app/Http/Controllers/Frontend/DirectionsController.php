<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DirectionsController extends Controller
{
    
    public function index() : Response
    {

        return Inertia::render('Directions/Directions', []);

    }

}
