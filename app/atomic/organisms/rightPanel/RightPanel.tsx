import Container from "../../atoms/container/Container"
import containerVariants from "@/variants/containerVariants"
import IconText from "../../molecules/iconText/IconText"
import Button from "../../atoms/button/Button"
import buttonVariants from "@/variants/buttonVariants"
import Icon from "../../atoms/icon/Icon"
import IconButton from "../../molecules/iconButton/IconButton"
import typographyVariants from "@/variants/typographyVariants"
import Typography from "../../atoms/typography/Typography"

interface Iprops {
  icon: string,
  text: string,
  count: number
}

const RightPanel = () => {
  const schema: Iprops[] = [
    {
      icon: "users",
      text: "Applicanta",
      count: 400
    },
    {
      icon: "user-check",
      text: "Matches",
      count: 100
    },
    {
      icon: "message",
      text: "Messages",
      count: 147
    },
    {
      icon: "eye",
      text: "Views",
      count: 800
    },
  ]
  return (
    <>
      <Container variant={containerVariants.FLEX_GAP_SM} className="items-center justify-center mt-[30px] mb-[10px]">
        <Button variant={buttonVariants.OPAC} className="flex items-center gap-2 justify-center px-[20px] w-[150px] text-[13px]">
          <Icon src="delete" alt="delete" className="text-[13px]"/> Delete job
        </Button>
        <Button variant={buttonVariants.DEFAULT_ROUNDED_MD} className="flex gap-2 items-center justify-center px-[20px] w-[150px] text-[13px]">
          <Icon src="edit" alt="edit" className="text-[13px]" /> Edit job
        </Button>
      </Container>
      <Container variant={containerVariants.DEFAULT} className=" px-3">
        {schema.map((slug, i) => (
          <Container variant={containerVariants.FLEX_BETWEEN} className="border-b border-b-1 border-b-gray py-4 text-grey300 font-medium">
            <IconText
              icon={{
                src: slug.icon,
                alt: slug.text,
                className: "text-[13px]"
              }}
              typo={{
                variant: typographyVariants.S
              }}
            >
              {slug.text}
            </IconText>
            <Typography variant={typographyVariants.SM} className="font-bold">
              {slug.count}
            </Typography>
          </Container>
        ))}
      </Container>
    </>
  )
}

export default RightPanel
