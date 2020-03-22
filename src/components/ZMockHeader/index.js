import React,{useState,useEffect } from 'react';
import {Link } from 'dva/router';
import {connect} from 'dva'
import {PlusOutlined,ArrowLeftOutlined} from '@ant-design/icons';
import { Tooltip } from 'antd';
import styles from "./index.less"
import zMock from "../../assets/zMock.png"
import ZMockAddForm from "../ZMockAddForm";

const ZMockHeader = ({ dispatch, isVisible})=>{
    let [isMain,setIsMain] = useState(true);
    let [path,setPath] = useState("/");
    /**
     * 监听路有变化
     */
    const listener = ()=>{
        let {hash} = window.location;
        let hashArr = hash.split("/")
        if(hash.indexOf("/project/")>=0){
            setIsMain(false)
            //处理返回按钮的逻辑
            if (hash.indexOf("/project/view")>=0||hash.indexOf("/project/edit")>=0||hash.indexOf("/project/add")>=0) {
                setPath(`/project/${hashArr[3]}`)
            }else{
                setPath("/")
            }
        }else{
            setIsMain(true)
        }
    }
    useEffect(() => {
        listener()
        window.addEventListener('popstate', listener, false)
        return () => {
            window.removeEventListener('popstate',listener);
        };
    },[])

    const toggleModal = (isVisible)=>{
        dispatch({
            type: 'zmock/toggleProjectForm',
            isVisible: isVisible,
        });
    }

    const createProject = (projectObj)=>{
        dispatch({
            type: 'zmock/addProject',
            projectObj,
        });
    }

    return (
        <div className={styles.zmock_header}>
            <div className={styles.zmock_header_item}><img alt="zMock" src={zMock} /></div>
            <div className={styles.zmock_header_item}>
                {
                    isMain?(
                        <Tooltip placement="bottom" title='新增项目'>
                            <span className={styles.zmock_header_btn} onClick={()=>{toggleModal(true)}}><PlusOutlined/></span>
                        </Tooltip>
                    ):(
                        <Tooltip placement="bottom" title='返回'>
                            <Link to={path}>
                                <span className={styles.zmock_header_btn}><ArrowLeftOutlined /></span>
                            </Link>
                        </Tooltip>
                    )
                }
            </div>
            <ZMockAddForm isVisible={isVisible} toggleModal={toggleModal} createProject={createProject}/>
        </div>
    )
}

const mapStateToProps = (state) =>{
    let {zmock} = state
    return zmock
}

export default connect(mapStateToProps)(ZMockHeader);