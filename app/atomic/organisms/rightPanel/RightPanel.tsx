import Container from "../../atoms/container/Container"
import containerVariants from "@/variants/containerVariants"
import IconText from "../../molecules/iconText/IconText"
import Button from "../../atoms/button/Button"
import buttonVariants from "@/variants/buttonVariants"
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
      <Container variant={containerVariants.FLEX_GAP_SM}>
        <IconButton
          icon={{
            src: "delete",
            alt: "delete"
          }}
          button={{
            variant: buttonVariants.OPAC
          }}
          
        >
          Delete job
        </IconButton>
        <IconButton
          icon={{
            src: "edit",
            alt: "edit"
          }}
          button={{
            variant: buttonVariants.DEFAULT_ROUNDED_MD
          }}
        >
          Edit job
        </IconButton>
      </Container>
      <Container variant={containerVariants.DEFAULT}>
        {schema.map((slug, i) => (
          <Container variant={containerVariants.FLEX_BETWEEN}>
            <IconText
              icon={{
                src: slug.icon,
                alt: slug.text
              }}
              typo={{
                variant: typographyVariants.SM
              }}
            >
              {slug.text}
            </IconText>
            <Typography variant={typographyVariants.SM}>
              {slug.count}
            </Typography>
          </Container>
        ))}
      </Container>
    </>
  )
}

export default RightPanel
