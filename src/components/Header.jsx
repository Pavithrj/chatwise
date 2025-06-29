import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import noscroll from 'no-scroll';
import Button from './Button';
import { navigation } from './../constants/index';
import { HamburgerMenu } from './design/Header';
import ChatWiseIcon from './../../src/assets/chatWiseIcon.png';
import MenuSvg from './../assets/svg/MenuSvg';

const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false);
    const pathname = useLocation();

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            noscroll.off();
        } else {
            setOpenNavigation(true);
            noscroll.on();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;
        noscroll.off();
        setOpenNavigation(false);
    };

    return (
        <header className={`fixed top-0 left-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 py-4">
                <a className="flex items-center gap-4" href="/chatwise">
                    <img src={ChatWiseIcon} alt="ChatWiseIcon" width={50} height={50} />

                    <div className="text-[2rem] font-bold">
                        ChatWise
                    </div>
                </a>

                <nav className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent ${openNavigation ? "flex" : "hidden"}`}>
                    <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
                        {navigation.map((item) => {
                            return (
                                <a key={item.id} href={item.url} className={`block relative font-codetext-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 ${item.onlyMobile ? "lg:hidden" : ""} ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}`} onClick={handleClick}>
                                    {item.title}
                                </a>
                            )
                        })}
                    </div>

                    <HamburgerMenu />
                </nav>

                <a href="#signup" className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block">
                    New Account
                </a>

                <Button className="hidden lg:flex" href="#login">
                    Sign in
                </Button>

                <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </header>
    )
};

export default Header;
