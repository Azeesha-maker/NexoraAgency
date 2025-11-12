import Image from 'next/image'
import Link from 'next/link'

const Insta = () => {
  const teamMembers = [
    {
      image: '/images/insta/Azeesha.png',
      linkedin: 'https://www.linkedin.com/in/azeeshaali'
    },
    {
      image: '/images/insta/Aniqa.png', 
      linkedin: 'https://www.linkedin.com/in/aniqa-khan-7638b3344/'
    },
    {
      image: '/images/insta/Anzalna.png',
      linkedin: 'https://www.linkedin.com/in/anzalna-ansari-6990b7329'
    },
    {
      image: '/images/insta/Simra.png',
      linkedin: 'https://www.linkedin.com/in/simra-malik-ab452138b'
    },
    {
      image: '/images/insta/Saqib.png',
      linkedin: 'https://www.linkedin.com/in/muhammad-saqib-aa6699260'
    },
    {
      image: '/images/insta/Mursaleen.png',
      linkedin: 'linkedin.com/in/muhammad-mursaleen-7a7655261'
    },
  ]

  return (
    <section className='container mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:-mb-44 lg:-mb-34 '>
      <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='relative group overflow-hidden rounded-3xl w-full aspect-square bg-gray-100 flex items-center justify-center'
          >
            {/* Image */}
            <Image
              src={member.image}
              alt={`insta-${index}`}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-110 border-solid-deep-slate/80'
            />

            {/* Hover Overlay */}
            <Link href={member.linkedin} target='_blank'>
              <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center'>
                <Image
                  src='/images/insta/icons8-linkedin-30.png'
                  alt='linkedin'
                  width={36}
                  height={36}
                />
              </div>
            </Link>
            <div className='absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-deep-slate/80 transition-all duration-300 pointer-events-none'></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Insta