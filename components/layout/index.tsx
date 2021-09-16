import React from 'react';
import styles from './index.module.css';

type Props = {
    Head: any,
    child: any
}

const LayoutPage = (props: any) => {
    return (
        <div className={styles.container}>
            {props.Head}
            <div className={styles.content}>
                {props.child}
            </div>
        </div>
    )
}

export default LayoutPage