<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dispenser;

class IndexController extends Controller
{
    public function index()
    {

        return inertia(
            'Index/Index',
            [
                'dispensers' => Dispenser::all()

            ]
        );
    }

    public function create()
    {
        return inertia('Index/Create');
    }

    public function store(Request $request)
    {
        Dispenser::create([
            ...$request->all(),
            ...$request->validate([ 
                'name' => 'required|min:3|max:30',
                'location' => 'required|min:3|max:255',
                'status' => 'required',
            ])
        ]);

        return redirect()->route('index.index');
    }
}
