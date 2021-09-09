import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import { NextPage } from 'next';
import styles from './index.module.css';
import { 
    Row, Col, Input, DatePicker, Button
} from 'antd';

const { RangePicker } = DatePicker;

type Props = {

}

const dateFormat = 'YYYY-MM-DD';

const ChartPage: NextPage<Props> = (props) => {
    const data1 = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
    ];
    const data2 = [
        { type: '汽车', value: 34 },
        { type: '建材家居', value: 85 },
        { type: '住宿旅游', value: 103 },
        { type: '交通运输与仓储邮政', value: 142 }
    ];


    const init = (name: string, value: string, data: any, type: string) => {
        const chart = new Chart({
            container: name,
            autoFit: true,
            width: 600,
            height: 300
        })

        chart.data(data);
        if (type === 'interval') {
            chart.interval().position(value)
        } else if (type === 'line') {
            chart.line().position(value)
        } else if (type === 'coordinate') {
            chart.coordinate().transpose();
            chart.interval().position(value)
                .size(26)
                .label(value.split("*")[1], {
                    style: { fill: '#8d8d8d' },
                    offset: 10,
                });
        }
        chart.render()
    }

    useEffect(() => {
        init('c1', 'genre*sold', data1, 'interval')
        init('c2', 'genre*sold', data1, 'line')
        init('c3', 'type*value', data2, 'coordinate')
    }, [])

    return <div>
        {/* 搜索部分 */}
        <Row gutter={24}>
            <Col span={6}>
                <RangePicker
                    format={dateFormat}
                    placeholder={['开始时间', '结束时间']}
                />
            </Col>
            <Col span={6}>
                <Button type="primary">查询</Button>
                <Button type="primary">重置</Button>
            </Col>
            
        </Row>
        <div className={styles.chartContent}>
            <div id="c1" className={styles.chartItem}></div>
            <div id="c2" className={styles.chartItem}></div>
            <div id="c3" className={styles.chartItem}></div>
        </div>
    </div>
}

export default ChartPage