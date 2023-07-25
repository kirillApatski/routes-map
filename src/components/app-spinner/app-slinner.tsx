import { Space, Spin } from 'antd'

import s from './app-spinner.module.scss'

type SpinnerPropsType = {
  spinning: boolean
}
export const Spinner: React.FC<SpinnerPropsType> = ({ spinning }) => (
  <Space size="large" className={s.container}>
    <Spin spinning={spinning} size="large" />
  </Space>
)
