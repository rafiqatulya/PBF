import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function LaporanSuratKeluar({ auth, surat_keluar, search_key, page, all_surat_keluar_count, entriesShown, start_date, end_date }) {
    const [values, setValues] = useState({
        start_date: start_date ?? "",
        end_date: end_date ?? "",
        search_key: search_key ?? "",
        entriesShown: entriesShown,
        page: page ?? 1
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
        router.get('/laporan-surat-keluar', values)
    }

    function nextPage(e) {
        values.page++
        router.get('/laporan-surat-keluar', values)
    }

    function prevPage(e) {
        values.page--
        router.get('/laporan-surat-keluar', values)
    }

    function handlePrint(e) {
        e.preventDefault()
        const url = '/laporan-surat-keluar/export';
        const params = new URLSearchParams({
            "start_date": start_date ?? "",
            "end_date": end_date ?? "",
            "search_key": search_key ?? "",
            "entriesShown": entriesShown,
            "page": page ?? 1
        });
        const fullUrl = `${url}?${params.toString()}`;
        window.open(fullUrl, '_blank', 'noopener noreferrer');
    }

    return (
        <>
            <Head title="Laporan Surat Keluar" />
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
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0835 4.16663V16.75L26.0835 16.8044V16.8044C26.0834 17.2285 26.0833 17.6406 26.129 17.9805C26.1805 18.3637 26.3061 18.801 26.6693 19.1642C27.0325 19.5274 27.4698 19.6529 27.853 19.7044C28.1929 19.7501 28.605 19.75 29.0291 19.75L29.0835 19.75H41.6668V33.3333C41.6668 39.2258 41.6668 42.1721 39.8362 44.0027C38.0057 45.8333 35.0594 45.8333 29.1668 45.8333H20.8335C14.9409 45.8333 11.9947 45.8333 10.1641 44.0027C8.3335 42.1721 8.3335 39.2258 8.3335 33.3333V16.6666C8.3335 10.7741 8.3335 7.82779 10.1641 5.99721C11.9947 4.16663 14.9409 4.16663 20.8335 4.16663H26.0835ZM28.0835 4.16669V16.75C28.0835 17.2496 28.0856 17.5238 28.1112 17.714L28.1122 17.7213L28.1195 17.7223C28.3097 17.7478 28.5838 17.75 29.0835 17.75H41.6668C41.6658 16.2344 41.6486 15.4364 41.3497 14.7147C41.0325 13.949 40.4303 13.3468 39.2261 12.1425L33.6909 6.6074C32.4866 5.40311 31.8845 4.80096 31.1188 4.48379C30.397 4.18484 29.599 4.16767 28.0835 4.16669ZM17.7502 27.0833C17.7502 26.531 18.1979 26.0833 18.7502 26.0833H31.2502C31.8024 26.0833 32.2502 26.531 32.2502 27.0833C32.2502 27.6356 31.8024 28.0833 31.2502 28.0833H18.7502C18.1979 28.0833 17.7502 27.6356 17.7502 27.0833ZM18.7502 34.4166C18.1979 34.4166 17.7502 34.8643 17.7502 35.4166C17.7502 35.9689 18.1979 36.4166 18.7502 36.4166L27.0835 36.4166C27.6358 36.4166 28.0835 35.9689 28.0835 35.4166C28.0835 34.8643 27.6358 34.4166 27.0835 34.4166H18.7502Z" fill="black" />
                        </svg>

                        Laporan Surat Keluar
                    </p>
                    {/* <p className='text-sm font-montserrat ml-14'>Data Pengguna Sistem Informasi Surat Menyurat LIMPAKO</p> */}
                    <form onSubmit={handleSubmit}>
                        <div
                            className=' flex flex-col w-full mt-10 gap-10'
                        >
                            <div
                                className='flex gap-5'
                            >
                                {/* <input className='w-[250px] border-none rounded-md bg-[#D9D9D9]' type="date" name="" id="" /> */}
                                <div className='flex'>
                                    <input className='w-[250px] border-0 border-r rounded-l-md bg-[#D9D9D9]' type="date" onChange={handleChange} value={values.start_date} name="start_date" id="start_date" />
                                    <input className='w-[250px] border-0 border-l rounded-r-md bg-[#D9D9D9]' type="date" onChange={handleChange} value={values.end_date} name="end_date" id="end_date" />
                                </div>
                                {/* <button
                                    className='flex w-[250px] justify-center items-center gap-3 font-montserrat font-bold bg-[#FEAF00] p-2 rounded-md'
                                >
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.07692 10C6.87696 10 6.6815 10.0586 6.51524 10.1685C6.34899 10.2784 6.2194 10.4346 6.14289 10.6173C6.06637 10.8 6.04635 11.0011 6.08535 11.1951C6.12436 11.3891 6.22065 11.5673 6.36204 11.7071C6.50343 11.847 6.68357 11.9422 6.87968 11.9808C7.0758 12.0194 7.27907 11.9996 7.46381 11.9239C7.64854 11.8482 7.80644 11.72 7.91752 11.5556C8.02861 11.3911 8.08791 11.1978 8.08791 11C8.08791 10.7348 7.98139 10.4804 7.79179 10.2929C7.6022 10.1054 7.34505 10 7.07692 10ZM19.2088 6H18.1978V3C18.1978 2.73478 18.0913 2.48043 17.9017 2.29289C17.7121 2.10536 17.4549 2 17.1868 2H7.07692C6.80879 2 6.55164 2.10536 6.36204 2.29289C6.17244 2.48043 6.06593 2.73478 6.06593 3V6H5.05494C4.25055 6 3.4791 6.31607 2.91031 6.87868C2.34152 7.44129 2.02197 8.20435 2.02197 9V15C2.02197 15.7956 2.34152 16.5587 2.91031 17.1213C3.4791 17.6839 4.25055 18 5.05494 18H6.06593V21C6.06593 21.2652 6.17244 21.5196 6.36204 21.7071C6.55164 21.8946 6.80879 22 7.07692 22H17.1868C17.4549 22 17.7121 21.8946 17.9017 21.7071C18.0913 21.5196 18.1978 21.2652 18.1978 21V18H19.2088C20.0132 18 20.7846 17.6839 21.3534 17.1213C21.9222 16.5587 22.2418 15.7956 22.2418 15V9C22.2418 8.20435 21.9222 7.44129 21.3534 6.87868C20.7846 6.31607 20.0132 6 19.2088 6ZM8.08791 4H16.1758V6H8.08791V4ZM16.1758 20H8.08791V16H16.1758V20ZM20.2198 15C20.2198 15.2652 20.1133 15.5196 19.9237 15.7071C19.7341 15.8946 19.4769 16 19.2088 16H18.1978V15C18.1978 14.7348 18.0913 14.4804 17.9017 14.2929C17.7121 14.1054 17.4549 14 17.1868 14H7.07692C6.80879 14 6.55164 14.1054 6.36204 14.2929C6.17244 14.4804 6.06593 14.7348 6.06593 15V16H5.05494C4.78681 16 4.52966 15.8946 4.34006 15.7071C4.15047 15.5196 4.04395 15.2652 4.04395 15V9C4.04395 8.73478 4.15047 8.48043 4.34006 8.29289C4.52966 8.10536 4.78681 8 5.05494 8H19.2088C19.4769 8 19.7341 8.10536 19.9237 8.29289C20.1133 8.48043 20.2198 8.73478 20.2198 9V15Z" fill="black" />
                                    </svg>

                                    Cetak
                                </button> */}
                            </div>
                        </div>
                        <div
                            className='flex items-center mt-5 gap-5'
                        >
                            <div
                                className='flex items-center gap-2'
                            >
                                Show
                                <select className='rounded-md' value={values.entriesShown} onChange={handleChange} name="entriesShown" id="entriesShown">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                </select>
                                entries
                            </div>
                            <div
                                className='w-[250px] relative'
                            >
                                <input className='rounded-md w-full' type="text" value={values.search_key} onChange={handleChange} name='search_key' id='search_key' placeholder='Cari Laporan' />
                                <svg className='absolute top-3 right-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9043 13.012L10.377 9.52663C10.3141 9.46449 10.232 9.43206 10.1445 9.43206H9.86289C10.8008 8.42969 11.375 7.09229 11.375 5.61979C11.375 2.5154 8.8293 0 5.6875 0C2.5457 0 0 2.5154 0 5.61979C0 8.72419 2.5457 11.2396 5.6875 11.2396C7.17773 11.2396 8.53125 10.6722 9.5457 9.74818V10.0238C9.5457 10.1102 9.58125 10.1913 9.64141 10.2534L13.1687 13.7388C13.2973 13.8658 13.5051 13.8658 13.6336 13.7388L13.9043 13.4713C14.0328 13.3443 14.0328 13.139 13.9043 13.012ZM5.6875 10.375C3.02695 10.375 0.875 8.24866 0.875 5.61979C0.875 2.99092 3.02695 0.864583 5.6875 0.864583C8.34805 0.864583 10.5 2.99092 10.5 5.61979C10.5 8.24866 8.34805 10.375 5.6875 10.375Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='bg-[#FEAF00] p-2 rounded-md mt-4'>Apply Filter</button>
                        </div>
                        <div className='flex items-center mt-5 gap-5'>
                            <button onClick={handlePrint} type='button'
                                className='flex w-[250px] justify-center items-center gap-3 font-montserrat font-bold bg-[#FEAF00] p-2 rounded-md'
                            >
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.07692 10C6.87696 10 6.6815 10.0586 6.51524 10.1685C6.34899 10.2784 6.2194 10.4346 6.14289 10.6173C6.06637 10.8 6.04635 11.0011 6.08535 11.1951C6.12436 11.3891 6.22065 11.5673 6.36204 11.7071C6.50343 11.847 6.68357 11.9422 6.87968 11.9808C7.0758 12.0194 7.27907 11.9996 7.46381 11.9239C7.64854 11.8482 7.80644 11.72 7.91752 11.5556C8.02861 11.3911 8.08791 11.1978 8.08791 11C8.08791 10.7348 7.98139 10.4804 7.79179 10.2929C7.6022 10.1054 7.34505 10 7.07692 10ZM19.2088 6H18.1978V3C18.1978 2.73478 18.0913 2.48043 17.9017 2.29289C17.7121 2.10536 17.4549 2 17.1868 2H7.07692C6.80879 2 6.55164 2.10536 6.36204 2.29289C6.17244 2.48043 6.06593 2.73478 6.06593 3V6H5.05494C4.25055 6 3.4791 6.31607 2.91031 6.87868C2.34152 7.44129 2.02197 8.20435 2.02197 9V15C2.02197 15.7956 2.34152 16.5587 2.91031 17.1213C3.4791 17.6839 4.25055 18 5.05494 18H6.06593V21C6.06593 21.2652 6.17244 21.5196 6.36204 21.7071C6.55164 21.8946 6.80879 22 7.07692 22H17.1868C17.4549 22 17.7121 21.8946 17.9017 21.7071C18.0913 21.5196 18.1978 21.2652 18.1978 21V18H19.2088C20.0132 18 20.7846 17.6839 21.3534 17.1213C21.9222 16.5587 22.2418 15.7956 22.2418 15V9C22.2418 8.20435 21.9222 7.44129 21.3534 6.87868C20.7846 6.31607 20.0132 6 19.2088 6ZM8.08791 4H16.1758V6H8.08791V4ZM16.1758 20H8.08791V16H16.1758V20ZM20.2198 15C20.2198 15.2652 20.1133 15.5196 19.9237 15.7071C19.7341 15.8946 19.4769 16 19.2088 16H18.1978V15C18.1978 14.7348 18.0913 14.4804 17.9017 14.2929C17.7121 14.1054 17.4549 14 17.1868 14H7.07692C6.80879 14 6.55164 14.1054 6.36204 14.2929C6.17244 14.4804 6.06593 14.7348 6.06593 15V16H5.05494C4.78681 16 4.52966 15.8946 4.34006 15.7071C4.15047 15.5196 4.04395 15.2652 4.04395 15V9C4.04395 8.73478 4.15047 8.48043 4.34006 8.29289C4.52966 8.10536 4.78681 8 5.05494 8H19.2088C19.4769 8 19.7341 8.10536 19.9237 8.29289C20.1133 8.48043 20.2198 8.73478 20.2198 9V15Z" fill="black" />
                                </svg>

                                Cetak
                            </button>
                        </div>
                    </form>
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
                                        {/* <td className='p-3 border border-[#777777]'>{`${("0" + new Date(item.date).getDate()).slice(-2)}/${("0" + (new Date(item.date).getMonth()+1)).slice(-2)}/${new Date(item.date).getFullYear()}`}</td> */}
                                        <td className='p-3 border border-[#777777]'>{item.from}</td>
                                        <td className='p-3 border border-[#777777]'>{item.category}</td>
                                        <td className='p-3 border border-[#777777]'>
                                            <div className='flex items-center justify-center'>
                                                {/* {item.status === 'Terkirim' ?
                                                    <button className='mx-auto' onClick={() => router.post('/tindak-lanjuti-surat-keluar', { 'id': item.id })}>
                                                        <svg className='w-6 h-6' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 30.625C24.7487 30.625 30.625 24.7487 30.625 17.5C30.625 10.2513 24.7487 4.375 17.5 4.375C10.2513 4.375 4.375 10.2513 4.375 17.5C4.375 24.7487 10.2513 30.625 17.5 30.625ZM16.8099 22.5152L24.1016 13.7652L22.5651 12.4848L15.9745 20.3936L12.3738 16.7929L10.9596 18.2071L15.3346 22.5821L16.1089 23.3564L16.8099 22.5152Z" fill="#FEAF00" />
                                                        </svg>
                                                    </button>
                                                    : 'Telah Ditindak Lanjuti'} */}
                                                {item.status}
                                            </div>
                                        </td>
                                        <td className='p-3 border border-[#777777]'>
                                            <div className='flex items-center justify-center gap-3'>
                                                <a href={item.file} target='_blank'>
                                                    <svg className='w-6 h-6' width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6627 13C36.6627 12.6677 36.4799 12.4229 36.1141 11.9334C33.8551 8.90973 26.824 0.5 18.5001 0.5C10.1762 0.5 3.14501 8.90973 0.886037 11.9334C0.520281 12.4229 0.337402 12.6677 0.337402 13C0.337402 13.3323 0.520281 13.5771 0.886037 14.0666C3.14501 17.0903 10.1762 25.5 18.5001 25.5C26.824 25.5 33.8551 17.0903 36.1141 14.0666C36.4799 13.5771 36.6627 13.3323 36.6627 13ZM18.5001 19.25C21.8828 19.25 24.6251 16.4518 24.6251 13C24.6251 9.54822 21.8828 6.75 18.5001 6.75C15.1173 6.75 12.3751 9.54822 12.3751 13C12.3751 16.4518 15.1173 19.25 18.5001 19.25Z" fill="#FEAF00" />
                                                    </svg>
                                                </a>
                                                {/* <button onClick={() => router.put('/upload-surat-keluar', {'id': item.id})}>
                                                <svg className='w-6 h-6' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1586 7.97426L25.8515 2.16514C27.1959 0.793328 27.8681 0.107422 28.7084 0.107422C29.5486 0.107422 30.2208 0.793329 31.5652 2.16514L34.1313 4.7836C35.4269 6.10567 36.0747 6.7667 36.0747 7.58332C36.0747 8.39994 35.4269 9.06097 34.1313 10.383L28.3744 16.2574C24.9827 14.2155 22.1616 11.3629 20.1586 7.97426ZM18.7134 9.44894L3.00482 25.4781C2.58875 25.9026 2.38071 26.1149 2.24429 26.3742C2.10787 26.6334 2.0507 26.9251 1.93636 27.5084L0.269283 36.0139C0.204037 36.3468 0.171414 36.5133 0.266393 36.6075C0.361371 36.7018 0.527552 36.6678 0.85991 36.6H0.859927L9.13348 34.9115C9.72894 34.79 10.0267 34.7292 10.2895 34.5862C10.5524 34.4431 10.7651 34.2261 11.1905 33.792L26.9387 17.7225C23.5935 15.6237 20.7818 12.7882 18.7134 9.44894Z" fill="#FEAF00" />
                                                </svg>
                                            </button>
                                            <button onClick={() => router.delete('/upload-surat-keluar/' + item.id)}>
                                                <svg className='w-6 h-6' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.7502 12.5H6.25024V18.75H6.41691C8.30253 18.75 9.24534 18.75 9.83112 19.3358C10.4169 19.9216 10.4169 20.8644 10.4169 22.75V37.75C10.4169 40.5784 10.4169 41.9926 11.2956 42.8713C12.1743 43.75 13.5885 43.75 16.4169 43.75H33.5836C36.412 43.75 37.8262 43.75 38.7049 42.8713C39.5836 41.9926 39.5836 40.5784 39.5836 37.75V22.75C39.5836 20.8644 39.5836 19.9216 40.1694 19.3358C40.7551 18.75 41.698 18.75 43.5836 18.75H43.7502V12.5ZM20.7919 22.9167C20.7919 22.3644 20.3442 21.9167 19.7919 21.9167C19.2396 21.9167 18.7919 22.3644 18.7919 22.9167V33.3333C18.7919 33.8856 19.2396 34.3333 19.7919 34.3333C20.3442 34.3333 20.7919 33.8856 20.7919 33.3333V22.9167ZM31.2086 22.9167C31.2086 22.3644 30.7609 21.9167 30.2086 21.9167C29.6563 21.9167 29.2086 22.3644 29.2086 22.9167V33.3333C29.2086 33.8856 29.6563 34.3333 30.2086 34.3333C30.7609 34.3333 31.2086 33.8856 31.2086 33.3333V22.9167Z" fill="#FEAF00" />
                                                    <path d="M20.9754 7.02206C21.2128 6.80057 21.7359 6.60485 22.4636 6.46526C23.1913 6.32566 24.0829 6.25 25.0001 6.25C25.9173 6.25 26.8089 6.32566 27.5366 6.46526C28.2643 6.60485 28.7874 6.80057 29.0248 7.02206" stroke="#FEAF00" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                            </button> */}
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
                            {all_surat_keluar_count > entriesShown && <div className='flex'>{ }
                                <button onClick={prevPage} className={'p-2 rounded-r-md border ' + (page < Math.floor(all_surat_keluar_count / entriesShown) || page == 1 ? 'hidden' : '')}>
                                    Previous
                                </button>
                                <button onClick={nextPage} className={'p-2 rounded-r-md border ' + (page > Math.floor(all_surat_keluar_count / entriesShown) ? 'hidden' : '')}>
                                    Next
                                </button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
