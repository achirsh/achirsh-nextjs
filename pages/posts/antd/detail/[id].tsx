// 页面路径取决于外部数据

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

type Props = {
   
}

const SG2DetailIndex: NextPage<Props> = (props) => {
    return (<div>
        1
    </div>)
}

export default SG2DetailIndex

// 此函数在构建时被调用
export const getStaticPaths: GetStaticPaths = async () => {
    const posts = [
        {
            key: '1',
            id: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            id: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }
    ]

    const paths = posts.map((post: { id: any }) => ({
        params: { id: post.id },
    }))

    return { paths, fallback: false }
}

// 在构建时也会被调用
export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log(params ? params.id : '11')
    const post = {}

    // 通过props参数向页面传递博文的数据
    return { props: { post } }
}   