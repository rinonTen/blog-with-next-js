import Head from 'next/head'
import FirstPost from './first-post'

export default function Home() {
  return (
    <Head>
      <div className='container'>
        <FirstPost />
      </div>
    </Head>
  )
}
