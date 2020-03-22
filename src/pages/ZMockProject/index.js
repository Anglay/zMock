import React from "react";
import {Link} from 'dva/router';
import {Layout,Card,Descriptions,Typography,Tooltip,Table,Input,Button,Popconfirm} from "antd";
import {ReconciliationOutlined,PlusCircleOutlined,EyeOutlined,DeleteOutlined,FormOutlined} from '@ant-design/icons';
import styles from "./index.less";

export default (props) => {
    let {id} = props.match.params
    const columns = [
        {
            title: '接口名称',
            dataIndex: 'interfaceName',
            width:150
        },
        {
            title: '接口地址',
            dataIndex: 'interfaceUrl',
            render: (text) => {
                return (
                    <Typography.Text copyable>{text}</Typography.Text>
                )
            }
        },
        {
            title: '请求类型',
            width:80,
            dataIndex: 'interfaceType'
        },
        {
            title: '接口描述',
            dataIndex: 'interfaceDesc'
        },
        {
            title: '操作',
            dataIndex: 'interfaceId',
            width:110,
            render: (text,record) => {
                return (
                    <div className={styles.zmock_table_handle}>
                        <Tooltip placement="bottom" title="查看">
                            <Link to={`/project/view/${id}/${record.interfaceId}`}>
                                <Button type="primary" size="small" icon={<EyeOutlined />}/>
                            </Link>
                        </Tooltip>
                        <Tooltip placement="bottom" title="编辑">
                            <Link to={`/project/edit/${id}/${record.interfaceId}`}>
                                <Button size="small" icon={<FormOutlined />}/>
                            </Link>
                        </Tooltip>
                        <Tooltip placement="bottom" title="删除">
                            <Popconfirm title="确定删除该项目吗？">
                                <Button size="small" icon={<DeleteOutlined />} danger/>
                            </Popconfirm>
                        </Tooltip>
                    </div>
                )
            },
        }
    ];
    const data = [
        {
            key:1,
            interfaceId:1,
            interfaceName:"即期行情查询",
            interfaceUrl:"/getSpotMarket.action",
            interfaceType:"Get",
            interfaceDesc:"查询外汇即期市场行情"
        },{
            key:2,
            interfaceId:2,
            interfaceName:"远期行情查询",
            interfaceUrl:"/getForwardMarket.action",
            interfaceType:"Get",
            interfaceDesc:"查询外汇远期行情行情"
        },{
            key:3,
            interfaceId:3,
            interfaceName:"掉期行情查询",
            interfaceUrl:"/getSwapMarket.action",
            interfaceType:"Get",
            interfaceDesc:"查询外汇掉期行情行情"
        }
    ]
    return (
        <Layout className={styles.zmock_layout}>
            <Card size="small" className={styles.zmock_card}>
                <div className={styles.zmock_card_body}>
                    <div className={styles.zmock_card_logo}>
                        <ReconciliationOutlined/>
                    </div>
                    <div className={styles.zmock_card_info}>
                        <Descriptions size="small">
                            <Descriptions.Item label={<b className={styles.zmock_card_info_name}>报价引擎</b>}><span className={styles.zmock_card_info_desc}>报价引擎介绍报价引擎介绍报价引擎介绍报价引擎介绍报价引擎介绍报价引擎介绍</span></Descriptions.Item>
                        </Descriptions>
                    </div>
                    <div className={styles.zmock_card_service}>
                        <div className={styles.zmock_card_service_item}>
                            <div className={styles.zmock_card_service_title}>接口根地址</div>
                            <div className={styles.zmock_card_service_conetnt}><Typography.Text copyable>https://www.zmock.com/mock/2c1af9d687cefcef816da6be52a54f22/test</Typography.Text></div>
                        </div>
                        <div className={styles.zmock_card_service_item}>
                            <div className={styles.zmock_card_service_title}>项目ID</div>
                            <div className={styles.zmock_card_service_conetnt}><Typography.Text>2c1af9d687cefcef816da6be52a54f22</Typography.Text></div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card size="small" className={styles.zmock_card}>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="small"
                title={()=>{
                    return (
                        <div className={styles.zmock_table_header}>
                            <Input.Search placeholder="接口名称" enterButton="查询"/>
                            <div className={styles.zmock_table_header_handle}>
                                <Tooltip placement="bottom" title="新增接口">
                                    <Link to={`/project/add/${id}`}>
                                        <PlusCircleOutlined />
                                    </Link>
                                </Tooltip>
                            </div>
                        </div>
                    )
                }}
            />
            </Card>
        </Layout>
    )
}

