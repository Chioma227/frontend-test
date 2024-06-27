import JobType from './JobType'
import Container from '../../atoms/container/Container'
import containerVariants from '@/variants/containerVariants'
import Requirements from './Requirements'
import JobDescription from './JobDescription'

const Preview = () => {
  return (
    <Container variant={containerVariants.DEFAULT} className='w-full'>
      <JobType/>
      <Requirements/>
      <JobDescription/>
    </Container>
  )
}

export default Preview
