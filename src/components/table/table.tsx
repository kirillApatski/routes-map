import { Table } from 'antd'
import { Key } from 'antd/es/table/interface'

import { createUrlCoordinates } from '../../common/helpers/create-url-coordinates.ts'
import { useAppDispatch, useAppSelector } from '../../common/hooks/redux-hooks.ts'
import { getCoordinates } from '../../redux/actions/get-coordinates.ts'
import { getRoutesRoad } from '../../redux/selectors/routes-road-selectors.ts'
import { RoutesDataType, setSelectedRow } from '../../redux/slices/routes-road.slice.ts'

import { columns } from './columns-data.tsx'

const TableApp: React.FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(getRoutesRoad)

  const handleRowSelection = (selectedRowKeys: Key[], record: RoutesDataType[]) => {
    dispatch(setSelectedRow(selectedRowKeys[0]))
    dispatch(getCoordinates(createUrlCoordinates(record[0].dots)))
  }

  return (
    <Table
      tableLayout="fixed"
      size="small"
      bordered={true}
      scroll={{ x: 'max-content' }}
      columns={columns}
      dataSource={data}
      rowSelection={{ type: 'radio', onChange: handleRowSelection }}
    />
  )
}

export default TableApp
