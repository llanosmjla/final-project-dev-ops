import Link from 'next/link';

export default function Footer() {
    return (
        <div
            className="flex flex-col w-full bg-blue-usfx text-gray-50 "
        >
            <footer className="w-4/5 mx-auto inter md:pt-2">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-medium text-base mb-3">
                                Canales de Deportes
                            </h2>
                            <hr 
                                className="w-full h-px bg-gray-300 rounded mb-4"
                            />
                            <nav className="list-none mb-10 flex flex-col text-sm space-y-3 font-normal">
                                <li>
                                    <Link
                                        className="hover:text-gray-300 cursor-pointer"
                                        href="https://www.tigosports.com.bo/inicio"
                                        passHref
                                    >
                                        TIGO SPORTS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-gray-300 cursor-pointer"
                                        href="https://www.marca.com/"
                                        passHref
                                    >
                                        MARCA
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-gray-300 cursor-pointer"
                                        href="https://www.espn.com.ar/"
                                        passHref
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        ESPN - ARGENTINA
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-gray-300 cursor-pointer"
                                        href="https://www.tudn.com/"
                                        passHref
                                    >
                                        TUND - MÉXICO
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 text-gray-50 md:w-1/2 w-full px-4">
                            <h2 className="font-medium text-base mb-3">
                                Ligas Europeas
                            </h2>
                            <hr 
                                className="w-full h-px bg-gray-300 rounded mb-4"
                            />
                            <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
                                <li>
                                    <a className="hover:text-gray-300 cursor-pointer">
                                        España
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-300 cursor-pointer">
                                        Inglaterra
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-300 cursor-pointer">
                                        Alemania
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-300 cursor-pointer">
                                        Italia
                                    </a>
                                </li>
                                
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="font-bold text-gray-50 text-base mb-3">
                                Ligas Sud Americanas
                            </h2>
                            <hr 
                                className="w-full h-px bg-gray-300 rounded mb-4"
                            />
                            <nav className="text-gray-50 list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
                                <li>
                                    <a className=" hover:text-gray-300 cursor-pointer">
                                        Bolivia
                                    </a>
                                </li>
                                <li>
                                    <a className=" hover:text-gray-300 cursor-pointer">
                                        Brasil
                                    </a>
                                </li>
                                <li>
                                    <a className=" hover:text-gray-300 cursor-pointer">
                                        Argentina
                                    </a>
                                </li>
                                <li>
                                    <a className=" hover:text-gray-300 cursor-pointer">
                                        Chile
                                    </a>
                                </li>
                                
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="w-4/5 mx-auto py-2 md:mt-12 text-sm">
                <hr className="h-px opacity-30 bg-gray-50 border-0 mb-4" />
                <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                    <div>
                        <span className="font-normal">
                            © Copyright 2024, World Football JLA App - Sucre - Bolivia
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};