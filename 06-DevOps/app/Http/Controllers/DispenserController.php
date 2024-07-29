<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dispenser;

class DispenserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia(
            'Dispenser/Index',
            [
                'dispensers' => Dispenser::all()
            ]
        );
    }

    /**
     * Show the form for creating a new resource. z
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Dispenser $dispenser)
    {

        return inertia(
            'Dispenser/Show',
            [
                // 'dispenser' => Dispenser::find($id)
                'dispenser' => $dispenser 
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
