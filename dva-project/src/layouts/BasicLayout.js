import React from 'react';
// import { connect } from 'dva';
import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import { ContainerQuery } from 'react-container-query';
import { Layout, Menu, Icon, Card, Affix, Button, Tooltip, Breadcrumb, Input } from 'antd';
import { Link, Switch, Route } from 'dva/router';
import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

// function handleClick(e) {
//   console.log('click', e);
// }


const text = <span>返回顶部</span>;
const Search = Input.Search;
// const { Meta } = Card;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const layout = (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsed={this.state.collapsed}
          collapsible
          breakpoint="md"
          onCollapse={this.onCollapse}
          width={256}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <Link to="/">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1>Ant Design Pro</h1>
            </Link>
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Link to="/home">
                <Icon type="home" />
                <span>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>我的博客</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="github">
                <Icon type="github" />
                <span>Github</span>
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggleCollapsed}
            />
            Header
          </Header>
          <Content id="affix">
            <Card className={styles.card_head}>
              <Breadcrumb>
                <Breadcrumb.Item href="">
                  <Icon type="home" />
                  首页1
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  <Icon type="home" />
                  首页2
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Icon type="home" />
                  首页3
                </Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ textAlign: 'center' }}>
                <Search
                  placeholder="请输入搜索内容"
                  style={{ width: 522 }}
                  size="large"
                />
              </div>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{ marginTop: 20 }}
              >
                <Menu.Item>
                  <Icon />内容1
                </Menu.Item>
                <Menu.Item>
                  <Icon />内容2
                </Menu.Item>
                <Menu.Item>
                  <Icon />内容3
                </Menu.Item>
              </Menu>
            </Card>
            <Switch>
              <Route path="/home" render={() => <h1>home</h1>} />
              <Route path="/github" render={() => <h1>github</h1>} />
            </Switch>
            <QueueAnim delay={300}>
              <div key="a">依次进场</div>
              <div key="b">依次进场</div>
              <div key="c">依次进场</div>
              <div key="d">依次进场</div>
            </QueueAnim>
          </Content>
          <Footer>
            footer
            <div className={styles.copyright}>
              Copyright <Icon type="smile-o" /> 2017 Design By Chengjifeng
            </div>
          </Footer>
          <Affix offsetBottom={10}>
            <Tooltip placemetn="top" title={text}>
              <Button type="primary">
              TOP
              </Button>
            </Tooltip>
          </Affix>
        </Layout>
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}

export default BasicLayout;

