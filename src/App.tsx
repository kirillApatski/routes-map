import { Layout, Space } from 'antd'

import { Maps } from './components/maps/maps.tsx'
import TableApp from './components/table/table.tsx'
import s from './styles/app.module.scss'

export function App() {
  const { Content, Header, Footer, Sider } = Layout

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Layout>
        <Header className={s.header}>Maps Road</Header>
        <Layout hasSider>
          <Sider className={s.asdasd} width={700}>
            <TableApp />
          </Sider>
          <Content className={s.content}>
            <Maps />
          </Content>
        </Layout>
        <Footer className={s.footer}>&copy; maps road 2023</Footer>
      </Layout>
    </Space>
  )
}
