import PropTypes from 'prop-types';
import brackets from '../assets/svg/Brackets';

const Tagline = ({ className, children }) => {
    return (
        <div className={`tagline flex items-center ${className || ""}`}>
            {brackets("left")}

            <div className="mx-3 text-n-3">
                {children}
            </div>

            {brackets("right")}
        </div>
    )
};

Tagline.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string
};

export default Tagline;
