import { Link } from "@inertiajs/react"
import { useState } from "react"
export default function SideBar({user}){
    const [isSuratOpened, setIsSuratOpened] = useState(false)
    const [isPelaporanOpened, setIsPelaporanOpened] = useState(false)
    return(
        <div
                className='w-2/12 min-h-[100vh] bg-[#F2EAE1] px-5 py-10 flex flex-col items-center justify-between'
            >
                <p
                    className=' font-montserrat text-xl font-bold w-full mx-auto p-1 border-l-4 border-[#F8D442]'
                >
                    SISULI
                </p>
                <div>
                    <img className=' w-28  h-28 rounded-full object-cover' src={user.avatar} alt="Foto Profil" />
                    <p className='text-xl font-bold mt-5'>{user.first_name + ' ' + user.last_name}</p>
                </div>

                <div className='w-full'>
                    <ul className='flex flex-col w-full gap-5'>
                        <a href="/beranda">
                            <li className={`flex gap-2 items-center p-1 rounded-md ${window.location.href.includes("beranda") && "bg-[#FEAF00]"}`}>
                                <svg className='w-7 h-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 9.77746V16.2C5 17.8802 5 18.7203 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7203 19 17.8802 19 16.2V5.00002M21 12L15.5668 5.96399C14.3311 4.59122 13.7133 3.90484 12.9856 3.65144C12.3466 3.42888 11.651 3.42893 11.0119 3.65159C10.2843 3.90509 9.66661 4.59157 8.43114 5.96452L3 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                Beranda
                            </li>
                        </a>
                        <a href="/data-pengguna">
                            <li className={`flex gap-2 items-center p-1 rounded-md ${window.location.href.includes("data-pengguna") || window.location.href.includes("tambah-pengguna") ? "bg-[#FEAF00]" : ""}`}>
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3228 8.98181C10.3228 8.039 10.3228 7.5676 10.6156 7.2747C10.9085 6.98181 11.3799 6.98181 12.3228 6.98181H15.5578C16.1501 6.98181 16.4463 6.98181 16.6858 7.12746C16.9252 7.27311 17.0614 7.53613 17.3338 8.06216L18.7098 10.7196H23.8066C24.7494 10.7196 25.2208 10.7196 25.5137 11.0125C25.8066 11.3054 25.8066 11.7768 25.8066 12.7196V17.4411C25.8066 18.3839 25.8066 18.8553 25.5137 19.1482C25.2208 19.4411 24.7494 19.4411 23.8066 19.4411H12.3228C11.3799 19.4411 10.9085 19.4411 10.6156 19.1482C10.3228 18.8553 10.3228 18.3839 10.3228 17.4411V8.98181Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M21.9353 19.4411V22.8248C21.9353 23.3848 21.9353 23.6649 21.8263 23.8788C21.7305 24.0669 21.5775 24.2199 21.3893 24.3158C21.1754 24.4248 20.8954 24.4248 20.3353 24.4248H6.76113C6.20108 24.4248 5.92105 24.4248 5.70714 24.3158C5.51898 24.2199 5.366 24.0669 5.27013 23.8788C5.16113 23.6649 5.16113 23.3848 5.16113 22.8248V12.3196C5.16113 11.7596 5.16113 11.4795 5.27013 11.2656C5.366 11.0775 5.51898 10.9245 5.70714 10.8286C5.92105 10.7196 6.20108 10.7196 6.76113 10.7196H10.3224" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                </svg>
                                Data Pengguna
                            </li>
                        </a>
                        <button
                            onClick={() => setIsSuratOpened(!isSuratOpened)}
                        >
                            <li className={`flex gap-2 items-center p-1 rounded-md justify-between ${window.location.href.includes("data-surat") || window.location.href.includes("upload-surat") || window.location.href.includes('template-surat') ? "bg-[#FEAF00]" : ""}`}>
                                <span className='flex gap-2 items-center'>
                                    <svg className='w-7 h-7' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.505 22H5.495C5.225 22 4.995 21.78 4.995 21.5V3.5C4.995 3.23 5.215 3 5.495 3H18.505C18.775 3 19.005 3.22 19.005 3.5V21.51C18.995 21.78 18.775 22 18.505 22Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.995 19H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 10H14.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 12H14.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 8H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 6H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 14H13.425" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    Data Surat
                                </span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12.5L10 7.5L15 12.5" stroke="#222222"/>
                                </svg>
                            </li>
                        </button>
                        {   isSuratOpened &&
                            <ul className="flex flex-col gap-2">
                                <a href="/data-surat-masuk">
                                    <li className={`flex gap-2 p-1 rounded-md pl-3 ${window.location.href.includes("data-surat-masuk") || window.location.href.includes("upload-surat-masuk") ? "bg-[#FEAF00]" : ""}`}>
                                        <svg className='w-7 h-7' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.505 22H5.495C5.225 22 4.995 21.78 4.995 21.5V3.5C4.995 3.23 5.215 3 5.495 3H18.505C18.775 3 19.005 3.22 19.005 3.5V21.51C18.995 21.78 18.775 22 18.505 22Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.995 19H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 10H14.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 12H14.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 8H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 6H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 14H13.425" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        Surat Masuk
                                    </li>
                                </a>
                                <a href="/data-surat-keluar">
                                    <li className={`flex gap-2 p-1 rounded-md pl-3 ${window.location.href.includes("data-surat-keluar") && "bg-[#FEAF00]"}`}>
                                        <svg className='w-7 h-7' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.505 22H5.495C5.225 22 4.995 21.78 4.995 21.5V3.5C4.995 3.23 5.215 3 5.495 3H18.505C18.775 3 19.005 3.22 19.005 3.5V21.51C18.995 21.78 18.775 22 18.505 22Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.995 19H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 10H14.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 12H14.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 8H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 6H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 14H13.425" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        Surat Keluar
                                    </li>
                                </a>
                                <a href="/template-surat">
                                    <li className={`flex gap-2 p-1 rounded-md pl-3 ${window.location.href.includes("template-surat") && "bg-[#FEAF00]"}`}>
                                        <svg className='w-7 h-7' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.505 22H5.495C5.225 22 4.995 21.78 4.995 21.5V3.5C4.995 3.23 5.215 3 5.495 3H18.505C18.775 3 19.005 3.22 19.005 3.5V21.51C18.995 21.78 18.775 22 18.505 22Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.995 19H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 10H14.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 12H14.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 8H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 6H15.995" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.995 14H13.425" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        Template Surat
                                    </li>
                                </a>
                            </ul>
                        }
                        <button
                            onClick={() => setIsPelaporanOpened(!isPelaporanOpened)}
                        >
                            <li className={`flex gap-2 items-center p-1 rounded-md justify-between ${window.location.href.includes("laporan") && "bg-[#FEAF00]"}`}>
                                <span className='flex gap-2 items-center'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.30884V19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                <path d="M21 6.30884L21 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                <path d="M3 6.30884L3 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                <path d="M21 19.3088C21 19.3088 20 17.3088 16.5 17.3088C13 17.3088 12 19.3088 12 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                <path d="M12 19.3088C12 19.3088 11 17.3088 7.5 17.3088C4 17.3088 3 19.3088 3 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                <path d="M21 6.30884C21 6.30884 20 4.30884 16.5 4.30884C13 4.30884 12 6.30884 12 6.30884" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                <path d="M12 6.30884C12 6.30884 11 4.30884 7.5 4.30884C4 4.30884 3 6.30884 3 6.30884" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Pelaporan
                                </span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12.5L10 7.5L15 12.5" stroke="#222222"/>
                                </svg>
                            </li>
                        </button>
                        {   isPelaporanOpened &&
                            <ul className="flex flex-col gap-2">
                                <a href="/laporan-surat-masuk">
                                    <li className={`flex gap-2 p-1 rounded-md pl-3 ${window.location.href.includes("laporan-surat-masuk") && "bg-[#FEAF00]"}`}>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 6.30884V19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M21 6.30884L21 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M3 6.30884L3 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M21 19.3088C21 19.3088 20 17.3088 16.5 17.3088C13 17.3088 12 19.3088 12 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M12 19.3088C12 19.3088 11 17.3088 7.5 17.3088C4 17.3088 3 19.3088 3 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M21 6.30884C21 6.30884 20 4.30884 16.5 4.30884C13 4.30884 12 6.30884 12 6.30884" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M12 6.30884C12 6.30884 11 4.30884 7.5 4.30884C4 4.30884 3 6.30884 3 6.30884" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        Surat Masuk
                                    </li>
                                </a>
                                <a href="/laporan-surat-keluar">
                                    <li className={`flex gap-2 p-1 rounded-md pl-3 ${window.location.href.includes("laporan-surat-keluar") && "bg-[#FEAF00]"}`}>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 6.30884V19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M21 6.30884L21 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M3 6.30884L3 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M21 19.3088C21 19.3088 20 17.3088 16.5 17.3088C13 17.3088 12 19.3088 12 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M12 19.3088C12 19.3088 11 17.3088 7.5 17.3088C4 17.3088 3 19.3088 3 19.3088" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M21 6.30884C21 6.30884 20 4.30884 16.5 4.30884C13 4.30884 12 6.30884 12 6.30884" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M12 6.30884C12 6.30884 11 4.30884 7.5 4.30884C4 4.30884 3 6.30884 3 6.30884" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        Surat Keluar
                                    </li>
                                </a>
                            </ul>
                        }
                        <a href="/profile">
                            <li className={`flex gap-2 items-center p-1 rounded-md ${window.location.href.includes("profile") && "bg-[#FEAF00]"}`}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0714 0.645874H1.92857C0.863839 0.645874 0 1.45545 0 2.4533V15.7077C0 16.7056 0.863839 17.5151 1.92857 17.5151H16.0714C17.1362 17.5151 18 16.7056 18 15.7077V2.4533C18 1.45545 17.1362 0.645874 16.0714 0.645874ZM16.7143 15.7077C16.7143 16.0391 16.425 16.3102 16.0714 16.3102H1.92857C1.575 16.3102 1.28571 16.0391 1.28571 15.7077V2.4533C1.28571 2.12193 1.575 1.85082 1.92857 1.85082H16.0714C16.425 1.85082 16.7143 2.12193 16.7143 2.4533V15.7077ZM8.03571 5.46566H6.42857V4.26072C6.42857 4.0122 6.21161 3.80886 5.94643 3.80886H5.625C5.35982 3.80886 5.14286 4.0122 5.14286 4.26072V5.46566H3.53571C3.00536 5.46566 2.57143 5.87233 2.57143 6.36938V8.1768C2.57143 8.67384 3.00536 9.08051 3.53571 9.08051H5.14286V13.4484C5.14286 13.697 5.35982 13.9003 5.625 13.9003H5.94643C6.21161 13.9003 6.42857 13.697 6.42857 13.4484V9.08051H8.03571C8.56607 9.08051 9 8.67384 9 8.1768V6.36938C9 5.87233 8.56607 5.46566 8.03571 5.46566ZM7.71429 7.87556H3.85714V6.67061H7.71429V7.87556ZM14.4643 9.08051H12.8571V4.26072C12.8571 4.0122 12.6402 3.80886 12.375 3.80886H12.0536C11.7884 3.80886 11.5714 4.0122 11.5714 4.26072V9.08051H9.96429C9.43393 9.08051 9 9.48718 9 9.98422V11.7916C9 12.2887 9.43393 12.6953 9.96429 12.6953H11.5714V13.4484C11.5714 13.697 11.7884 13.9003 12.0536 13.9003H12.375C12.6402 13.9003 12.8571 13.697 12.8571 13.4484V12.6953H14.4643C14.9946 12.6953 15.4286 12.2887 15.4286 11.7916V9.98422C15.4286 9.48718 14.9946 9.08051 14.4643 9.08051ZM14.1429 11.4904H10.2857V10.2855H14.1429V11.4904Z" fill="black"/>
                                </svg>
                                Profile
                            </li>
                        </a>
                    </ul>
                </div>
                <Link
                    className="flex items-center gap-3"
                    method="post" href={route('logout')} as="button"
                >
                    Logout
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.3125 6.58822C5.3125 6.25578 5.55156 5.98378 5.84375 5.98378H10.625V2.43644C10.625 2.16822 10.9105 2.03222 11.0766 2.22111L15.7781 7.62711C15.9873 7.86511 15.9873 8.24667 15.7781 8.48466L11.0766 13.8907C10.9105 14.0796 10.625 13.9473 10.625 13.6753V10.128H5.84375C5.55156 10.128 5.3125 9.856 5.3125 9.52355V6.58822ZM4.25 6.58822V9.52355C4.25 10.5247 4.96387 11.3369 5.84375 11.3369H9.5625V13.6753C9.5625 15.0164 10.9902 15.6964 11.827 14.7444L16.5318 9.34222C17.1561 8.632 17.1561 7.48355 16.5318 6.77333L11.827 1.36733C10.9936 0.41911 9.5625 1.09155 9.5625 2.43644V4.77489H5.84375C4.96387 4.77489 4.25 5.59089 4.25 6.58822ZM0 2.61778V13.4978C0 14.4989 0.713867 15.3111 1.59375 15.3111H5.97656C6.1957 15.3111 6.375 15.1071 6.375 14.8578V14.5556C6.375 14.3062 6.1957 14.1022 5.97656 14.1022H1.59375C1.30156 14.1022 1.0625 13.8302 1.0625 13.4978V2.61778C1.0625 2.28533 1.30156 2.01333 1.59375 2.01333H5.97656C6.1957 2.01333 6.375 1.80933 6.375 1.56V1.25778C6.375 1.00844 6.1957 0.804443 5.97656 0.804443H1.59375C0.713867 0.804443 0 1.61667 0 2.61778Z" fill="black"/>
                    </svg>
                </Link>
            </div>
    )
}
