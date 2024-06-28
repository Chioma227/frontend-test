import clsx from 'clsx'
import typographyVariants from '@/variants/typographyVariants'
import typoProps from './typoProps'


const Typography = ({children, variant, className}: typoProps) => {
    let style;
    switch (variant) {
        case typographyVariants.LG:
            style = clsx(className, "text-[35px]")
            break;
        case typographyVariants.MD:
            style = clsx(className, "text-[20px]")
            break;
        case typographyVariants.SM:
            style = clsx(className, "text-[15px]")
            break;
        case typographyVariants.S:
            style = clsx(className, "text-[13px]")
            break;
        case typographyVariants.SX:
            style = clsx(className, "text-[12px]")
            break;
        case typographyVariants.XS:
            style = clsx(className, "text-[10px]")
            break;
        default:
            break;
    }
  return (
   <p className={clsx(className, style)}>{children}</p>
  )
}

export default Typography
