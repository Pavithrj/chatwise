import Section from './Section';
import Heading from './Heading';
import { benefits } from './../constants/index';
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';
import CardOne from '../assets/benefits/CardOne';
import CardTwo from '../assets/benefits/CardTwo';
import CardThree from '../assets/benefits/CardThree';
import CardFour from '../assets/benefits/CardFour';
import CardFive from '../assets/benefits/CardFive';
import CardSix from '../assets/benefits/CardSix';

const Benefits = () => {
    const backgroundSVG = [CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix];

    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="Chat Smatter, Not Harder with ChatWise" />

                <div className="flex flex-wrap justify-center gap-10 mb-10">
                    {benefits.map((item) => {
                        const BackgroundSVG = backgroundSVG[item.id % backgroundSVG.length];

                        return (
                            <div key={item.id} className="relative md:max-w-[24rem]">
                                <div className="absolute inset-0 -z-10">
                                    <BackgroundSVG key={item.id} />
                                </div>

                                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                                    <h5 className="mb-5 h2">
                                        {item.title}
                                    </h5>

                                    <p className="mb-6 body-2 text-n-3 w-[310px]">
                                        {item.text}
                                    </p>

                                    <div className="flex items-center mt-auto">
                                        <img src={item.iconUrl} alt={item.title} width={48} height={48} />

                                        <p className="ml-auto text-xs font-bold tracking-wider uppercase font-code text-n-1">
                                            Explore more
                                        </p>

                                        <Arrow />
                                    </div>
                                </div>

                                {item.light &&
                                    <GradientLight />
                                }

                                <div className="absolute insert-0.5 b-n-8" style={{ clipPath: "url(#benefits)" }}>
                                    <div className="absolute transition-opacity opacity-0 insert-0 hover:opacity-10">
                                        {item.imageUrl &&
                                            <img src={item.imageUrl} alt={item.title} width={380} height={362} className="object-cover w-full h-full" />}
                                    </div>
                                </div>

                                <ClipPath />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section>
    )
};

export default Benefits;
