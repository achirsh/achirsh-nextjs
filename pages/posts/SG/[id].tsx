// 页面路径取决于外部数据

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import api from '../../../lib'

type Post = {

}

type Props = {
    post: {
        id: string,
        article_id: string,
        name: string,
        autor: string,
        country: string
    }
}

const SG2DetailIndex: NextPage<Props> = (props) => {
    return (<div>
        <h1>{props.post.name}</h1>
        <div>{`作者${props.post.autor}`}</div>
    </div>)
}

export default SG2DetailIndex

// 此函数在构建时被调用
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await api.posts.getData()
    const posts = res.data.items


    const paths = posts.map((post: { id: any }) => ({
        params: { id: post.id },
    }))

    return { paths, fallback: false }
}

// 在构建时也会被调用
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params包含此博文的id信息
    // 如果是/posts/1，那么params.id就是1
    const res = await api.posts.getDetail(params ? params.id : null)
    const post = res.data    

    // 通过props参数向页面传递博文的数据
    return { props: { post } }
}   