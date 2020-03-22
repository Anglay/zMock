import React from 'react';
import {Modal,Form,Input,Tooltip } from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
      sm: { span: 7 },
    },
    wrapperCol: {
      sm: { span: 15 },
    }
};

export default (props)=>{
    const [form] = Form.useForm();
    const onFinish = () => {
        form.validateFields().then((values)=>{
            props.createProject(values)
        })
        doHide()
    }
    
    const doHide = ()=>{
        props.toggleModal(false)
    }
    return (
        <Modal
            title="新增项目"
            centered
            visible={props.isVisible}
            okText="确定"
            onOk={onFinish}
            cancelText="取消"
            onCancel={doHide}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                scrollToFirstError>
                <Form.Item
                    name="projectName"
                    label="项目名称"
                    rules={[
                        {
                            required: true,
                            message: '请输入项目名称!',
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="baseUrl"
                    label={
                        <span>
                          接口基础路径&nbsp;
                          <Tooltip title="接口基础路径为“/”开头,由字母或数字组成的，字符串如：“/shop01”，不能有多个“/”">
                            <QuestionCircleOutlined />
                          </Tooltip>
                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: '请输入接口基础路径!',
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="projectDesc"
                    label="项目描述"
                    rules={[
                        {
                            required: true,
                            message: '请输入项目描述!',
                        }
                    ]}>
                    <Input.TextArea rows={4} />
                </Form.Item>
            </Form>
        </Modal>
    )
}