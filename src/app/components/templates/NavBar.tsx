'use client';

import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuItems,
    MenuItem,
    Menu,
    MenuButton,
} from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
    Tv2Icon,
    ArrowBigDownDash,
} from 'lucide-react'
import { ChevronDownIcon} from 'lucide-react'
import Link from 'next/link'
import { LeagueResponse } from '@/types/leaguesType'
import { getLeagues } from '@/services/getLeagues'

const leagueTournaments = [
    { name: 'Liga Española', href: '/liga-espanola', image: '/1.png' },
    { name: 'Liga Inglesa', href: '/liga-inglesa', image: '/1.png' },
    { name: 'Liga Alemana', href: '/liga-alemana', image: '/1.png' },
    { name: 'Liga Italiana', href: '/liga-italiana', image: '/1.png' },
    { name: 'Liga Francesa', href: '/liga-francesa', image: '/1.png' },
    { name: 'Liga Argentina', href: '/liga-argentina', image: '/1.png' },
    { name: 'Liga Brasileña', href: '/liga-brasilena', image: '/1.png' },
    { name: 'Liga Holandesa', href: '/liga-holandesa', image: '/1.png' },
    { name: 'Liga Portuguesa', href: '/liga-portuguesa', image: '/1.png' },
    { name: 'Liga de Chile', href: '/liga-de-chile', image: '/1.png' },
    { name: 'Liga de Colombia', href: '/liga-de-colombia', image: '/1.png' },
    { name: 'Liga de Ecuador', href: '/liga-de-ecuador', image: '/1.png' },
    { name: 'Liga de Paraguay', href: '/liga-de-paraguay', image: '/1.png' },
]


const pageRoutes = [
    { name: 'Inicio', href: '/', current: true, dropdown: false, nameDropdown: '' },
    { name: 'Torneos Ligueros', href: '#', current: false, dropdown: true, dataDropdown: leagueTournaments },
    { name: 'Torneos Internacionales', href: '#', current: false, dropdown: true, dataDropdown: [] },
    { name: 'Partidos', href: '/partidos', current: false, dropdown: false, nameDropdown: '' },
    { name: 'Noticias', href: '/noticias', current: false, dropdown: false, nameDropdown: '' },
    { name: 'Nosotros', href: '/nosotros', current: false, dropdown: false, nameDropdown: '' },
]




const userOptions = [
    { name: 'Your Profile', href: '/profile' },
    { name: 'Settings', href: '#' },
]


export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [league, setLeague] = useState<LeagueResponse | null>(null);

    useEffect(() => {
        const fetchLeagues = async () => {
            const res = await getLeagues({ endpoint: '/competitions' });

            setLeague(res);
        }
        fetchLeagues();
    }, []);

    const newListLeagueTournaments = league? leagueTournaments.map((item, index) => ({
        ...item,
        name: league?.competitions[index]?.name || '',
        href: `/league/${league?.competitions[index]?.id}` || '',
        image: league?.competitions[index]?.emblem || '',
    })) : [];

    pageRoutes[1].dataDropdown = newListLeagueTournaments;

    console.log("newListLeagueTournaments", newListLeagueTournaments);


    return (
        <header className="bg-blue-usfx/70 backdrop-blur-sm z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
                    >
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-2.5 p-1.5 text-center flex flex-col justify-center items-center">
                        <span className="sr-only">Your Company</span>
                        <img alt="Apps Futbol" src="/1.png" className="w-24" />
                        <h1 className="text-xl font-bold text-red-700">World Football</h1>
                    </a>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {
                        pageRoutes.map((item) => (
                            <Popover
                                key={item.name}
                                className="relative"
                            >
                                <PopoverButton
                                    key={item.name}
                                    className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100 hover:text-gray-300"
                                >
                                    {item.dropdown ? (
                                        item.name

                                    ) : (

                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-x-1"
                                        >
                                            {item.name}

                                        </Link>
                                    )}

                                    {item.dropdown && (
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-100" />
                                    )}
                                </PopoverButton>

                                {item.dropdown && (
                                    <PopoverPanel
                                        transition
                                        className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white/90 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="p-4">
                                            {item.dataDropdown?.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                >
                                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg hover:bg-gray-50 group-hover:bg-white">
                                                        <img
                                                            alt=""
                                                            src={item.image}
                                                            className="h-6 w-6"
                                                        />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <a href={item.href} className="block font-semibold text-gray-900">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                                                    </div>
                                                </div>

                                            ))}
                                        </div>
                                    </PopoverPanel>

                                )}
                            </Popover>

                        ))
                    }
                </PopoverGroup>


                {/* Section for user options */}
                {
                    

                        <div className="lg:flex lg:flex-1 lg:justify-end gap-6">
                            {/* Section for change career */}


                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-gray-800 p-1 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user options</span>
                                            <Tv2Icon aria-hidden="true" className="h-6 w-6 text-gray-100" />
                                            <ArrowBigDownDash aria-hidden="true" className="h-4 w-4 text-gray-100" />
                                            {/* <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                className="h-8 w-8 rounded-full"
                                            /> */}
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-gray-100 backdrop-blur-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {
                                            userOptions.map((item, index) => (
                                                <MenuItem
                                                    key={index}
                                                >
                                                    <Link href={item.href} className="block px-4 py-2 text-sm text-gray-950 data-[focus]:bg-blue-300">
                                                        {item.name}
                                                    </Link>
                                                </MenuItem>
                                            ))
                                        }

                                        
                                        <hr />
                                        {/* Section for change career */}
                                        {/* <MenuItem>
                                            <Listbox value={currentCareer} onChange={changeCareer}>
                                                {/* <Label className="text-sm font-semibold leading-6 text-gray-100">Carrera:</Label> }
                                                <div className="relative w-full">
                                                    <ListboxButton className="relative flex w-full py-2 justify-between text-sm leading-6 text-gray-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-blue-300">
                                                        <span
                                                            className="block truncate px-4"
                                                        >{currentCareer}</span>
                                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                            <ArrowDownUpIcon aria-hidden="true" className="h-4 w-4 text-gray-950" />
                                                        </span>
                                                    </ListboxButton>
                                                    <ListboxOptions
                                                        className="absolute z-10 w-60 mt-1 bg-gray-100 origin-top-right overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                    >
                                                        {careers.map((item, index) => (
                                                            <ListboxOption
                                                                key={index}
                                                                value={item.name}
                                                                className={({ active }) => `${active ? 'bg-gray-100' : 'text-red-800'} cursor-default select-none relative py-2 pl-3 pr-9`}
                                                            >
                                                                {({ selected }) => (
                                                                    <span className={`${selected ? 'font-semibold' : 'font-normal'} block text-teal-800 hover:text-teal-500`}>
                                                                        {item.name}
                                                                    </span>
                                                                )}
                                                            </ListboxOption>
                                                        ))}
                                                    </ListboxOptions>
                                                </div>
                                            </Listbox>
                                        </MenuItem> */}
                                        <hr />
                                        {/* <MenuItem>
                                            <div
                                                className="flex w-full h-full text-sm text-gray-700 data-[focus]:bg-gray-100"
                                            >
                                                <button
                                                    type="button"
                                                    className="flex w-full px-4 py-2 text-sm text-gray-950 data-[focus]:bg-gray-100 hover:bg-gray-400 focus:outline-none"
                                                    onClick={() => signOut()}
                                                >
                                                    Cerrar Sesión
                                                </button>

                                            </div>

                                        </MenuItem> */}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                }

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">usfx virtual</span>
                            <img
                                alt=""
                                src="/logo_usfx.png"
                                className="h-8 w-auto"
                            />
                        </a>

                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {
                                    pageRoutes.map((item) => (
                                        <div key={item.name}>
                                            {item.dropdown ? (
                                                <Disclosure>
                                                    <DisclosureButton
                                                        className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
                                                    </DisclosureButton>
                                                    <DisclosurePanel className="p-4">
                                                        {item.dataDropdown?.map((item) => (
                                                            <div
                                                                key={item.name}
                                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                            >
                                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg hover:bg-gray-50">
                                                                    <img
                                                                        alt=""
                                                                        src={item.image}
                                                                        className="h-6 w-6"
                                                                    />
                                                                </div>
                                                                <div className="flex-auto">
                                                                    <a href={item.href} className="block font-semibold text-gray-900">
                                                                        {item.name}
                                                                        <span className="absolute inset-0" />
                                                                    </a>
                                                                    {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </DisclosurePanel>
                                                </Disclosure>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className="flex items-center gap-x-1 justify-between w-full px-4 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                                                >
                                                        {item.name}
                                                </Link>
                                            )}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
