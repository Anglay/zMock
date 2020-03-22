import React ,{useState}from "react";
import {Link } from 'dva/router';
import {connect} from 'dva'
import {Layout,Popconfirm,Row, Col,Card,Empty,Typography,Tooltip} from 'antd';
import {ReconciliationOutlined,EyeOutlined,DeleteOutlined} from '@ant-design/icons';
import styles from "./index.less";

const ZMockMain = ({dispatch,projectList}) => {
    console.log(projectList.length)
    return (
        <Layout className={styles.zmock_content}>
            {
                projectList.length<=0?(
                    <Empty className={styles.zmock_empty} description="暂无项目~~"/>
                ):(
                    <Row gutter={16}>
                        {projectList.map((item)=>{
                            return(
                                <Col className={styles.project_col_item} span={6} key={item.id}>
                                    <Card className={styles.project_item} size="small" 
                                        title={
                                            <Typography className={styles.project_name}>
                                                <ReconciliationOutlined className={styles.project_name_logo}/>
                                                <Typography.Text className={styles.project_name_text}>{item.projectName}</Typography.Text>
                                            </Typography>
                                        }>
                                        <div className={styles.project_desc}>
                                            <Typography.Paragraph ellipsis={{ rows: 5, expandable: false }}>
                                                {item.projectDesc}
                                            </Typography.Paragraph>
                                        </div>
                                        <div className={styles.project_actions}>
                                            <Link className={styles.project_actions_item} to={`/project/${item.id}`}>
                                                <Tooltip placement="bottom" title="查看">
                                                    <EyeOutlined />
                                                </Tooltip>
                                            </Link>
                                            <Popconfirm className={styles.project_actions_item} title="确定删除该项目吗？" onConfirm={()=>console.log(item.id)}>
                                                <Tooltip placement="bottom" title="删除">
                                                    <DeleteOutlined />
                                                </Tooltip>
                                            </Popconfirm>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                )
            }
        </Layout>
    )
}

const mapStateToProps = (state) =>{
    let {zmock} = state
    console.log(zmock)
    return zmock
}

export default connect(mapStateToProps)(ZMockMain);