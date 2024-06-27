import Container from '../../atoms/container/Container'
import Typography from '../../atoms/typography/Typography'
import containerVariants from '@/variants/containerVariants'
import typographyVariants from '@/variants/typographyVariants'
import IconText from '../../molecules/iconText/IconText'


type ObjProps = {
    text?: string,
    icon?: string,
    iconName?: string
}

interface Iprops {
    title: string,
    body: ObjProps[]
}

const Requirements = () => {
    const schema: Iprops[] = [
        {
            title: "Skills Required",
            body: [
                {
                    icon: "figma",
                    iconName: "Figma"
                },
                {
                    icon: "adobeI",
                    iconName: "Adobe Illustrator"
                },
                {
                    icon: "adobex",
                    iconName: "Adobe XD"
                },
            ]
        },
        {
            title: "Prefered Language",
            body: [{
                text: "English"
            }]
        },
        {
            title: "Type",
            body: [{
                text: "Full-time"
            }]
        },
        {
            title: "Years of Experience",
            body: [{
                text: "3+ Years of Experience"
            }]
        }
    ]
    return (
        <Container variant={containerVariants.WRAPPER} className='border-b border-b-1 border-gray'>
            <Container variant={containerVariants.FLEX} className='gap-[60px]'>
                {schema.map((slug, i) => (
                    <Container variant={containerVariants.BLOCK} key={i} >
                        <Typography variant={typographyVariants.S} className='text-grey mb-[9px]'>
                            {slug.title}
                        </Typography>
                        {
                            slug.title === "Skills Required"
                                ? slug.body.map((skill, j) => (
                                    <IconText
                                        key={j}
                                        icon={{
                                            src: skill.icon,
                                            alt: skill.iconName
                                        }}
                                        typo={{ variant: typographyVariants.S, className:"text-grey" }}
                                        className='border border-1 border-grey100 rounded-[7px] w-fit px-[5px] py-[2px] mb-[8px]'
                                        >
                                        {skill.iconName}
                                    </IconText>
                                ))
                                : <Typography variant={typographyVariants.SM} className='font-semibold'>
                                    {slug.body[0].text}
                                </Typography>
                        }
                    </Container>
                ))}
            </Container>
        </Container>
    )
}

export default Requirements
