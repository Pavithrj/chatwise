import Section from './Section';
import Heading from './Heading';
import PricingList from './PricingList';
import { smallSphere, stars } from '../assets';
import { LeftLine, RightLine } from './../components/design/Pricing';

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} alt="Sphere" className="relative z-1" width={255} height={255} />

                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} alt="Stars" className="w-full" width={950} height={400} />
                    </div>
                </div>

                <Heading tag="Get started with ChatWise" title="Pay once, use forever" />

                <div className="relative">
                    <PricingList />

                    <LeftLine />

                    <RightLine />
                </div>

                <div className="flex justify-center mt-10">
                    <a className="text-xs font-bold tracking-wider uppercase border-b font-code" href="/chatwise/pricing">
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    )
};

export default Pricing;
