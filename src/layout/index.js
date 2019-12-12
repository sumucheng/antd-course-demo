import Link from 'umi/link';
import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default function BasicLayout(props) {
    return (
        <Layout>
            <Sider style={{ width: '256px', minHeight: '100vh', color: 'white' }}>
                <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }}></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key='1'>
                        <Link to="/helloworld">
                            <Icon type="pie-chart" />
                            <span>helloworld</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
                        <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key='5'>
                        <Link to="/list">
                            <Icon type="unordered-list" />
                            <span>List</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
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