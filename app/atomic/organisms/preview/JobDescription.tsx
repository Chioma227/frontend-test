import Typography from "../../atoms/typography/Typography"
import typographyVariants from "@/variants/typographyVariants"
import { BsDot } from "react-icons/bs"
import Container from "../../atoms/container/Container"
import containerVariants from "@/variants/containerVariants"

const JobDescription = () => {
    return (
        <Container variant={containerVariants.WRAPPER} className="border-b border-b-1 border-gray">
            <Typography variant={typographyVariants.S} className="mb-2 text-grey">
               About the job
            </Typography>
            <Typography variant={typographyVariants.S} className="mb-2">
                1. Handle the UI/UX research design
            </Typography>
            <Typography variant={typographyVariants.S} className="mb-2">
                2. Work on researching on latest web applications designs & trends
            </Typography>
            <Typography variant={typographyVariants.S} className="mb-2">
                3. Work on conceptualizing and visualizing
            </Typography>
            <Typography variant={typographyVariants.S} className="mb-2">
                4. Work on creating graphics contents and other graphic related works.
            </Typography>
            <Typography variant={typographyVariants.S} className="mb-2">
                Benefits:
            </Typography>
            <Typography variant={typographyVariants.S}>
                <Container variant={containerVariants.FLEX} className="mb-2">
                    <BsDot /><p> Health Insurance</p>
                </Container>
                <Container variant={containerVariants.FLEX} className="mb-2">
                    <BsDot /><p>Provident Fund</p>
                </Container>
            </Typography>
            <Typography variant={typographyVariants.S} className="mb-2">
                Schedule:
            </Typography>
            <Typography variant={typographyVariants.S}>
                <Container variant={containerVariants.FLEX} className="mb-2">
                    <BsDot /><p>Day shift</p>
                </Container>
            </Typography>
            <Typography variant={typographyVariants.S} className="mb-2">
                Spllemental pa types:
            </Typography>
            <Typography variant={typographyVariants.S}>
                <Container variant={containerVariants.FLEX} className="mb-2">
                    <BsDot /><p>Performanc bonus</p>
                </Container>
                <Container variant={containerVariants.FLEX} className="mb-2">
                    <BsDot /><p>Yearly bonus</p>
                </Container>
            </Typography>
            <Typography variant={typographyVariants.S}>
                Work Location: In person
            </Typography>
        </Container>
    )
}

export default JobDescription
