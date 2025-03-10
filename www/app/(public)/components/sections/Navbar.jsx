'use client'

import Image from "next/image";
import Dropdown from "../Dropdown";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LogOut } from 'lucide-react';
import useAuth from "@/app/(private)/hooks/users/useAuth";

const NavbarSection = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <div className="flex justify-center bg-slate-900 min-h-16 w-full lg:px-4 px-0">
                <div className="container max-w-screen-xl flex flex-col lg:flex-row items-center sm:justify-between divide-y divide-gray-300 lg:divide-y-0">
                    <div className="flex lg:flex-[4] flex-col lg:flex-row items-center w-full lg:gap-8 divide-y divide-gray-300 lg:divide-y-0">
                        <a href="/">
                            <Image
                                src="/images/logos/logo-extended.png"
                                width={160}
                                height={0}
                                alt="Logo Extended"
                                className="py-4"
                            />
                        </a>
                        <div className="flex flex-wrap justify-center py-2 lg:py-0 lg:justify-start gap-4 w-full">
                            <Dropdown
                                iconBeforeTitle="fa-gamepad"
                                title="Games"
                                items={[
                                    { icon: 'fa-circle-xmark', label: 'Roulette', href: '/roulette' },
                                    { icon: 'fa-chart-line', label: 'Crash', href: '/crash' },
                                    { icon: 'fa-ring', label: 'Coinflip', href: '/coinflip' },
                                ]}
                                alignment="left"
                            />
                            <div className="flex justify-center items-center bg-transparent w-fit py-2 px-4 rounded-md text-gray-300 focus:outline-none hover:text-yellow-500 transition duration-300 ease-in-out">
                                <i className="mr-1 fas fa-diamond" />
                                <a href="/casino">Casino</a>
                            </div>
                            <div className="flex justify-center items-center bg-transparent w-fit py-2 px-4 rounded-md text-gray-300 focus:outline-none hover:text-yellow-500 transition duration-300 ease-in-out">
                                <i className="mr-1 fas fa-football" />
                                <a href="/match-betting">Match Betting</a>
                            </div>
                        </div>
                    </div>

                    {/* Show user name if logged in, otherwise show login/register buttons */}
                    <div className="flex lg:flex-[1] justify-center lg:justify-end items-center gap-4 py-4 w-full">
                    {user ? (
                            <div className="flex md:flex-row flex-col justify-center items-center gap-2 text-yellow-500">
                                <div className="flex items-center gap-2 bg-slate-950 rounded-md px-4 py-2 md:w-auto w-full">
                                    <span className="text-yellow-500">&euro;{user.balance}</span>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <div className="flex items-center gap-2 bg-slate-950 rounded-md px-4 py-2 md:w-auto w-full">
                                        <span className="text-gray-300 truncate">{user.name}</span>
                                    </div>
                                    <LogOut
                                        onClick={logout}
                                        className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out hover:cursor-pointer"
                                        size={16}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <a
                                    href="/login"
                                    className="flex justify-center items-center bg-transparent w-fit py-2 px-4 rounded-md text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out"
                                >
                                    Log In
                                </a>
                                <a
                                    href="/signup"
                                    className="flex justify-center items-center bg-yellow-500 w-fit py-2 px-4 rounded-md text-white shadow-md hover:bg-amber-500 transition duration-300 ease-in-out"
                                >
                                    Register
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarSection;