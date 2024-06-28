import containerVariants from "@/variants/containerVariants"
import Container from "../../atoms/container/Container"
import Icon from "../../atoms/icon/Icon"
import typographyVariants from "@/variants/typographyVariants"
import Typography from "../../atoms/typography/Typography"

const Footer = () => {
    return (
        <Container variant={containerVariants.WRAPPER} className="">
            <Container variant={containerVariants.FLEX} className="mb-[10px] gap-2">
                <Icon src="logo (3)" alt="logo" />
                <Typography variant={typographyVariants.S}>
                    Atlassian
                </Typography>
            </Container>
           <Container variant={containerVariants.FLEX_GAP_LG}>
           <Container variant={containerVariants.DEFAULT}>
                <Container variant={containerVariants.BLOCK} className="mb-[10px]">
                    <Typography variant={typographyVariants.SX} className="text-[13px] text-[#6E6D6D]">
                        Company size
                    </Typography>
                    <Typography variant={typographyVariants.S}>
                        1k - 2k Employees
                    </Typography>
                </Container>
                <Container variant={containerVariants.BLOCK} className="mb-[10px]">
                    <Typography variant={typographyVariants.SX} className="text-[13px] text-[#6E6D6D]">
                        Sector
                    </Typography>
                    <Typography variant={typographyVariants.S}>
                        Information Technology, Infrastructure
                    </Typography>
                </Container>
                <Container variant={containerVariants.BLOCK} className="mb-[10px]">
                    <Typography variant={typographyVariants.SX} className="text-[13px] text-[#6E6D6D]">
                        Founded in
                    </Typography>
                    <Typography variant={typographyVariants.S}>
                        2019
                    </Typography>
                </Container>
            </Container>
            <Container variant={containerVariants.DEFAULT}>
                <Container variant={containerVariants.BLOCK} className="mb-[10px]">
                    <Typography variant={typographyVariants.SX} className="text-[13px] text-[#6E6D6D]">
                        Type
                    </Typography>
                    <Typography variant={typographyVariants.S}>
                        Private
                    </Typography>
                </Container>
                <Container variant={containerVariants.BLOCK} className="mb-[10px]">
                    <Typography variant={typographyVariants.SX} className="text-[13px] text-[#6E6D6D]">
                        Funding
                    </Typography>
                    <Typography variant={typographyVariants.S}>
                        Bootstrapped
                    </Typography>
                </Container>
                <Container variant={containerVariants.BLOCK} className="mb-[10px]">
                    <Typography variant={typographyVariants.SX} className="text-[13px] text-[#6E6D6D]">
                        Founded By
                    </Typography>
                    <Typography variant={typographyVariants.S}>
                        Scott Farquhar, Mike Canoon-Brookes
                    </Typography>
                </Container>
            </Container>
           </Container>
        </Container>
    )
}

export default Footer
