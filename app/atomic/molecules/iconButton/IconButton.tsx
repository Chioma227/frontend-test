import Icon from '../../atoms/icon/Icon'
import Button from '../../atoms/button/Button'
import iconProps from '../../atoms/icon/iconProps'
import Container from '../../atoms/container/Container'
import buttonProps from '../../atoms/button/buttonProps'
import containerVariants from '@/variants/containerVariants'

interface iconButtonProps {
    icon: iconProps,
    button: buttonProps,
    children: React.ReactNode | string
}

const IconButton = (
    {
        button, icon, children
    }: iconButtonProps) => {
    return (
        <Button {...button}>
            <Container variant={containerVariants.FLEX_GAP_SM} className='w-full text-center'>
                <Icon {...icon} />
                {children}
            </Container>
        </Button>
    )
}

export default IconButton
