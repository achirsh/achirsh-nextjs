import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>博学谷</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"/>
      </Head>

      <main className={styles.main}>
        
      </main>


      <h1 className={styles.title}>
          <Link href="/posts/first-post"><a>first-post</a></Link>
          <br />
          <Link href="/posts/ANTD/antd"><a>antd</a></Link>
          <br />
          <Link href="/posts/SG1"><a>不带数据的静态生成</a></Link>
          <br />
          <Link href="/posts/SG2"><a>带数据的静态生成</a></Link>
          <br />
          <Link href="/posts/SSG"><a>SSG</a></Link>
          <br />
          <Link href="/posts/SSR"><a>SSR</a></Link>
        </h1>
    </div>
  )
}

React.useLayoutEffect = React.useEffect
