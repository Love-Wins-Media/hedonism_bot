import React, {useState} from 'react'
// @ts-ignore
import fallback from '../assets/fallback.svg'
import {clsx} from "clsx";

export function ImageWithFallback({src, alt, style, className, ...props}: React.ImgHTMLAttributes<HTMLImageElement>) {
    const [didError, setDidError] = useState(false)

    const handleError = () => {
        setDidError(true)
    }

    if (didError) {
        return (
            <div className={clsx('fallback-image-error', className)} style={style}>
                <div className="fallback-image-error">
                    <img src={fallback} alt="Error loading image" {...props} data-original-url={src}/>
                </div>
            </div>
        )
    }

    return <img src={src} alt={alt} className={className} style={style} {...props} onError={handleError} />
}
