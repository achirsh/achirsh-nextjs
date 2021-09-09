import React from 'react';
import Head from 'next/head'
import List from './list'
import Layout from '../../../components/layout'

type Props = {

}

const AntdPage: React.FC<Props> = (props) => {
    return (
        <Layout 
            Head={<Head><title>antd样式</title></Head>}
            child={<List />} 
        />
    )
}

export default AntdPage;