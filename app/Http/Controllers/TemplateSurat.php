<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TemplateSurat extends Controller
{
    public function create(Request $request) {
        $fileName = strtolower(str_replace(' ', '-', 'template') . '.pdf');
        $fileLoc = 'public/template';

        Storage::disk('public')->putFileAs($fileLoc, $request->file, $fileName);

        Mail::create([
            'number' => "",
            'name' => "",
            'date' => "",
            'from' => "",
            'category' => "",
            'description' => "",
            'status' => "",
            'type' => 'template',
            'file' => Storage::disk('public')->url($fileLoc . '/' . $fileName),
        ]);

        return Redirect::route('dashboard.template-surat');
    }

    public function delete() {
        $template = Mail::where('type', 'template')->get()->first();
        $template->delete();

        return Redirect::route('dashboard.template-surat');
    }

    public function view() {
        $template = Mail::where('type', 'template')->get()->first();

        return Inertia::render('TemplateSurat', [
            'template' => $template
        ]);
    }
}
