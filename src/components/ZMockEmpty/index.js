import React from "react";
import styles from "./index.less";

export default (props)=>{
    let text = props.text?props.text:"暂无数据~~"
    return (
        <div className={styles.empty_container}>
            <span className={styles.empty_text}>{text}</span>
        </div>
    )
}