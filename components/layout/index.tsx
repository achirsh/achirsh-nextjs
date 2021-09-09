import React from 'react';
import Menu from './menu';
import styles from './index.module.css';

type Props = {
    Head: any,
    child: any
}

const LayoutPage = (props: any) => {
    return (
        <div className={styles.container}>
            {props.Head}
            <Menu />   
            <div className={styles.content}>
                {props.child}
            </div>
        </div>
    )
}

export default LayoutPage