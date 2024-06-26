import React from 'react'
import Image from 'next/image'
import iconProps from './iconProps'


const Icon = ({ src, alt, className, }: iconProps) => {

    //dynamic icon src
    const dynamicIconSrc = `/icons/${src}.svg`;

    return (
        <Image
            alt={alt}
            width={20}
            height={20}
            src={dynamicIconSrc}
            className={className}
        />
    )

}

export default Icon
