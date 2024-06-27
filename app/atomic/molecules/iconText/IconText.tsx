import Icon from '../../atoms/icon/Icon'
import iconProps from '../../atoms/icon/iconProps'
import Container from '../../atoms/container/Container'
import typoProps from '../../atoms/typography/typoProps'
import Typography from '../../atoms/typography/Typography'
import containerVariants from '@/variants/containerVariants'

interface iconTextProps {
    icon: iconProps,
    children: string | React.ReactNode,
    typo: typoProps
    className?: string
}

const IconText = ({ children, icon, typo, className }: iconTextProps) => {
    return (
        <Container variant={containerVariants.FLEX_GAP_SM} className={className}>
            <Icon {...icon} />
            <Typography {...typo}>
                {children}
            </Typography>
        </Container>
    )
}

export default IconText
