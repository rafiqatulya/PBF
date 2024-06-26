import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Edit({ auth, mustVerifyEmail, status, errors }) {
    const initialValues = {
        first_name: auth.user.first_name,
        last_name: auth.user.last_name,
        email: auth.user.email,
        role: auth.user.role,
        division: auth.user.division ?? '',
        job_title: auth.user.job_title,
        address: auth.user.address ?? '',
        avatar: auth.user.avatar
    }

    const [isEditting, setIsEditting] = useState(false)
    const [values, setValues] = useState(initialValues)

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value

        if(key == 'avatar') {
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

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post('/profile', values)
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
            const fileToAttach = auth.user.avatar && await imageUrlToFile(auth.user.avatar);
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(fileToAttach);
            fileInputElement.files = dataTransfer.files;
        }

        auth.user.avatar && addToFile();
    }, [])

    return (
        <>
            <div
                className='w-full'
            >
                <div
                    className={'relative w-full aspect-[52/10] bg-no-repeat bg-cover bg-gray-500' }
                >
                    <div
                        className='absolute flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-white/50'
                    >
                        <p className='font-montserrat text-4xl'>Profile</p>
                        <button type='button' onClick={() => history.back()} className='w-10 h-10 bg-[#FEAF00] flex justify-center items-center rounded-md absolute top-5 left-5'>
                            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6385 20.1783C13.1104 20.6334 13.0582 21.3263 12.5219 21.7269C11.9846 22.1266 11.1668 22.0824 10.6939 21.628L0.322466 11.7436C-0.107489 11.329 -0.107489 10.7085 0.322466 10.2939L10.6939 0.409381C10.9929 0.0948998 11.4715 -0.0552195 11.9401 0.018472C12.4088 0.0921635 12.7919 0.377779 12.9378 0.762211C13.0836 1.14664 12.9687 1.56788 12.6385 1.8591L3.032 11.0187L12.6385 20.1783Z" fill="#231F20" />
                            </svg>
                        </button>
                        <div
                            className='absolute top-5 right-5 flex gap-4 items-center'
                        >
                            <p className='text-xl'>{auth.user.first_name + ' ' + auth.user.last_name}</p>
                            {/* <img className='w-10 h-10 rounded-full' src="/profile.png" alt="" /> */}
                            <img className='w-10 h-10 rounded-full object-cover' src={auth.user.avatar ?? "/profile.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='flex mt-10'
            >
                <div
                    className='w-1/3 border-r border-black flex flex-col gap-5 justify-center items-center font-montserrat'
                >
                    <img className='w-[200px] h-[200px] rounded-full border-[5px] border-[#FEAF00] object-cover' src={auth.user.avatar ?? "/profile.png"} alt="" />
                    <div className='text-center'>
                        <p className='text-2xl font-bold'>{auth.user.first_name + ' ' + auth.user.last_name}</p>
                        <p className='text-[#6C6C6C]'>{auth.user.job_title}</p>
                    </div>
                    {/* <button className='px-5 py-2 font-bold font-montserrat rounded-md bg-[#FEAF00]'>
                        Upload New Photo
                    </button> */}
                </div>
                <form onSubmit={handleSubmit}
                    className='w-2/3 p-20 border-l border-black flex flex-col gap-5 justify-center items-center font-montserrat'
                >
                    <div className='flex w-full justify-between font-bold border-b border-[#E5E5E5] py-3'>
                        <p>Informasi Umum</p>
                        <div className='flex gap-4'>
                            <button type='button' onClick={() => setIsEditting(!isEditting)} className={(isEditting ? 'hidden' : 'block') + ' border border-[#A5A58D] text-[#A5A58D] py-2 px-5 rounded-md'}>
                                Edit
                            </button>
                            <button type='button' onClick={() => {
                                    setIsEditting(!isEditting)
                                    setValues(initialValues)
                                }} className={(isEditting ? 'block' : 'hidden') + ' border border-red-500 text-white py-2 px-5 rounded-md bg-red-500'}>
                                Batalkan
                            </button>
                            <button type='submit' onClick={() => setIsEditting(!isEditting)} className={(isEditting ? 'block' : 'hidden') + ' border border-[#FEAF00] text-black py-2 px-5 rounded-md bg-[#FEAF00]'}>
                                Simpan
                            </button>
                        </div>
                    </div>
                    <div className='gap-2 text-red-400 text-start w-full'>
                        {Object.values(errors).length > 0 && Object.values(errors).map((error, index) => (
                            <div key={index}>
                                {error}
                            </div>
                        ))}
                    </div>
                    <div
                        className='w-full flex gap-5'
                    >
                        <div className='w-1/2 flex flex-col gap-2'>
                            <label htmlFor='first_name'>First Name</label>
                            <input required disabled={!isEditting} type='text' id='first_name' name='first_name' className='disabled:opacity-50 p-2 border-2 rounded-lg' value={values.first_name} onChange={handleChange} />
                        </div>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <label htmlFor='last_name'>Last Name</label>
                            <input required disabled={!isEditting} type='text' id='last_name' name='last_name' className='disabled:opacity-50 p-2 border-2 rounded-lg' value={values.last_name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='email'>Email</label>
                        <input required disabled type='email' id='email' name='email' className='disabled:opacity-50 p-2 border-2 rounded-lg' value={values.email} onChange={handleChange} />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='role'>Role</label>
                        <input required disabled={!isEditting} type='text' id='role' name='role' className='disabled:opacity-50 p-2 border-2 rounded-lg' value={values.role} onChange={handleChange} />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='division'>Division</label>
                        <input disabled={!isEditting} type='text' id='division' name='division' className='disabled:opacity-50 p-2 border-2 rounded-lg' value={values.division} onChange={handleChange} />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='job_title'>Jabatan</label>
                        <input required disabled={!isEditting} type='text' id='job_title' name='job_title' className='disabled:opacity-50 p-2 border-2 rounded-lg' value={values.job_title} onChange={handleChange} />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='address'>Alamat</label>
                        <textarea disabled={!isEditting} id='address' name='address' className='disabled:opacity-50 p-2 border-2 rounded-lg' value={values.address} onChange={handleChange}></textarea>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='avatar'>Foto Profil</label>
                        <input disabled={!isEditting} type='file' id='avatar' name='avatar' className='disabled:opacity-50 p-2 border-2 rounded-lg' onChange={handleChange} />
                    </div>
                </form>
            </div>
        </>
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        // >
        //     <Head title="Profile" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        //             <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
        //                 <UpdateProfileInformationForm
        //                     mustVerifyEmail={mustVerifyEmail}
        //                     status={status}
        //                     className="max-w-xl"
        //                 />
        //             </div>

        //             <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
        //                 <UpdatePasswordForm className="max-w-xl" />
        //             </div>

        //             <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
        //                 <DeleteUserForm className="max-w-xl" />
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
    );
}
