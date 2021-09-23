import React, { useEffect } from 'react';
import Head from 'next/head'
import Chart from './chart'
import Layout from '../../../components/layout'
import dynamic from 'next/dynamic'

// const DynamicComponent = dynamic(() => import('app2/App'))
// const DynamicComponent1 = dynamic(() => import('app2'))

type Props = {

}

const AntdPage: React.FC<Props> = (props) => {
    
    useEffect(() => {
        // console.log(DynamicComponent1)
        // console.log(DynamicComponent)
    }, [])

    return (
        <Layout 
            Head={<Head><title>图表</title></Head>}
            child={
                <>
                    <Chart />
                    {/* <DynamicComponent /> */}
                </>
            } 
        />
    )
}

export default AntdPage;