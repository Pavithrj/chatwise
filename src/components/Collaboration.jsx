import { check } from '../assets';
import { apps, content, text } from '../constants';
import Section from './Section';
import Button from './Button';
import ChatWiseIcon from './../assets/ChatWiseIcon.png';

const Collaboration = () => {
    console.log("text", text);

    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="mb-4 h2 md:mb-8">
                        AI Chat App for seamless collaboration
                    </h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {content.map((item) => {
                            return (
                                <li key={item.id} className="py-3 mb-3">
                                    <div className="flex items-center gap-5">
                                        <img src={check} alt="check" width={24} height={24} />

                                        <h6 className="body-2">
                                            {item.title}
                                        </h6>
                                    </div>

                                    {item.text &&
                                        <p className="mt-3 body-2 text-n-4">
                                            {item.text}
                                        </p>
                                    }
                                </li>
                            )
                        })}
                    </ul>

                    <Button>
                        Try it now
                    </Button>
                </div>

                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="body-2 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        {text}
                    </p>

                    <div className="relative flex left-1/2 w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                        <div className="flex m-auto border rounded-full w-60 aspect-square border-n-6">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                                    <img src={ChatWiseIcon} alt="ChatWiseIcon" width={48} height={48} />
                                </div>
                            </div>
                        </div>

                        <ul className="">
                            {apps.map((app, index) => {
                                return (
                                    <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                                        <div>
                                            <img src={app.icon} alt="" />
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    )
};

export default Collaboration;
