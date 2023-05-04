import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assests/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className,fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(className, styles.wrapper)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
export default Image;
