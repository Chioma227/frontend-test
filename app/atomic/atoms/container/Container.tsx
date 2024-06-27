import clsx from 'clsx'
import React from 'react'
import containerProps from './containerProps'
import containerVariants from '@/variants/containerVariants'


const Container = ({ children, variant, className }: containerProps) => {
    let style;

    switch (variant) {
        case containerVariants.DEFAULT:
            style = clsx(className, "")
            break;
        case containerVariants.BLOCK:
            style = clsx(className, "block")
            break;
        case containerVariants.FLEX:
            style = clsx(className, "flex")
            break;
        case containerVariants.CONTAIN:
            style = clsx(className, "w-fit")
            break;
        case containerVariants.WRAPPER:
            style = clsx(className, "w-full px-[60px] py-[25px]")
            break;
        case containerVariants.FLEX_BASE:
            style = clsx(className, "flex items-baseline")
            break;
        case containerVariants.FLEX_GAP_LG:
            style = clsx(className, "flex items-center gap-[50px]")
            break;
        case containerVariants.FLEX_CENTER:
            style = clsx(className, "flex items-center justify-center")
            break;
        case containerVariants.FLEX_GAP_MD:
            style = clsx(className, "flex items-center gap-[50px]")
            break;
        case containerVariants.FLEX_GAP_SM:
            style = clsx(className, "flex items-center gap-[6px] w-[fit-content")
            break;
        case containerVariants.FLEX_BETWEEN:
            style = clsx(className, "flex items-center justify-between")
            break;

        default:
            break;
    }

    return (
        <main className={clsx(className, style)}>
            {children}
        </main>
    )
}

export default Container
