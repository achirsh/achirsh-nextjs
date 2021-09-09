import React from 'react';
import Head from 'next/head'
import Chart from './chart'
import Layout from '../../../components/layout'

type Props = {

}

const AntdPage: React.FC<Props> = (props) => {
    return (
        <Layout 
            Head={<Head><title>图表</title></Head>}
            child={<Chart />} 
        />
    )
}

export default AntdPage;