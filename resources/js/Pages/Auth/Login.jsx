import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const [isShowed, setIsShowed] = useState(false)
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <div className='w-1/3 bg-white p-10 mx-auto mt-20 rounded-xl'>
                <Head title="Log in" />

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <p
                    className=' font-montserrat text-4xl font-bold w-fit mx-auto p-1 border-l-4 border-[#F8D442]'
                >
                    SISULI
                </p>
                <p className='font-inter my-5 text-xl text-[#232933] font-bold'>Login</p>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full border-[#FEAF00]"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <div
                            className='relative w-full'
                        >
                            <TextInput
                                id="password"
                                type={isShowed ? "text" : "password"}
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full border-[#FEAF00]"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <svg onClick={() => setIsShowed(!isShowed)} className='absolute top-3 right-2' width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0.0500488C13.9393 0.0500488 17.5908 2.4229 19.8326 6.39492C20.0558 6.79035 20.0558 7.30975 19.8326 7.70518C17.5908 11.6772 13.9393 14.05 10 14.05C6.06075 14.05 2.40925 11.6772 0.167391 7.70518C-0.0557969 7.30975 -0.0557969 6.79035 0.167391 6.39492C2.40925 2.4229 6.06075 0.0500488 10 0.0500488ZM10 3.05005C7.79086 3.05005 6 4.84091 6 7.05005C6 9.25919 7.79086 11.05 10 11.05C12.2091 11.05 14 9.25919 14 7.05005C14 4.84091 12.2091 3.05005 10 3.05005ZM10 5.05005C11.1046 5.05005 12 5.94548 12 7.05005C12 8.15462 11.1046 9.05005 10 9.05005C8.89543 9.05005 8 8.15462 8 7.05005C8 5.94548 8.89543 5.05005 10 5.05005Z" fill="#777777"/>
                            </svg>
                        </div>

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    {/* <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div> */}

                    <div className="flex items-center justify-end mt-4">
                        {/* {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )} */}

                        <PrimaryButton className="w-full !bg-[#FEAF00] justify-center py-3 mt-5" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                    <div
                        className='flex justify-center mt-3'
                    >
                        <Link
                            href={route('password.request')}
                            className="text-sm text-[#FEAF00] hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Lupa password
                        </Link>
                    </div>
                </form>
            </div>
            <div
                className='w-1/3 mx-auto flex flex-col items-center mt-5'
            >
                <div className='flex gap-2 items-center font-roboto text-[#777777]'>
                    <p>Kebijakan privasi</p>
                    <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.765625" width="4" height="4" rx="2" fill="#777777"/>
                    </svg>
                    <p>Ketentuan penggunaan</p>
                    <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.765625" width="4" height="4" rx="2" fill="#777777"/>
                    </svg>
                    <p>Tentang  Account</p>
                </div>
                <select className='mt-5 rounded-lg border-[#E2E2E2] font-roboto ' name="language" id="laguage">
                    <option value="Indonesia">Bahasa Indonesia</option>
                </select>
            </div>
        </>
    );
}
