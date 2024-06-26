import { router } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';
import { useState } from 'react';

export default function DataSuratKeluar({ auth, surat_keluar, search_key, page, all_surat_keluar_count }){
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
        router.get('/data-surat-keluar', values)
    }

    function nextPage(e) {
        values.page++
        router.get('/data-surat-keluar', values)
    }

    function prevPage(e) {
        values.page--
        router.get('/data-surat-keluar', values)
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
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16675 10.25C4.16675 8.36438 4.16675 7.42157 4.75253 6.83579C5.33832 6.25 6.28113 6.25 8.16675 6.25H16.7501C17.7315 6.25 18.2222 6.25 18.6445 6.46115C19.0668 6.67229 19.3612 7.06486 19.9501 7.85L25.0001 14.5833H42.6334C43.7535 14.5833 44.3136 14.5833 44.7414 14.8013C45.1177 14.9931 45.4237 15.299 45.6154 15.6754C45.8334 16.1032 45.8334 16.6632 45.8334 17.7833V40.55C45.8334 41.6701 45.8334 42.2302 45.6154 42.658C45.4237 43.0343 45.1177 43.3403 44.7414 43.532C44.3136 43.75 43.7535 43.75 42.6334 43.75H7.36675C6.24664 43.75 5.68659 43.75 5.25877 43.532C4.88244 43.3403 4.57648 43.0343 4.38474 42.658C4.16675 42.2302 4.16675 41.6701 4.16675 40.55V14.5833V10.25ZM34.0405 28.4596L27.7905 22.2096L26.3763 23.6238L30.9192 28.1667H18.7501V30.1667H30.9192L26.3763 34.7096L27.7905 36.1238L34.0405 29.8738L34.7476 29.1667L34.0405 28.4596Z" fill="black"/>
                    </svg>

                    Data Surat Keluar
                </p>
                {/* <p className='text-sm font-montserrat ml-14'>Data Pengguna Sistem Informasi Surat Menyurat LIMPAKO</p> */}
                <div
                    className=' flex flex-col w-full mt-10 gap-10'
                >
                    <div
                        className='flex gap-5'
                    >
                        <a
                            href='/upload-surat-keluar'
                            className='flex items-center gap-3 font-montserrat font-bold bg-[#FEAF00] p-2 rounded-md'
                        >
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8334 2.08331C14.2999 2.08331 15.4813 2.08331 16.4464 2.1522C16.32 2.45121 16.2501 2.77993 16.2501 3.12498V3.74998L15.6251 3.74998C14.2444 3.74998 13.1251 4.86927 13.1251 6.24998C13.1251 7.63069 14.2444 8.74998 15.6251 8.74998H16.2501V9.37498C16.2501 10.7557 17.3694 11.875 18.7501 11.875C19.6197 11.875 20.3855 11.431 20.8334 10.7574V14.9166C20.8334 18.6879 20.8334 20.5735 19.6618 21.7451C18.4903 22.9166 16.6047 22.9166 12.8334 22.9166H12.1668C8.39551 22.9166 6.50989 22.9166 5.33832 21.7451C4.16675 20.5735 4.16675 18.6879 4.16675 14.9166V10.0833C4.16675 6.31208 4.16675 4.42646 5.33832 3.25489C6.50989 2.08331 8.39551 2.08331 12.1667 2.08331H12.8334ZM8.33341 11.5C7.78113 11.5 7.33341 11.9477 7.33341 12.5C7.33341 13.0523 7.78113 13.5 8.33341 13.5H12.5001C13.0524 13.5 13.5001 13.0523 13.5001 12.5C13.5001 11.9477 13.0524 11.5 12.5001 11.5H8.33341ZM8.33341 14.625C7.78113 14.625 7.33341 15.0727 7.33341 15.625C7.33341 16.1773 7.78113 16.625 8.33341 16.625H14.5834C15.1357 16.625 15.5834 16.1773 15.5834 15.625C15.5834 15.0727 15.1357 14.625 14.5834 14.625H8.33341ZM8.33341 17.75C7.78113 17.75 7.33341 18.1977 7.33341 18.75C7.33341 19.3023 7.78113 19.75 8.33341 19.75H12.5001C13.0524 19.75 13.5001 19.3023 13.5001 18.75C13.5001 18.1977 13.0524 17.75 12.5001 17.75H8.33341Z" fill="black"/>
                            <path d="M18.75 3.125L18.75 9.375" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            <path d="M21.875 6.25L15.625 6.25" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            </svg>

                            Upload Surat Keluar
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
                    className='w-full mt-10'
                >
                    <table
                        className='w-full'
                    >
                        <thead>
                            <tr className='font-montserrat font-semibold text-center bg-[#F2EAE180]'>
                                <td className='p-3 border border-[#777777]'>No.</td>
                                <td className='p-3 border border-[#777777]'>No Surat</td>
                                <td className='p-3 border border-[#777777]'>Nama Surat</td>
                                <td className='p-3 border border-[#777777]'>Tgl Surat</td>
                                <td className='p-3 border border-[#777777]'>Asal Surat</td>
                                <td className='p-3 border border-[#777777]'>Kategori</td>
                                <td className='p-3 border border-[#777777]'>Status</td>
                                <td className='p-3 border border-[#777777]'>Aksi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {surat_keluar.map((item, index) => (
                                <tr key={item.id}>
                                    <td className='p-3 border border-[#777777] text-center'>{index + 1}</td>
                                    <td className='p-3 border border-[#777777]'>{item.number}</td>
                                    <td className='p-3 border border-[#777777]'>{item.name}</td>
                                    <td className='p-3 border border-[#777777]'>{item.date}</td>
                                    <td className='p-3 border border-[#777777]'>{item.from}</td>
                                    <td className='p-3 border border-[#777777]'>{item.category}</td>
                                    <td className='p-3 border border-[#777777]'>
                                        <div className='flex items-center justify-center'>
                                            {item.status === 'Terkirim' ?
                                            'Terkirim' :
                                            <button className='mx-auto' onClick={() => router.post('/tindak-lanjuti-surat-keluar', {'id': item.id})}>
                                                <svg className='w-6 h-6' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 30.625C24.7487 30.625 30.625 24.7487 30.625 17.5C30.625 10.2513 24.7487 4.375 17.5 4.375C10.2513 4.375 4.375 10.2513 4.375 17.5C4.375 24.7487 10.2513 30.625 17.5 30.625ZM16.8099 22.5152L24.1016 13.7652L22.5651 12.4848L15.9745 20.3936L12.3738 16.7929L10.9596 18.2071L15.3346 22.5821L16.1089 23.3564L16.8099 22.5152Z" fill="#FEAF00" />
                                                </svg>
                                            </button>
                                            }
                                        </div>
                                    </td>
                                    <td className='p-3 border border-[#777777]'>
                                        <div className='flex items-center justify-center gap-3'>
                                            <a href={item.file} target='_blank'>
                                                <svg className='w-6 h-6' width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6627 13C36.6627 12.6677 36.4799 12.4229 36.1141 11.9334C33.8551 8.90973 26.824 0.5 18.5001 0.5C10.1762 0.5 3.14501 8.90973 0.886037 11.9334C0.520281 12.4229 0.337402 12.6677 0.337402 13C0.337402 13.3323 0.520281 13.5771 0.886037 14.0666C3.14501 17.0903 10.1762 25.5 18.5001 25.5C26.824 25.5 33.8551 17.0903 36.1141 14.0666C36.4799 13.5771 36.6627 13.3323 36.6627 13ZM18.5001 19.25C21.8828 19.25 24.6251 16.4518 24.6251 13C24.6251 9.54822 21.8828 6.75 18.5001 6.75C15.1173 6.75 12.3751 9.54822 12.3751 13C12.3751 16.4518 15.1173 19.25 18.5001 19.25Z" fill="#FEAF00" />
                                                </svg>
                                            </a>
                                            <button onClick={() => router.put('/upload-surat-keluar', {'id': item.id})}>
                                                <svg className='w-6 h-6' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1586 7.97426L25.8515 2.16514C27.1959 0.793328 27.8681 0.107422 28.7084 0.107422C29.5486 0.107422 30.2208 0.793329 31.5652 2.16514L34.1313 4.7836C35.4269 6.10567 36.0747 6.7667 36.0747 7.58332C36.0747 8.39994 35.4269 9.06097 34.1313 10.383L28.3744 16.2574C24.9827 14.2155 22.1616 11.3629 20.1586 7.97426ZM18.7134 9.44894L3.00482 25.4781C2.58875 25.9026 2.38071 26.1149 2.24429 26.3742C2.10787 26.6334 2.0507 26.9251 1.93636 27.5084L0.269283 36.0139C0.204037 36.3468 0.171414 36.5133 0.266393 36.6075C0.361371 36.7018 0.527552 36.6678 0.85991 36.6H0.859927L9.13348 34.9115C9.72894 34.79 10.0267 34.7292 10.2895 34.5862C10.5524 34.4431 10.7651 34.2261 11.1905 33.792L26.9387 17.7225C23.5935 15.6237 20.7818 12.7882 18.7134 9.44894Z" fill="#FEAF00" />
                                                </svg>
                                            </button>
                                            <button onClick={() => router.delete('/upload-surat-keluar/' + item.id)}>
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
                        <p className='font-montserrat'>Showing {surat_keluar.length} of {all_surat_keluar_count} entries</p>
                        {all_surat_keluar_count > 10 && <div className='flex'>
                            <button onClick={prevPage} className={ 'p-2 rounded-r-md border ' + (page < Math.floor(all_surat_keluar_count / 10) || page == 1 ? 'hidden' : '')}>
                                Previous
                            </button>
                            <button onClick={nextPage} className={ 'p-2 rounded-r-md border ' + (page > Math.floor(all_surat_keluar_count / 10)  ? 'hidden' : '')}>
                                Next
                            </button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
