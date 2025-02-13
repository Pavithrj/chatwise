import PropTypes from 'prop-types';

const Heading = ({ className, title }) => {
    return (
        <div className={`text-center max-w-[50rem] mx-auto mb-12 lg:mb-20 ${className}`}>
            {title &&
                <h2 className="h2">
                    {title}
                </h2>
            }
        </div>
    )
};

Heading.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default Heading;
