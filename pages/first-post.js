import Link from 'next/link'

export default function FirstPost() {
  return (
    <h1 className='title'>
      Learn more about love{' '}
      <Link href='https://nextjs.org'>
        <a>I love you bb</a>
      </Link>
    </h1>
  )
}
