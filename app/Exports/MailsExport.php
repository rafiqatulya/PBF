<?php

namespace App\Exports;

use App\Models\Mail;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class MailsExport implements WithMapping, FromQuery, WithHeadings, ShouldAutoSize
{
    use Exportable;

    public function __construct(int $entries_shown, int $page, $start_date, $end_date, $search_key)
    {
        $this->entries_shown = $entries_shown;
        $this->page = $page;
        $this->start_date = $start_date;
        $this->end_date = $end_date;
        $this->search_key = $search_key;

        $this->mail = Mail::where('type', 'in')
                ->when($this->search_key, function ($query, $searchKey) {
                    return $query->where(function ($subquery) use ($searchKey) {
                        $subquery->where('name', 'like', '%' . $searchKey . '%')
                            ->orWhere('number', 'like', '%' . $searchKey . '%')
                            ->orWhere('from', 'like', '%' . $searchKey . '%');
                    });
                })
                ->when($this->start_date && $this->end_date, function ($query) use ($start_date, $end_date) {
                    return $query->whereBetween('date', [$start_date, $end_date]);
                })
                ->when($this->page, function ($query, $page) use ($entries_shown) {
                    $skip = $entries_shown * max(0, $page - 1);
                    return $query->skip($skip)->take($entries_shown);
                })->take($entries_shown)
                ;
    }

    public function headings(): array
    {
        return [
            'Number',
            'Name',
            'Date',
            'From',
            'Category',
            'Status',
            'Description',
        ];
    }

    public function map($mail): array
    {
        return [
            $mail->number,
            $mail->name,
            $mail->date,
            $mail->from,
            $mail->category,
            $mail->status,
            $mail->description,
        ];
    }

    public function query()
    {
        return $this->mail;
    }
}
