import React from 'react'
import '../styles/globals.css'
import 'antd/dist/antd.min.css'
import '../styles/antd.css'
import type { AppProps } from 'next/app'
import Menu from '../components/layout/menu'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
   <Menu />
    <Component {...pageProps} />
  </div>
}
export default MyApp
