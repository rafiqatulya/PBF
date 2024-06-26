import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Dashboard({ auth, all_surat_masuk_count, all_surat_keluar_count }) {
    return (
        <div
            className='flex w-full min-h-[100vh]'
        >
            <SideBar user={auth.user} />
            <div
                className='w-full p-10'
            >
                <p
                    className='flex items-center text-lg gap-3 font-bold font-montserrat'
                >
                    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.988298 11.0962C0.416504 12.3394 0.416504 13.7537 0.416504 16.5824V25.4165C0.416504 29.3449 0.416504 31.3091 1.63689 32.5295C2.85728 33.7499 4.82147 33.7499 8.74984 33.7499H8.7915V23.3333C8.7915 21.6305 10.172 20.25 11.8748 20.25H18.1248C19.8277 20.25 21.2082 21.6305 21.2082 23.3333V33.7499H21.2498C25.1782 33.7499 27.1424 33.7499 28.3628 32.5295C29.5832 31.3091 29.5832 29.3449 29.5832 25.4165V16.5824C29.5832 13.7537 29.5832 12.3394 29.0114 11.0962C28.4396 9.85299 27.3657 8.93255 25.2181 7.09169L23.1347 5.30597C19.2528 1.97862 17.3119 0.314941 14.9998 0.314941C12.6878 0.314941 10.7469 1.97862 6.86494 5.30597L4.78161 7.09168C2.63393 8.93255 1.56009 9.85299 0.988298 11.0962ZM19.2082 33.7499V23.3333C19.2082 22.735 18.7231 22.25 18.1248 22.25H11.8748C11.2765 22.25 10.7915 22.735 10.7915 23.3333V33.7499H19.2082Z" fill="black"/>
                    </svg>
                    Beranda
                </p>
                <p className='text-sm font-montserrat ml-11'>Welcome!</p>
                <div
                    className=' flex flex-col w-full mt-10 gap-10'
                >
                    <p
                        className='text-center p-10 bg-[#FEAF00] rounded-md font-montserrat font-semibold text-3xl'
                    >
                        Sistem Informasi Surat LIMPAKO
                    </p>
                    <div
                        className='flex gap-10 w-full'
                    >
                        <div
                            className='flex flex-col w-full'
                        >
                            <div
                                className='relative bg-[#D9D9D9] p-7 font-montserrat w-full rounded-t-lg'
                            >
                                <p className='font-bold text-3xl'>{all_surat_masuk_count}</p>
                                <p className='font-semibold'>Surat Masuk</p>
                                <svg className='absolute top-2 right-2' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 13.75V13.75C3.75 15.3937 3.75 16.2156 4.20398 16.7688C4.28709 16.8701 4.37995 16.9629 4.48121 17.046C5.03439 17.5 5.85626 17.5 7.5 17.5H8.55848C9.2542 17.5 9.60206 17.5 9.86395 17.6888C10.1258 17.8775 10.2358 18.2075 10.4558 18.8675L10.7942 19.8825C11.0142 20.5425 11.1242 20.8725 11.386 21.0612C11.6479 21.25 11.9958 21.25 12.6915 21.25H17.3085C18.0042 21.25 18.3521 21.25 18.614 21.0612C18.8758 20.8725 18.9858 20.5425 19.2058 19.8825L19.5442 18.8675C19.7642 18.2075 19.8742 17.8775 20.136 17.6888C20.3979 17.5 20.7458 17.5 21.4415 17.5H22.5C24.1437 17.5 24.9656 17.5 25.5188 17.046C25.6201 16.9629 25.7129 16.8701 25.796 16.7688C26.25 16.2156 26.25 15.3937 26.25 13.75V13.75" stroke="black" stroke-width="2"/>
                                <path d="M10.625 11.875L15 15M15 15L19.375 11.875M15 15L15 7.5" stroke="black" stroke-width="2"/>
                                <path d="M26.25 24.25V5.75C26.25 4.64543 25.3546 3.75 24.25 3.75H5.75C4.64543 3.75 3.75 4.64543 3.75 5.75V24.25C3.75 25.3546 4.64543 26.25 5.75 26.25H24.25C25.3546 26.25 26.25 25.3546 26.25 24.25Z" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                            <a
                                href='/data-surat-masuk'
                                className='w-full bg-[#232933] p-5 rounded-b-lg flex items-center text-white font-montserrat font-bold gap-3 justify-center'
                            >
                                Selengkapnya
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.92893 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51808 15.8268 2.76121C13.9996 2.00433 11.9889 1.8063 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92893 4.92893" stroke="white" stroke-width="2"/>
                                <path d="M15 12L15.7809 11.3753L16.2806 12L15.7809 12.6247L15 12ZM3 13C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11V13ZM11.7809 6.3753L15.7809 11.3753L14.2191 12.6247L10.2191 7.6247L11.7809 6.3753ZM15.7809 12.6247L11.7809 17.6247L10.2191 16.3753L14.2191 11.3753L15.7809 12.6247ZM15 13H3V11H15V13Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                        <div
                            className='flex flex-col w-full'
                        >
                            <div
                                className='relative bg-[#D9D9D9] p-7 font-montserrat w-full rounded-t-lg'
                            >
                                <p className='font-bold text-3xl'>{all_surat_keluar_count}</p>
                                <p className='font-semibold'>Surat Keluar</p>
                                <svg className='absolute top-2 right-2' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 13.75V13.75C3.75 15.3937 3.75 16.2156 4.20398 16.7688C4.28709 16.8701 4.37995 16.9629 4.48121 17.046C5.03439 17.5 5.85626 17.5 7.5 17.5H8.55848C9.2542 17.5 9.60206 17.5 9.86395 17.6888C10.1258 17.8775 10.2358 18.2075 10.4558 18.8675L10.7942 19.8825C11.0142 20.5425 11.1242 20.8725 11.386 21.0612C11.6479 21.25 11.9958 21.25 12.6915 21.25H17.3085C18.0042 21.25 18.3521 21.25 18.614 21.0612C18.8758 20.8725 18.9858 20.5425 19.2058 19.8825L19.5442 18.8675C19.7642 18.2075 19.8742 17.8775 20.136 17.6888C20.3979 17.5 20.7458 17.5 21.4415 17.5H22.5C24.1437 17.5 24.9656 17.5 25.5188 17.046C25.6201 16.9629 25.7129 16.8701 25.796 16.7688C26.25 16.2156 26.25 15.3937 26.25 13.75V13.75" stroke="black" stroke-width="2"/>
                                <path d="M10.625 11.875L15 15M15 15L19.375 11.875M15 15L15 7.5" stroke="black" stroke-width="2"/>
                                <path d="M26.25 24.25V5.75C26.25 4.64543 25.3546 3.75 24.25 3.75H5.75C4.64543 3.75 3.75 4.64543 3.75 5.75V24.25C3.75 25.3546 4.64543 26.25 5.75 26.25H24.25C25.3546 26.25 26.25 25.3546 26.25 24.25Z" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                            <a
                                href='/data-surat-keluar'
                                className='w-full bg-[#232933] p-5 rounded-b-lg flex items-center text-white font-montserrat font-bold gap-3 justify-center'
                            >
                                Selengkapnya
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.92893 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51808 15.8268 2.76121C13.9996 2.00433 11.9889 1.8063 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92893 4.92893" stroke="white" stroke-width="2"/>
                                <path d="M15 12L15.7809 11.3753L16.2806 12L15.7809 12.6247L15 12ZM3 13C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11V13ZM11.7809 6.3753L15.7809 11.3753L14.2191 12.6247L10.2191 7.6247L11.7809 6.3753ZM15.7809 12.6247L11.7809 17.6247L10.2191 16.3753L14.2191 11.3753L15.7809 12.6247ZM15 13H3V11H15V13Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <Calendar className={"!w-full"} />
                </div>
            </div>
        </div>
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        //     <Head title="Dashboard" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
    );
}
