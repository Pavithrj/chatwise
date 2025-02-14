import PropTypes from 'prop-types';
import Tagline from './Tagline';

const Heading = ({ className, title, text, tag }) => {
    return (
        <div className={`text-center max-w-[50rem] mx-auto mb-12 lg:mb-20 ${className || ""}`}>
            {tag &&
                <Tagline className="justify-center m-4">
                    {tag}
                </Tagline>
            }

            {title &&
                <h2 className="h2">
                    {title}
                </h2>
            }

            {text &&
                <p className="mt-4 body-2 text-n-4">
                    {text}
                </p>
            }
        </div>
    )
};

Heading.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
};

export default Heading;
