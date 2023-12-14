import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>AboutPage</h1>
      <Link href='/'>
        <p className='text-2xl'>home page</p>
      </Link>
    </div>
  )
}
export default AboutPage
