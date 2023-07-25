import { ColumnsType } from 'antd/es/table'

import { RoutesDataType } from '../../redux/slices/routes-road.slice.ts'

export const columns: ColumnsType<RoutesDataType> = [
  {
    title: 'Маршруты',
    dataIndex: 'name',
  },
  {
    title: 'Точка 1 (lat, lng)',
    dataIndex: 'dotsOne',
    render: (_, record) => {
      return (
        <>
          <div>{record.dots[0][0]}</div>
          <div>{record.dots[0][1]}</div>
        </>
      )
    },
  },
  {
    title: 'Точка 2 (lat, lng)',
    dataIndex: 'dotsTwo',
    render: (_, record) => {
      return (
        <>
          <div>{record.dots[1][0]}</div>
          <div>{record.dots[1][1]}</div>
        </>
      )
    },
  },
  {
    title: 'Точка 3 (lat, lng)',
    dataIndex: 'dotsThree',
    render: (_, record) => {
      return (
        <>
          <div>{record.dots[2][0]}</div>
          <div>{record.dots[2][1]}</div>
        </>
      )
    },
  },
]
