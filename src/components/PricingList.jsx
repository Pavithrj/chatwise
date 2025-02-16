import Button from './Button';
import { pricing } from './../constants';
import { check } from '../assets';

const PricingList = () => {
    return (
        <div className="flex gap-[1rem]">
            {pricing.map((item) => {
                return (
                    <div key={item.id} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                        <h4 className="mb-4 h4">
                            {item.title}
                        </h4>

                        <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                            {item.description}
                        </p>

                        {item.price &&
                            <div className="flex items-center h-[5.5rem] mb-6">
                                <div className="h3">
                                    $
                                </div>

                                <div className="text-[5.5rem] leading-none font-bold">
                                    {item.price}
                                </div>
                            </div>
                        }

                        <Button className="w-full mb-6" href={item.price ? "/chatwise/pricing" : "/chatwise"} white={!!item.price}>
                            {item.price ? "Get started" : "Contact us"}
                        </Button>

                        <ul>
                            {item.features.map((feature, index) => {
                                return (
                                    <li key={index} className="flex items-start gap-4 py-5 border-t border-n-6">
                                        <img src={check} alt="Check" width={24} height={24} />

                                        <p className="body-2">
                                            {feature}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
};

export default PricingList;
