import clsx from 'clsx'
import buttonVariants from '@/variants/buttonVariants'
import buttonProps from './buttonProps'

const Button = ({className, variant, children}: buttonProps) => {
    let style;
    switch (variant) {
        case buttonVariants.DEFAULT_ROUNDED_FULL:
            style = clsx(className, "bg-theme text-white border border-2 border-opac rounded-full w-fit px-[9px] py-[8px]")
            
            break;
        case buttonVariants.DEFAULT_ROUNDED_MD:
            style = clsx(className, "bg-theme text-white border border-2 border-opac rounded-[10px] w-[100px] text-center py-[8px]")
            
            break;
        case buttonVariants.OPAC:
            style = clsx(className, "bg-opac100 text-theme border border-1 border-theme rounded-[9px] w-[100px] text-center py-[8px]")
            
            break;
        case buttonVariants.TRANSPARENT:
            style = clsx(className, "bg-transparent text-grey100 px-[9px] py-[8px]")
            
            break;
    
        default:
            break;
    }
    return (
       <button className={clsx(className, style )}>{children}</button>
    )
}

export default Button
