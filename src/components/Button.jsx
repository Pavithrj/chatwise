import ButtonSvg from './../assets/svg/ButtonSvg';

const Button = ({ className, href, onClick, children, px, white }) => {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

    const divClasses = `relative z-10`;

    const renderButton = () => (
        <button className={classes}>
            <div className={divClasses}>
                {children}
            </div>

            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
            <div className={divClasses}>
                {children}
            </div>

            {ButtonSvg(white)}
        </a>
    );

    return href ? renderLink() : renderButton();
}

export default Button;
