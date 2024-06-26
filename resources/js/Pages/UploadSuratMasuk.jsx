import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';

export default function UploadSuratMasuk({ auth, surat_masuk }) {
    const [values, setValues] = useState({
        id: surat_masuk.id ?? "",
        number: surat_masuk.number ?? "",
        name: surat_masuk.name ?? "",
        date: surat_masuk.date ?? "",
        from: surat_masuk.from ?? "",
        category: surat_masuk.category ?? "Surat Keputusan",
        description: surat_masuk.description ?? "",
        file: surat_masuk.file ?? "",
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
        router.post('/upload-surat-masuk', values)
    }

    async function imageUrlToFile(imageUrl) {
        try {
            const response = await fetch(imageUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch image (status ${response.status})`);
            }
            const blob = await response.blob();
            const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
            const file = new File([blob], filename, { type: blob.type });
            return file;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    useEffect(() => {
        async function addToFile() {
            const fileInputElement = document.querySelector('input[type="file"]');
            const fileToAttach = surat_masuk.file && await imageUrlToFile(surat_masuk.file);
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(fileToAttach);
            fileInputElement.files = dataTransfer.files;
        }

        surat_masuk.file && addToFile();
    }, [])

    return(
        <div
            className='flex w-full min-h-[100vh]'
        >
            <SideBar user={auth.user} />
            <div
                className='w-full p-10'
            >
                <p
                    className='flex items-center text-lg gap-2 font-bold font-montserrat'
                >
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1665 10.25C4.1665 8.36438 4.1665 7.42157 4.75229 6.83579C5.33808 6.25 6.28089 6.25 8.1665 6.25H16.7498C17.7313 6.25 18.222 6.25 18.6443 6.46115C19.0666 6.67229 19.361 7.06486 19.9498 7.85L24.9998 14.5833H42.6332C43.7533 14.5833 44.3133 14.5833 44.7411 14.8013C45.1175 14.9931 45.4234 15.299 45.6152 15.6754C45.8332 16.1032 45.8332 16.6632 45.8332 17.7833V40.55C45.8332 41.6701 45.8332 42.2302 45.6152 42.658C45.4234 43.0343 45.1175 43.3403 44.7411 43.532C44.3133 43.75 43.7533 43.75 42.6332 43.75H7.36651C6.2464 43.75 5.68635 43.75 5.25852 43.532C4.8822 43.3403 4.57624 43.0343 4.38449 42.658C4.1665 42.2302 4.1665 41.6701 4.1665 40.55V14.5833V10.25ZM34.0403 28.4596L27.7903 22.2096L26.3761 23.6238L30.919 28.1667H18.7498V30.1667H30.919L26.3761 34.7096L27.7903 36.1238L34.0403 29.8738L34.7474 29.1667L34.0403 28.4596Z" fill="black" />
                    </svg>

                    Tambah Surat Masuk
                </p>
                <p className='text-sm font-montserrat ml-14'>Tambah Surat Masuk Sistem Informasi Surat Menyurat LIMPAKO</p>
                <form onSubmit={handleSubmit} className='grid grid-cols-2 items-center gap-4 w-1/2 p-8'>
                        <label htmlFor="number">No Surat</label>
                        <input required type="text" name="number" id="number" value={values.number} onChange={handleChange} className='rounded border border-black' />
                        <label htmlFor="name">Nama Surat</label>
                        <input required type="text" name="name" id="name" value={values.name} onChange={handleChange} className='rounded border border-black' />
                        <label htmlFor="date">Tanggal Surat</label>
                        <input required type="date" name="date" id="date" value={values.date} onChange={handleChange} className='rounded border border-black' />
                        <label htmlFor="from">Asal Surat</label>
                        <input required type="text" name="from" id="from" value={values.from} onChange={handleChange} className='rounded border border-black' />
                        <label htmlFor="category">Kategori</label>
                        <select required name="category" id="category" value={values.category} onChange={handleChange} className='rounded border border-black'>
                            <option value="Surat Keputusan">Surat Keputusan</option>
                            <option value="Surat Permohonan">Surat Permohonan</option>
                            <option value="Surat Kuasa">Surat Kuasa</option>
                            <option value="Surat Pengantar">Surat Pengantar</option>
                            <option value="Surat Perintah">Surat Perintah</option>
                            <option value="Surat Undangan">Surat Undangan</option>
                            <option value="Surat Edaran">Surat Edaran</option>
                        </select>
                        <label htmlFor="description">Keterangan</label>
                        <textarea name="description" id="description" value={values.description} onChange={handleChange} className='rounded border border-black'></textarea>
                        <label htmlFor="file">File</label>
                        <input required type="file" name="file" id="file" onChange={handleChange} />
                        <button type="submit" className='bg-[#FEAF00] text-black w-fit col-span-2 p-2 rounded justify-self-center mt-4'>Simpan</button>
                </form>
            </div>
        </div>
    )
}

