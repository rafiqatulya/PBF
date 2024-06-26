<?php

namespace App\Http\Controllers;

use App\Exports\MailsExport;
use App\Models\Mail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Maatwebsite\Excel\Facades\Excel;

class SuratMasukController extends Controller
{
    public function list(Request $request): Response
    {
        $all_surat_masuk_count = Mail::where('type', 'in')->count();
        $surat_masuk = Mail::where('type', 'in')
            ->when($request->search_key, function ($query, $searchKey) {
                return $query->where(function ($subquery) use ($searchKey) {
                    $subquery->where('name', 'like', '%' . $searchKey . '%')
                        ->orWhere('number', 'like', '%' . $searchKey . '%')
                        ->orWhere('from', 'like', '%' . $searchKey . '%');
                });
            })
            ->when($request->page, function ($query, $page) {
                // Get the first 10 times the number of the current page
                $skip = 10 * max(0, $page - 1);
                return $query->skip($skip)->take(10);
            })->take(10)->get();

        return Inertia::render('DataSuratMasuk', [
            'surat_masuk' => $surat_masuk,
            'all_surat_masuk_count' => $all_surat_masuk_count,
            'search_key' => $request->search_key,
            'page' => $request->page,
        ]);
    }

    public function laporan(Request $request): Response
    {
        $entriesShown = $request->entriesShown ?? 5;
        // $start_date = $request->start_date ?? date('Y-m-01'); // First day of current month
        // $end_date = $request->end_date ?? date('Y-m-t'); // Last day of current month

        $all_surat_masuk_count = Mail::where('type', 'in')->count();
        $surat_masuk = Mail::where('type', 'in')
            ->when($request->search_key, function ($query, $searchKey) {
                return $query->where(function ($subquery) use ($searchKey) {
                    $subquery->where('name', 'like', '%' . $searchKey . '%')
                        ->orWhere('number', 'like', '%' . $searchKey . '%')
                        ->orWhere('from', 'like', '%' . $searchKey . '%');
                });
            })
            ->when($request->start_date && $request->end_date, function ($query) use ($request) {
                return $query->whereBetween('date', [$request->start_date, $request->end_date]);
            })
            ->when($request->page, function ($query, $page) use ($entriesShown) {
                $skip = $entriesShown * max(0, $page - 1);
                return $query->skip($skip)->take($entriesShown);
            })->take($entriesShown)->get();

        return Inertia::render('LaporanSuratMasuk', [
            'surat_masuk' => $surat_masuk,
            'all_surat_masuk_count' => $all_surat_masuk_count,
            'search_key' => $request->search_key,
            'page' => $request->page,
            'entriesShown' => $entriesShown,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ]);
    }


    public function add(Request $request): RedirectResponse
    {
        if ($request->id) {
            $fileName = strtolower(str_replace(' ', '-', $request->name) . '.pdf');
            $fileLoc = 'public/surat_masuk';

            Storage::disk('public')->putFileAs($fileLoc, $request->file, $fileName);

            $surat_masuk = Mail::find($request->id);
            $surat_masuk->number = $request->number;
            $surat_masuk->name = $request->name;
            $surat_masuk->date = $request->date;
            $surat_masuk->from = $request->from;
            $surat_masuk->category = $request->category;
            $surat_masuk->description = $request->description;
            $surat_masuk->file = Storage::disk('public')->url($fileLoc . '/' . $fileName);
            $surat_masuk->save();

            return Redirect::route('dashboard.data-surat-masuk');
        }

        $fileName = strtolower(str_replace(' ', '-', $request->name) . '.pdf');
        $fileLoc = 'public/surat_masuk';

        Storage::disk('public')->putFileAs($fileLoc, $request->file, $fileName);

        Mail::create([
            'number' => $request->number,
            'name' => $request->name,
            'date' => $request->date,
            'from' => $request->from,
            'category' => $request->category,
            'description' => $request->description,
            'status' => 'Terkirim',
            'type' => 'in',
            'file' => Storage::disk('public')->url($fileLoc . '/' . $fileName),
        ]);

        return Redirect::route('dashboard.data-surat-masuk');
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('UploadSuratMasuk', [
            'surat_masuk' => Mail::find($request->id)
        ]);
    }

    public function updateStatus(Request $request): RedirectResponse
    {
        if (!$request->id) {
            return back();
        }

        $surat_masuk = Mail::find($request->id);
        $surat_masuk->status = 'Telah Ditindak Lanjuti';
        $surat_masuk->save();

        return Redirect::back();
    }

    public function delete(Request $request): RedirectResponse
    {
        $surat_masuk = Mail::find($request->route('id'));
        $surat_masuk->delete();

        return Redirect::route('dashboard.data-surat-masuk');
    }

    public function export(Request $request)
    {
        return Excel::download(new MailsExport($request->entriesShown, $request->page, $request->start_date, $request->end_date, $request->search_key), 'mails.xlsx');
    }
}
