import Header from '../organisms/header/Header'
import Preview from '../organisms/preview/Preview'
import Container from '../atoms/container/Container'
import containerVariants from '@/variants/containerVariants'
import RightPanel from '../organisms/rightPanel/RightPanel'


const Template = () => {
  return (
    <>
      <Header />
      <Container variant={containerVariants.FLEX}>
        <Preview />
        <Container variant={containerVariants.CONTAIN} className='w-fit px-[15px] bg-blue50 border-l-2 border-l-gray'>
          <RightPanel />
        </Container>
      </Container>
    </>
  )
}

export default Template
