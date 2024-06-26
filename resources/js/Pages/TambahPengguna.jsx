import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function TambahPengguna({ auth, user, roles, errors }) {
    const [values, setValues] = useState({
        id: user.id ?? "",
        email: user.email ?? "",
        first_name: user.first_name ?? "",
        last_name: user.last_name ?? "",
        job_title: user.job_title ?? "",
        register_date: user.register_date ?? "",
        division: user.division ?? "Kemahasiswaan",
        description: user.description ?? "",
        role: user.role ?? "",
        password: "",
        password_confirmation: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/tambah-pengguna', values)
    }

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
                    <circle cx="25.0001" cy="18.75" r="8.33333" fill="black"/>
                    <circle cx="35.4167" cy="18.75" r="6.25" fill="black"/>
                    <circle cx="14.5833" cy="18.75" r="6.25" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6009 37.5H42.645C43.2366 37.5 43.6917 36.9941 43.5826 36.4127C43.0815 33.7433 41.2471 27.0833 35.4167 27.0833C33.5706 27.0833 32.1252 27.751 30.9958 28.7482C34.137 30.7861 35.7611 34.3546 36.6009 37.5Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0041 28.7482C17.8747 27.7509 16.4293 27.0833 14.5833 27.0833C8.75287 27.0833 6.91845 33.7433 6.41737 36.4127C6.30822 36.9941 6.76332 37.5 7.35494 37.5H13.399C14.2388 34.3546 15.8629 30.7861 19.0041 28.7482Z" fill="black"/>
                    <path d="M24.9999 29.1667C33.6151 29.1667 35.105 37.717 35.3627 40.6744C35.4106 41.2246 34.9689 41.6667 34.4166 41.6667H15.5833C15.031 41.6667 14.5892 41.2246 14.6371 40.6744C14.8948 37.717 16.3847 29.1667 24.9999 29.1667Z" fill="black"/>
                    </svg>

                    Tambah Data Pengguna
                </p>
                <p className='text-sm font-montserrat ml-14'>Tambah Data Pengguna Sistem Informasi Surat Menyurat LIMPAKO</p>
                <form onSubmit={handleSubmit} className='grid grid-cols-2 items-center gap-2 w-1/2 p-8'>
                        <label htmlFor="email">Email</label>
                        <input required disabled={user.id ? true : false} type="email" name="email" id="email" value={values.email} onChange={handleChange} className='rounded border border-black disabled:text-gray-400' />
                        <div className='text-red-500 col-span-2'>
                            {errors.email ?? ''}
                        </div>
                        <label htmlFor="first_name">Nama Depan</label>
                        <input required type="text" name="first_name" id="first_name" value={values.first_name} onChange={handleChange} className='rounded border border-black' />
                        <div className='text-red-500 col-span-2'>
                            {errors.first_name ?? ''}
                        </div>
                        <label htmlFor="last_name">Nama Belakang</label>
                        <input required type="text" name="last_name" id="last_name" value={values.last_name} onChange={handleChange} className='rounded border border-black' />
                        <div className='text-red-500 col-span-2'>
                            {errors.last_name ?? ''}
                        </div>
                        <label htmlFor="job_title">Jabatan</label>
                        <input required type="text" name="job_title" id="job_title" value={values.job_title} onChange={handleChange} className='rounded border border-black' />
                        <div className='text-red-500 col-span-2'>
                            {errors.job_title ?? ''}
                        </div>
                        <label htmlFor="role">Role</label>
                        <select required disabled={user.role ? true : false} name="role" id="role" value={values.role} onChange={handleChange} className='rounded border border-black disabled:text-gray-400'>
                            {roles.map((role, index) => (
                                <option key={role.id} value={role.id}>{role.role}</option>
                            ))}
                        </select>
                        <div className='text-red-500 col-span-2'>
                            {errors.role ?? ''}
                        </div>
                        <label htmlFor="register_date">Tanggal Daftar</label>
                        <input required type="date" name="register_date" id="register_date" value={values.register_date} onChange={handleChange} className='rounded border border-black' />
                        <div className='text-red-500 col-span-2'>
                            {errors.register_date ?? ''}
                        </div>
                        <label htmlFor="division">Divisi</label>
                        <select required name="division" id="division" value={values.division} onChange={handleChange} className='rounded border border-black'>
                            <option value="Kemahasiswaan">Kemahasiswaan</option>
                        </select>
                        <div className='text-red-500 col-span-2'>
                            {errors.division ?? ''}
                        </div>
                        <label htmlFor="description">Keterangan</label>
                        <textarea name="description" id="description" value={values.description} onChange={handleChange} className='rounded border border-black'></textarea>
                        <div className='text-red-500 col-span-2'>
                            {}
                        </div>
                        <label htmlFor="password">Password</label>
                        <input required type="password" name="password" id="password" value={values.password} onChange={handleChange} className='rounded border border-black' />
                        <div className='text-red-500 col-span-2'>
                            {errors.password ?? ''}
                        </div>
                        <label htmlFor="password_confirmation">Ulangi Password</label>
                        <input required type="password" name="password_confirmation" id="password_confirmation" value={values.password_confirmation} onChange={handleChange} className='rounded border border-black' />
                        <div className='text-red-500 col-span-2'>
                            {errors.password_confirmation ?? ''}
                        </div>
                        <button type="submit" className='bg-[#FEAF00] text-black w-fit col-span-2 p-2 rounded justify-self-center mt-4'>Simpan</button>
                </form>
            </div>
        </div>
    )
}

