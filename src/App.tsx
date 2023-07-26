import { Layout, Space } from 'antd'

import { useAppSelector } from './common/hooks/redux-hooks.ts'
import { Spinner } from './components/common/app-spinner/app-slinner.tsx'
import { ErrorNotification } from './components/common/error-notification/error-notification.tsx'
import { Map } from './components/maps/map.tsx'
import TableApp from './components/table/table.tsx'
import { getLoading } from './redux/selectors/app-selectors.ts'
import s from './styles/app.module.scss'

export function App() {
  const { Content, Header, Footer, Sider } = Layout
  const loadong = useAppSelector(getLoading)

  return (
    <Space direction="vertical" className={s.space}>
      <ErrorNotification />
      <Layout>
        <Spinner spinning={loadong} />

        <Header className={s.header}>Maps Road</Header>
        <Layout className={s.layout} hasSider>
          <Sider className={s.sider} width="40%">
            <TableApp />
          </Sider>
          <Content className={s.content}>
            <Map />
          </Content>
        </Layout>
        <Footer className={s.footer}>&copy; maps road 2023</Footer>
      </Layout>
    </Space>
  )
}
