/**
    服务器端渲染，也被称为SSR或动态渲染

    如果页面使用的是服务器端渲染，则会在每次页面请求时重新生成页面的THML。
    要对页面使用服务器端渲染，你需要export一个名为getServerSideProps的async函数。服务器将在每次页面请求时调用此函数
    例如，假设你的某个页面需要预渲染频繁更新的数据（从外部API获取）。你就可以编写getServerSideProps获取该数据并将其传递给page
 */

import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { IncomingHttpHeaders } from 'http';
import { useRouter } from 'next/router'
import api from '../../lib'

type Props = {
   
}

const index: NextPage<Props> = (props) => {
    return (
        <div>
           
        </div>
    )
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const posts = await api.posts.getData()
    console.log('SSR', posts)
    return {
        props: {
            posts: posts.data
        }
    }
};