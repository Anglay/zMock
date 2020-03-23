import React from "react";
import {Layout,Form,Input,Select,Tooltip,Button } from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import styles from "./index.less";
import AceEditor from "react-ace";
require("ace-builds/src-noconflict/mode-json5");
require("ace-builds/src-noconflict/theme-monokai");

const buttonItemLayout = {
    wrapperCol: { span: 16, offset: 8 },
};

export default () => {
    const onChange=(newValue)=>{
        console.log("change", newValue);
    }
    const [form] = Form.useForm();
    const onFinish = async () => {
        try {
          const values = await form.validateFields();
          console.log('Success:', values);
        } catch (errorInfo) {
          console.log('Failed:', errorInfo);
        }
    };
    return (
        <Layout className={styles.zmock_content}>
            <div className={styles.zmock_nav}>
                <Form
                    layout="vertical"
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError>
                    <Form.Item
                        name="interfaceName"
                        label="接口名称"
                        rules={[
                            {
                                required: true,
                                message: '请输入接口名称!',
                            }
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="interfaceType"
                        label="请求类型"
                        rules={[
                            {
                                required: true,
                                message: '请输入请求类型!',
                            }
                        ]}>
                        <Select allowClear>
                            <Select.Option value="POST">POST</Select.Option>
                            <Select.Option value="GET">GET</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="interfaceUrl"
                        label={
                            <span>
                            Url&nbsp;
                            <Tooltip placement="right" title="接口地址必须以斜杠（“/”）开头，不能以斜杠（“/”）结尾，且不能包含空格如：“/api/:id">
                                <QuestionCircleOutlined />
                            </Tooltip>
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: '请输入Url!',
                            }
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="interfaceDesc"
                        label="接口描述"
                        rules={[
                            {
                                required: true,
                                message: '请输入接口描述!',
                            }
                        ]}>
                        <Input.TextArea rows={3} />
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className={styles.zmock_nav_ace}>
                <AceEditor
                    mode="json5"
                    theme="monokai"
                    name="UNIQUE_ID_OF_DIV"
                    fontSize="18px"
                    style={{ width: "100%", height: "100%"}}
                    onChange={onChange}
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
        </Layout>
    )
}