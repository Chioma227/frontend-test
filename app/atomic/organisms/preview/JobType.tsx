import React from 'react'
import { BsDot } from "react-icons/bs";
import Container from '../../atoms/container/Container'
import IconText from '../../molecules/iconText/IconText'
import Typography from '../../atoms/typography/Typography'
import containerVariants from '@/variants/containerVariants'
import typographyVariants from '@/variants/typographyVariants'

const JobType = () => {

    return (
        <Container variant={containerVariants.WRAPPER} className='border-b border-b-1 border-gray'>
            <Container variant={containerVariants.BLOCK}>
                <Container variant={containerVariants.FLEX} className='items-center gap-[6px]'>
                    <Typography variant={typographyVariants.LG} className='font-bold'>
                        Senior Product Designer
                    </Typography>
                    <BsDot className='text-grey100' />
                    <Typography variant={typographyVariants.XS} className='text-grey100'>
                        Posted 2 days ago
                    </Typography>
                </Container>
                <Container variant={containerVariants.FLEX} className='gap-[10px] mt-[15px] items-center'>
                        <IconText
                            icon={{ src: "marker-pin", alt: "marker-pin"  }}
                            typo={{ variant: typographyVariants.SM, className: "text-black100 font-medium" }}
                        >
                            Delaware, USA
                        </IconText>
                        <BsDot className='text-grey100'/>
                        <IconText
                            icon={{ src: "coins-stacked", alt: "coins-stacked"  }}
                            typo={{ variant: typographyVariants.SM, className: "text-black100 font-medium" }}
                        >
                           &#36; 300k - &#36;400k
                        </IconText>
                </Container>
            </Container>
        </Container>
    )
}

export default JobType
