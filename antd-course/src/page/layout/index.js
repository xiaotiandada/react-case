import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu; 
export default class BasicLayout extends Component {
  render() {
    const siderStyle = {minHeight: '100vh', color: 'white'}
    const siderMenuStyle = { height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}
    const headerStyle = {background: '#fff',textAlign: 'center',padding: '0'}
    const contentStyle = {margin: '24px 16px 0'}
    const contenMaintStyle = { padding: 24, background: '#fff', minHeight: 360 }
    const footerStyle = {textAlign: 'center'}
    return(
      <Layout>
      <Sider
        width={256}
        style = {siderStyle}>
          <div style={siderMenuStyle}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <Link to="/helloworld">
              <Icon type="pie-chart" />
              <span>Helloworld</span>
            </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
               <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      <Layout>
        <Header style= {headerStyle}>Header</Header>
        <Content style={contentStyle}>
        <div style={contenMaintStyle}>
          {this.props.children}
        </div>
        </Content>
        <Footer style={footerStyle}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    )
  }
  
}

