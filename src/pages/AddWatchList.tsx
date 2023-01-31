import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Breadcrumb, 
  Layout, 
  theme, 
  Row, 
  Col, 
  Button, 
  Form, 
  Input, 
  Select, 
  Checkbox  
} from "antd";

import { addUserData } from '../redux/reducer/watchLaterSlice';
import { useAppSelector, useAppDispatch } from '../hooks/customeHooks';

const { Header, Content, Footer } = Layout;

type WatchLater = {
    name: string,
    mediaType: string,
    status?: 'checked' | 'unchecked'
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddWatchList: React.FC = () => {
  const [form] = Form.useForm();
  // const [watchLater, setWatchLater] = useState<WatchLater[]>([]);
  const watchLaterRedux = useAppSelector((state) => state.watchLater.watchLaterLists);
  const dispactch = useAppDispatch();

console.log('watchLaterRedux', watchLaterRedux);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onFinish = (values: WatchLater) => {
    // setWatchLater((prevState) => [...prevState, values]);
    dispactch(addUserData(values))
  };

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            marginRight: "24px",
            background: "rgba(255, 255, 255, 0.1)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NavLink to="/"> TrailHub</NavLink>
        </div>
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
       
        <Row justify="space-around">
          
            <Col span={12} style={{paddingRight: '10rem'}}>
              <h3>Add Watch Later Show</h3>
                <Form
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                    {...layout}
                >
                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="mediaType" label="Media Type" rules={[{ required: true }]}>
                    <Select 
                        placeholder="Select a Media Type"
                    >
                        <Select.Option value="tv">TV Show</Select.Option>
                        <Select.Option value="movie">Movie Show</Select.Option>
                        <Select.Option value="webseries">Web Series</Select.Option>
                    </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={12}>
             <h3>Watch Later List</h3>
             <div style={styles.watchList}>
             {watchLaterRedux.map((item, i) => (
                <div style={styles.contemtItem}>
                  <Checkbox>
                    <h4 style={styles.title}>{item.name}</h4>
                    <span style={styles.description}>{item.mediaType}</span>
                  </Checkbox>
                </div>
              )
             )}
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Design ©2023 Created by TrailHub
      </Footer>
    </Layout>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  watchList: {
    display: 'flex',
    width: '95%',
    justifyContent: 'space-between',
  },

  contemtItem: {
    fontWeight: 'bold',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    minWidth: '47%',
    padding: '10px',
    margin: '0 2px 10px 0',
  },
  title: {
    margin: 0,
  },
  description: {
    margin: 0,
    color: 'gray',
  }

}
export default AddWatchList;
