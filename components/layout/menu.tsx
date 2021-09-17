import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import Link from 'next/link'; 

type Props = {

}

type IChild = {
    key: string,
    value: string,
    path: string
}

type IMenu = {
    key: string,
    value: string,
    path?: string,
    child?: IChild[]
}

const { SubMenu } = Menu

const MenuPage = (props: any) => {
    const router = useRouter()
    const [path, setPath] = useState('');
    const [openKeys, setOpenKeys] = useState('')

    const menus: IMenu[] = [
        {
            key: 'ANTD',
            value: 'ANTD',
            child: [
                {
                    key: 'LIST',
                    value: '列表',
                    path: '/posts/ANTD/antd'
                },
                {
                    key: 'CHART',
                    value: '图表',
                    path: '/posts/ANTD/echart'
                },
            ]
        },
        {
            key: 'SG',
            value: '静态渲染',
            child: [
                {
                    key: 'SG1',
                    value: 'SG1',
                    path: '/posts/SG/SG1'
                }
            ]
        }
    ]

    const onOpenChange = async (keys: any) => {
        if (keys && keys.length > 0) {
            setOpenKeys(keys[1])
        }
    }

    const onSelect = async ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
        // router.push(key)
        setPath(key)
    }

    // 进页面初始化
    const init = async () => {
        let pathname = window.location.pathname;
        if (pathname) {
            setPath(pathname)
            let keys = menus.filter((x) => x.path === pathname);
            if (!keys || keys.length === 0) {   
                setOpenKeys(pathname.split('/')[2])
            }
        } 
    }

    useEffect(() => {
        init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Menu
            selectedKeys={[path]}
            openKeys={[openKeys]}
            mode="inline"
            theme="dark"
            className={styles.menu}
            onSelect={onSelect}
            onOpenChange={onOpenChange}
        >
            {menus.map((item: IMenu) => {
                if (item.child && item.child.length > 0) {
                    return <SubMenu key={item.key} title={item.value}>
                        {item.child.map((child: any) => {
                            return <Menu.Item key={child.path}>
                                <Link href={child.path}>
                                    {child.value}
                                </Link>
                            </Menu.Item>
                        })}
                    </SubMenu>
                } else {
                    return <Menu.Item key={item.path}>
                        <Link href={item.path || ''}>
                            {item.value}
                        </Link>
                    </Menu.Item>
                }
            })}
        </Menu>
    )
} 

export default MenuPage

