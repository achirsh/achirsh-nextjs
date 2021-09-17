import 'antd/dist/antd.css'
import '../styles/antd.css'
import '../styles/globals.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Menu from '../components/layout/menu'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
     <Menu />
    <Component {...pageProps} />
  </div>
}
export default MyApp
