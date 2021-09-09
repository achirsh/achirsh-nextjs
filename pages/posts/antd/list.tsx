import React, { useState } from 'react';
import { 
    Button, Row, Col, Input, Select, Menu, Table, 
    Pagination, Modal, Image, Timeline, Tooltip, Drawer,
    Form, Radio, DatePicker, Tabs
} from 'antd';
import styles from './index.module.css';
const { Option } = Select; 

type Props = {

}

const AntdPage: React.FC<Props> = (props) => {
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
    const [visable, setVisable] = useState(false)
    const [rowId, setRowId] = useState('')
    const [drawerVis, setDrawerVis] = useState(false)
    const [addModal, setAddModal] = useState(false)

    // 选择框
    const handleChange = () => {
        console.log(1)
    }

    // 表格查看
    const look = (name: string) => {
    //    router.push('/posts/ANTD/[id]', `/posts/ANTD/${id}`)
        setRowId(name)
        if (name === '小罗伯特·唐尼') {
            setVisable(true)
        } else {
            setDrawerVis(true)
        }
    }
 
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: '出生日期',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 80,
            // eslint-disable-next-line react/display-name
            render: (dom: any) => (
                <Button type="link" style={{ padding: 0 }} onClick={() => look(dom.name)}>查看</Button>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            id: '1',
            name: '小罗伯特·唐尼',
            date: '1965-04-04',
            age: 56,
            sex: '男',
            address: '美国纽约',
        },
        {
            key: '2',
            id: '2',
            name: 'Jim Green',
            date: '1979-01-13',
            age: 42,
            sex: '女',
            address: '新西兰',
        }
    ]

    const render = () => {
        return <div>
            <div className={styles.title}>图片</div>
            <Image.PreviewGroup>
                <Image className={styles.image} src="/1.jpg" />
                <Image className={styles.image} src="/2.jpg"/>
            </Image.PreviewGroup>
            <div className={styles.title}>介绍</div>
            <div>
                <Tooltip title="小罗伯特·唐尼（Robert Downey Jr.）">
                    <span style={{ color: 'red' }}>小罗伯特·唐尼（Robert Downey Jr.）</span>
                </Tooltip>
                ，1965年4月4日出生于美国纽约，美国演员、歌手、监制。1970年，5岁的小罗伯特·唐尼参演了个人首部电影《狗狗人生》。1985年，凭借电影《火爆小子》和《摩登保姆》崭露头角。1987年，在爱情喜剧电影《泡妞专家》中第一次担任主演。
            </div>
            <div className={styles.title}>生平</div>
            <Timeline>
                <Timeline.Item>1996年至2001年，多次因毒品问题被捕入狱</Timeline.Item>
                <Timeline.Item>1992年，主演传记电影《卓别林》，因此入围了第65届奥斯卡金像奖最佳男主角奖</Timeline.Item>
                <Timeline.Item>1987年，在爱情喜剧电影《泡妞专家》中第一次担任主演</Timeline.Item>
                <Timeline.Item>1985年，凭借电影《火爆小子》和《摩登保姆》崭露头角</Timeline.Item>
                <Timeline.Item>1970年，5岁的小罗伯特·唐尼参演了个人首部电影《狗狗人生》</Timeline.Item>
                <Timeline.Item>1965年4月4日出生于美国纽约，美国演员、歌手、监制</Timeline.Item>
            </Timeline>
        </div>
    }
 
    return <div>
        {/* 搜索部分 */}
        <Row gutter={24}>
            <Col span={2}>
                <Button type="primary" onClick={() => setAddModal(true)}>新增</Button>
            </Col>
            <Col span={6}>
                <Input placeholder="姓名" />
            </Col>
            <Col span={6}>
                <Select defaultValue="男" onChange={handleChange}>
                    <Option value="男">男</Option>
                    <Option value="女">女</Option>
                </Select>
            </Col>
            <Col span={6}>
                <DatePicker
                    format="YYYY-MM-DD"
                    placeholder="请选择时间"
                />
            </Col>
            <Col span={4} className={styles['search-col']}>
                <Button type="primary">查询</Button>
                <Button>取消</Button>
            </Col>
        </Row>
        {/*表格部分*/}
        <Table 
            columns={columns} 
            dataSource={data} 
            className={styles.table} 
            pagination={false}
        />
        <div className={styles.pagination}>
            <Pagination defaultCurrent={1} total={2} />
        </div>

        {/*弹窗*/}
        <Modal 
            title={rowId} 
            visible={visable}
            width="60%"
            style={{ top: '10px' }}
            footer={false}
            onCancel={() => setVisable(false)}
        >
            {render()}
        </Modal>
        <Drawer title={rowId} placement="right" onClose={() => setDrawerVis(false)} visible={drawerVis}>
            {render()}
        </Drawer>
        <Modal 
            title='新增' 
            visible={addModal}
            width="60%"
            style={{ top: '10px' }}
            onOk={() => setAddModal(false)}
            onCancel={() => setAddModal(false)}
            cancelText='取消'
            okText='确认'
        >
            <Form {...layout} style={{ width: '400px' }}>
                <Form.Item label="姓名">
                    <Input placeholder="请输入姓名" />
                </Form.Item>
                <Form.Item label="性别">
                    <Radio.Group onChange={() => null}>
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="出生日期">
                    <DatePicker
                        format="YYYY-MM-DD"
                        placeholder="请选择时间"
                    />
                </Form.Item>
                <Form.Item label="地址">
                    <Input placeholder="请输入地址" />
                </Form.Item>
            </Form>
        </Modal>
    </div>
}

export default AntdPage;