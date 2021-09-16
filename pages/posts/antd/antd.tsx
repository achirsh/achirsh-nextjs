import React from 'react';
import Head from 'next/head'
import List from './list'
import Layout from '../../../components/layout'
import { NextPage, GetServerSideProps } from 'next'
import api from '../../../lib'

type Props = {

}

const AntdPage: NextPage<Props> = (props) => {

    return (
        <Layout 
            Head={<Head><title>antd样式</title></Head>}
            child={<List />} 
        />
    )
}

export default AntdPage;