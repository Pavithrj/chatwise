import loading from './../assets/loading.png';
import PropTypes from 'prop-types';

const Generating = ({ className }) => {
    return (
        <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base ${className || ""}`}>
            <img src={loading} alt="Loading" className="w-5 h-5 mr-4" />

            AI is generating
        </div>
    )
};

Generating.propTypes = {
    className: PropTypes.string
};

export default Generating;
