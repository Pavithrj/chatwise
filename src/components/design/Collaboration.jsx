import curveOne from './../../assets/collaboration/curveOne.svg';
import curveTwo from './../../assets/collaboration/curveTwo.svg';

export const LeftCurve = () => {
    return (
        <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
            <img src={curveOne} width={522} height={182} alt="Curve One" />
        </div>
    )
};

export const RightCurve = () => {
    return (
        <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
            <img src={curveTwo} width={162} height={76} alt="Curve Two" />
        </div>
    )
};