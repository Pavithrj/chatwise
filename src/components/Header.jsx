import { useLocation } from 'react-router-dom';
import Button from './../components/Button';
import { navigation } from './../constants/index';
import ChatWiseIcon from './../../src/assets/ChatWiseIcon.png';

const Header = () => {
    const pathname = useLocation();

    return (
        <div className="fixed top-0 left-0 z-50 w-full border-b bg-n-8/90 lg:backdrop-blur-sm border-n-6 lg:bg-n-8/90">
            <div className="flex items-center px-5 py-4 lg:px-7.5 xl:px-10">
                <a className="flex items-center gap-4" href="/">
                    <img src={ChatWiseIcon} alt="ChatWiseIcon" width={50} height={50} />

                    <div className="text-[2rem] font-bold">
                        ChatWise
                    </div>
                </a>

                <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                    <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
                        {navigation.map((item) => {
                            return (
                                <a key={item.id} href={item.url} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 ${item.onlyMobile ? "lg:hidden" : ""} ${item.url === pathname.hash ? "z-2 lg:tet-n-1" : "lg:text-n-1/50"}`}>
                                    {item.title}
                                </a>
                            )
                        })}
                    </div>
                </nav>

                <a href="/signup" className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block">
                    New account
                </a>

                <Button className="hidden lg:flex" href="#login">
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default Header;
