import PropTypes from 'prop-types';
import SectionSvg from './../assets/svg/SectionSvg.jsx';

const Section = ({ className, id, crosses, crossesOffset, customPaddings, children }) => {
    return (
        <div id={id} className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`} ${className || ""}`}>
            {children}

            <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />

            <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

            {crosses &&
                <div>
                    <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 pointer-events-none lg:block xl:left-10 ${crossesOffset && crossesOffset}`} />

                    <SectionSvg crossesOffset={crossesOffset} />
                </div>
            }
        </div>
    )
};

Section.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    crosses: PropTypes.bool,
    crossesOffset: PropTypes.string,
    customPaddings: PropTypes.string,
    children: PropTypes.node,
};

export default Section;
