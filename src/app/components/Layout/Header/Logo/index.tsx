import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='font-semibold'>
      <img src='/images/logo.png' alt='Nexora Agency Logo' className='h-15 w-30' />
    </Link>
  )
}

export default Logo
