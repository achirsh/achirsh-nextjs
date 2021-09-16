/**
    某些页面需要获取外部数据以进行预渲染。有两种情况，一种或两种都可能适用。

    1、页面内容取决于外部数据：使用getStaticProps
    2、页面paths取决于外部数据：使用getStaticPaths（通常还要同时使用getStaticProps）
 */

// 页面内容取决于外部数据

import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import api from '../../../lib'

type Post = {
    id: any,
    name: string,
    author: string
}

type Props = {
    posts: {
        pages: {
            total: number
        },
        items: Post[]
    }
}


const SG2Index: NextPage<Props> = (props) => {
    const { posts } = props
    const router = useRouter()

    return (
        <div>
            <h1>文章列表</h1>
            {
                posts.items.length > 0 && posts.items.map((p) => {
                    return <div key={p.id} onClick={() => {
                        router.push('/posts/SG/[id]', `/posts/SG/${p.id}`)
                    }}>
                        {p.name}
                    </div>
                })
            }
        </div>
    )
};

export default SG2Index;


export const getStaticProps: GetStaticProps = async () => {
    const posts = await api.posts.getData()
    console.log('posts', posts)
    return {
        props: {
            posts: posts.data
        }
    }
}