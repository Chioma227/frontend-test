import React from 'react'
import HeaderTab from './HeaderTab';
import Icon from '../../atoms/icon/Icon'
import { GoChevronDown } from "react-icons/go";
import buttonVariants from '@/variants/buttonVariants'
import Container from '../../atoms/container/Container'
import Typography from '../../atoms/typography/Typography'
import containerVariants from '@/variants/containerVariants'
import typographyVariants from '@/variants/typographyVariants'
import IconButton from '../../molecules/iconButton/IconButton'

const Header = () => {
    interface props {
        icon: string,
        text: string,
        active?: boolean
    }
    const buttonSchema: props[] = [
        { icon: "briefcase", text: "Jobs", active: true },
        { icon: "message-notification", text: "Messages" },
        { icon: "coins-hand", text: "Payments" }
    ]
    return (
        <>
            <Container variant={containerVariants.FLEX_BETWEEN} className='px-[30px] py-[15px] border border-b-1 border-b-gray'>
                <Typography variant={typographyVariants.SM} className=' font-medium text-theme bg-slate-200 py-[10px] px-[15px]'>
                    Logo
                </Typography>
                <Container variant={containerVariants.FLEX_GAP_MD} className='border border-1 border-gray rounded-full p-1'>
                    {buttonSchema.map((slug, i) => (
                        <IconButton key={i}
                            icon={{ src: slug.icon, alt: slug.text }}
                            button={{ variant: slug.active ? buttonVariants.DEFAULT_ROUNDED_FULL : buttonVariants.TRANSPARENT }}
                        >
                            {slug.text}
                        </IconButton>
                    ))}
                </Container>
                <Container variant={containerVariants.FLEX} className='gap-2'>
                    <Icon src='notification' alt='notification' />
                    <Container variant={containerVariants.FLEX} className='items-center'>
                        <Icon src='avatar' alt="avatar" />
                        <GoChevronDown />
                    </Container>
                </Container>
            </Container>
            <HeaderTab />
        </>
    )
}

export default Header

