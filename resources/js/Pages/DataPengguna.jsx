import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function DataPengguna({ auth, users, search_key, page, all_users_count }) {
    const [values, setValues] = useState({
        search_key: search_key ?? "",
        page: page ?? 1,
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
        router.get('/data-pengguna', values)
    }

    function nextPage(e) {
        values.page++
        router.get('/data-pengguna', values)
    }

    function prevPage(e) {
        values.page--
        router.get('/data-pengguna', values)
    }

    return (
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
                        <circle cx="25.0001" cy="18.75" r="8.33333" fill="black" />
                        <circle cx="35.4167" cy="18.75" r="6.25" fill="black" />
                        <circle cx="14.5833" cy="18.75" r="6.25" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6009 37.5H42.645C43.2366 37.5 43.6917 36.9941 43.5826 36.4127C43.0815 33.7433 41.2471 27.0833 35.4167 27.0833C33.5706 27.0833 32.1252 27.751 30.9958 28.7482C34.137 30.7861 35.7611 34.3546 36.6009 37.5Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0041 28.7482C17.8747 27.7509 16.4293 27.0833 14.5833 27.0833C8.75287 27.0833 6.91845 33.7433 6.41737 36.4127C6.30822 36.9941 6.76332 37.5 7.35494 37.5H13.399C14.2388 34.3546 15.8629 30.7861 19.0041 28.7482Z" fill="black" />
                        <path d="M24.9999 29.1667C33.6151 29.1667 35.105 37.717 35.3627 40.6744C35.4106 41.2246 34.9689 41.6667 34.4166 41.6667H15.5833C15.031 41.6667 14.5892 41.2246 14.6371 40.6744C14.8948 37.717 16.3847 29.1667 24.9999 29.1667Z" fill="black" />
                    </svg>

                    Data Pengguna
                </p>
                <p className='text-sm font-montserrat ml-14'>Data Pengguna Sistem Informasi Surat Menyurat LIMPAKO</p>
                <div
                    className=' flex flex-col w-full mt-10 gap-10'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <a href='/tambah-pengguna'
                            className='flex items-center gap-3 font-montserrat font-bold bg-[#FEAF00] p-2 rounded-md w-fit'
                        >
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3105 15.7622C13.7175 15.6715 13.1113 15.625 12.5001 15.625C10.4363 15.625 8.43022 16.1546 6.79293 17.1318C5.52164 17.8905 4.52786 18.8861 3.89705 20.0191C3.61091 20.533 3.95386 21.1356 4.52971 21.2556C8.22535 22.0258 12.0047 22.2546 15.7501 21.9419V21.75H14.5834C12.9266 21.75 11.5834 20.4069 11.5834 18.75C11.5834 17.1851 12.7815 15.9001 14.3105 15.7622Z" fill="#222222" />
                                <path d="M18.75 14.5833L18.75 22.9166" stroke="#222222" stroke-width="2.5" stroke-linecap="round" />
                                <path d="M22.9167 18.75L14.5834 18.75" stroke="#222222" stroke-width="2.5" stroke-linecap="round" />
                                <circle cx="12.5001" cy="8.33333" r="5.20833" fill="#222222" />
                            </svg>
                            Tambah Pengguna
                        </a>
                        <form onSubmit={handleSubmit}
                            className='w-[250px] relative flex gap-4'
                        >
                            <input type="text" name="search_key" id="search_key" value={values.search_key} onChange={handleChange} className='rounded-md w-full' placeholder='Search...' />
                        <button type="submit" className='border rounded p-2 bg-[#FEAF00]'>Search</button>
                        </form>
                    </div>
                </div>
                <div
                    className='w-full mt-4'
                >
                    <table
                        className='w-full'
                    >
                        <thead>
                            <tr className='font-montserrat font-semibold text-center bg-[#F2EAE180]'>
                                <td className='p-3 border border-[#777777]'>No.</td>
                                <td className='p-3 border border-[#777777]'>Nama Lengkap</td>
                                <td className='p-3 border border-[#777777]'>Email</td>
                                <td className='p-3 border border-[#777777]'>Jabatan</td>
                                <td className='p-3 border border-[#777777]'>Tanggal Daftar</td>
                                <td className='p-3 border border-[#777777]'>Aksi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td className='p-3 border border-[#777777] text-center'>{index + 1}</td>
                                    <td className='p-3 border border-[#777777]'>{user.first_name + ' ' + user.last_name}</td>
                                    <td className='p-3 border border-[#777777]'>{user.email}</td>
                                    <td className='p-3 border border-[#777777]'>{user.job_title}</td>
                                    <td className='p-3 border border-[#777777]'>{user.register_date}</td>
                                    <td className='p-3 border border-[#777777]'>
                                        <div className='flex items-center justify-center gap-3'>
                                            {/* <svg width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6627 13C36.6627 12.6677 36.4799 12.4229 36.1141 11.9334C33.8551 8.90973 26.824 0.5 18.5001 0.5C10.1762 0.5 3.14501 8.90973 0.886037 11.9334C0.520281 12.4229 0.337402 12.6677 0.337402 13C0.337402 13.3323 0.520281 13.5771 0.886037 14.0666C3.14501 17.0903 10.1762 25.5 18.5001 25.5C26.824 25.5 33.8551 17.0903 36.1141 14.0666C36.4799 13.5771 36.6627 13.3323 36.6627 13ZM18.5001 19.25C21.8828 19.25 24.6251 16.4518 24.6251 13C24.6251 9.54822 21.8828 6.75 18.5001 6.75C15.1173 6.75 12.3751 9.54822 12.3751 13C12.3751 16.4518 15.1173 19.25 18.5001 19.25Z" fill="#FEAF00" />
                                            </svg> */}
                                            <button onClick={() => router.put('/tambah-pengguna', {'id': user.id})}>
                                                <svg className='w-6 h-6' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1586 7.97426L25.8515 2.16514C27.1959 0.793328 27.8681 0.107422 28.7084 0.107422C29.5486 0.107422 30.2208 0.793329 31.5652 2.16514L34.1313 4.7836C35.4269 6.10567 36.0747 6.7667 36.0747 7.58332C36.0747 8.39994 35.4269 9.06097 34.1313 10.383L28.3744 16.2574C24.9827 14.2155 22.1616 11.3629 20.1586 7.97426ZM18.7134 9.44894L3.00482 25.4781C2.58875 25.9026 2.38071 26.1149 2.24429 26.3742C2.10787 26.6334 2.0507 26.9251 1.93636 27.5084L0.269283 36.0139C0.204037 36.3468 0.171414 36.5133 0.266393 36.6075C0.361371 36.7018 0.527552 36.6678 0.85991 36.6H0.859927L9.13348 34.9115C9.72894 34.79 10.0267 34.7292 10.2895 34.5862C10.5524 34.4431 10.7651 34.2261 11.1905 33.792L26.9387 17.7225C23.5935 15.6237 20.7818 12.7882 18.7134 9.44894Z" fill="#FEAF00" />
                                                </svg>
                                            </button>
                                            <button onClick={() => router.delete('/tambah-pengguna/' + user.id)} className={auth.user.id == user.id ? 'hidden' : ''}>
                                                <svg className='w-6 h-6' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.7502 12.5H6.25024V18.75H6.41691C8.30253 18.75 9.24534 18.75 9.83112 19.3358C10.4169 19.9216 10.4169 20.8644 10.4169 22.75V37.75C10.4169 40.5784 10.4169 41.9926 11.2956 42.8713C12.1743 43.75 13.5885 43.75 16.4169 43.75H33.5836C36.412 43.75 37.8262 43.75 38.7049 42.8713C39.5836 41.9926 39.5836 40.5784 39.5836 37.75V22.75C39.5836 20.8644 39.5836 19.9216 40.1694 19.3358C40.7551 18.75 41.698 18.75 43.5836 18.75H43.7502V12.5ZM20.7919 22.9167C20.7919 22.3644 20.3442 21.9167 19.7919 21.9167C19.2396 21.9167 18.7919 22.3644 18.7919 22.9167V33.3333C18.7919 33.8856 19.2396 34.3333 19.7919 34.3333C20.3442 34.3333 20.7919 33.8856 20.7919 33.3333V22.9167ZM31.2086 22.9167C31.2086 22.3644 30.7609 21.9167 30.2086 21.9167C29.6563 21.9167 29.2086 22.3644 29.2086 22.9167V33.3333C29.2086 33.8856 29.6563 34.3333 30.2086 34.3333C30.7609 34.3333 31.2086 33.8856 31.2086 33.3333V22.9167Z" fill="#FEAF00" />
                                                    <path d="M20.9754 7.02206C21.2128 6.80057 21.7359 6.60485 22.4636 6.46526C23.1913 6.32566 24.0829 6.25 25.0001 6.25C25.9173 6.25 26.8089 6.32566 27.5366 6.46526C28.2643 6.60485 28.7874 6.80057 29.0248 7.02206" stroke="#FEAF00" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div
                        className='w-full flex justify-between mt-5 items-center'
                    >
                        <p className='font-montserrat'>Showing {users.length} of {all_users_count} entries</p>
                        {all_users_count > 10 && <div className='flex'>
                            <button onClick={prevPage} className={ 'p-2 rounded-r-md border ' + (page < Math.floor(all_users_count / 10) || page === 1 ? 'hidden' : '')}>
                                Previous
                            </button>
                            <button onClick={nextPage} className={ 'p-2 rounded-r-md border ' + (page >= Math.floor(all_users_count / 10) ? 'hidden' : '')}>
                                Next
                            </button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}


