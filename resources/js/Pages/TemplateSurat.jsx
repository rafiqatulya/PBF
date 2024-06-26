import { Head, router } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function TemplateSurat({ auth, template }) {

    const [values, setValues] = useState({
        file: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        if(key == 'file') {
            setValues(values => ({
                ...values,
                [key]: e.target.files[0],
            }))
            return
        }
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/template-surat', values)
    }

    function handleDelete(e) {
        e.preventDefault()
        router.delete('/template-surat')
    }

    return (
        <>
            <Head title="Template Surat" />
            <div
                className='flex w-full min-h-[100vh]'
            >
                <SideBar user={auth.user} />
                <div
                    className='w-full p-10 flex flex-col items-center justify-center gap-4 '
                >
                    {template ?
                        <>
                        <div className='flex gap-4 justify-between items-center'>
                            <form onSubmit={handleDelete}>
                                <button type='submit' className='bg-red-500 items-center p-2 rounded-md flex gap-2 self-end font-medium'>
                                    <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /> </svg>
                                    Hapus Template Surat
                                </button>
                            </form>
                            <a href={template.file} download className='bg-[#FEAF00] items-center p-2 rounded-md flex gap-2 self-end font-medium'>
                                <svg className='w-5 h-5' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.5001 14.5833L11.793 15.2904L12.5001 15.9975L13.2072 15.2904L12.5001 14.5833ZM13.5001 5.20825C13.5001 4.65597 13.0524 4.20825 12.5001 4.20825C11.9478 4.20825 11.5001 4.65597 11.5001 5.20825L13.5001 5.20825ZM6.58464 10.082L11.793 15.2904L13.2072 13.8761L7.99886 8.66781L6.58464 10.082ZM13.2072 15.2904L18.4155 10.082L17.0013 8.66781L11.793 13.8761L13.2072 15.2904ZM13.5001 14.5833L13.5001 5.20825L11.5001 5.20825L11.5001 14.5833L13.5001 14.5833Z" fill="#33363F" /> <path d="M5.20825 16.6667L5.20825 17.7084C5.20825 18.859 6.14099 19.7917 7.29159 19.7917L17.7083 19.7917C18.8588 19.7917 19.7916 18.859 19.7916 17.7084V16.6667" stroke="#33363F" stroke-width="2" /> </svg>
                                Unduh Template Surat
                            </a>
                        </div>
                            <object data={template.file} type="application/pdf" width="80%" height="100%">
                                <p>Alternative text - include a link <a href={template.file}>to the PDF!</a></p>
                            </object>
                        </> :
                        <>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-start'>
                                <label className='bg-[#FEAF00] text-center p-2 rounded-md ' htmlFor="file">Template not found! Upload here:</label>
                                <input required type="file" accept='application/pdf' name="file" id="file" onChange={handleChange} />
                                <button type="submit" className='bg-[#FEAF00] text-black p-2 rounded-md'>Submit</button>
                            </form>
                        </>
                }

                </div>
            </div>
        </>
    )
}
