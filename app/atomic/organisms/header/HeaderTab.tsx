import Button from '../../atoms/button/Button'
import buttonVariants from '@/variants/buttonVariants'
import Container from '../../atoms/container/Container'
import containerVariants from '@/variants/containerVariants'

interface props{
    text: string,
    active?: boolean
}

const HeaderTab = () => {
    const textSchema: props[]= [
        {text:"Job Preview", active: true},
        {text:"Applicants"},
        {text:"Match"},
        {text:"Messages"},
    ]
  return (
    <Container variant={containerVariants.FLEX_GAP_MD} className='px-[60px] py-[10px] border-b border-b-1 border-b-gray'>
      {textSchema.map((slug, i)=>(
        <Button key={i} variant={buttonVariants.TRANSPARENT} className={slug.active ? "text-theme border-b border-b-1 border-b-theme font-medium h-full" :" text-grey font-medium"}>
            {slug.text}
        </Button>
      ))}
    </Container>
  )
}

export default HeaderTab
