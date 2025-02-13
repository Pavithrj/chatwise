import { companyLogos } from '../constants';
import PropTypes from 'prop-types';

const CompanyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className="mb-6 text-center tagline text-n-1/50">
                Helping people create beautiful content at
            </h5>

            <ul className="flex">
                {companyLogos.map((logo, index) => {
                    return (
                        <li key={index} className="flex items-center justify-center flex-1 h-[8.5rem]">
                            <img src={logo} alt={logo} width={134} height={28} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

CompanyLogos.propTypes = {
    className: PropTypes.string
};

export default CompanyLogos;
