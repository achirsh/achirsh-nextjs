/**
    静态生成

    如果一个页面使用了静态生成，在构建时将生成此页面对应的html文件。这意味着在生产环境中，运行'next build'时将生成
    该页面对应的HTML文件。然后，此HTML文件将在每个页面请求时被重用，还可以被CND缓存。

    在Next.js中，你可以静态生成带有或不带有数据的页面
 */ 

import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Layout from '../../../components/layout'
import Head from 'next/head'
import { message } from 'antd'

type Post = {
   
}

type Props = {
    
}


const SG1Index: NextPage<Props> = (props) => {

    useEffect(() => {
        message.info(1)
    }, [])

    return (
        <Layout 
            Head={<Head><title>SG1</title></Head>}
            child={<div>不带数据的静态页面</div>} 
        />
    )
};

export default SG1Index;