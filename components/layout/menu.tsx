import React, { useState } from 'react';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import styles from './index.module.css';

type Props = {

}

type IMenu = {
    key: string,
    value: string,
    path: string
}

const { SubMenu } = Menu

const MenuPage: React.FC<Props> = (props) => {
    const router = useRouter()
    const [defaultKey, setDefaultKey] = useState(['list'])
    const menus: IMenu[] = [
        {
            key: 'list',
            value: '列表',
            path: '/posts/antd/antd'
        },
        {
            key: 'chart',
            value: '图表',
            path: '/posts/antd/echart'
        }
    ]

    const menuFn = async ({ item, key, keyPath, domEvent }: any) => {
        // setDefaultKey(keyPath)
        router.replace(key)
    }

    return (
        <Menu
            selectedKeys={defaultKey}
            mode="inline"
            theme="dark"
            className={styles.menu}
            onClick={menuFn}
        >
            {menus.map((item: IMenu) => {
                return <Menu.Item key={item.path}>
                    {item.value}
                </Menu.Item>
            })}
        </Menu>
    )
} 

export default MenuPage