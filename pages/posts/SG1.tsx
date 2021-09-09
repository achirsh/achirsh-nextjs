/**
    静态生成

    如果一个页面使用了静态生成，在构建时将生成此页面对应的html文件。这意味着在生产环境中，运行'next build'时将生成
    该页面对应的HTML文件。然后，此HTML文件将在每个页面请求时被重用，还可以被CND缓存。

    在Next.js中，你可以静态生成带有或不带有数据的页面
 */ 

import React from 'react';
import { NextPage } from 'next';
import styles from './index.module.css';

type Post = {
   
}

type Props = {
    
}


const SG1Index: NextPage<Props> = (props) => {
    return <div className={styles.main}>不带数据的静态页面</div>
};

export default SG1Index;