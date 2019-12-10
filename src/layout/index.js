import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function BasicLayout(props) {
    return (
        <Layout>
            <Sider style={{ width: '256px', minHeight: '100vh', color: 'white' }}>Sider</Sider>
            <Layout>
                <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Footer</Footer>
            </Layout>
        </Layout>
    )
}