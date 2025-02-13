import PropTypes from 'prop-types';

const Heading = ({ className, title, text }) => {
    return (
        <div className={`text-center max-w-[50rem] mx-auto mb-12 lg:mb-20 ${className}`}>
            {title &&
                <h2 className="h2">
                    {title}
                </h2>
            }

            {text &&
                <p className="body-2 mt-4 text-n-4">
                    {text}
                </p>
            }
        </div>
    )
};

Heading.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Heading;
