import React from 'react'
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
        <Container variant={containerVariants.FLEX}>
            {schema.map((slug, i) => (
                <Container variant={containerVariants.BLOCK} key={i} >
                    <Typography variant={typographyVariants.SM}>
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
                                    typo={{ variant: typographyVariants.SM }}>
                                    {skill.iconName}
                                </IconText>
                            ))
                            : <Typography variant={typographyVariants.SM}>
                                {slug.body[0].text}
                            </Typography>
                    }
                </Container>
            ))}
        </Container>
    )
}

export default Requirements
