import { useEffect } from 'react'

import { notification } from 'antd'
import type { NotificationPlacement } from 'antd/es/notification/interface'

import { useAppSelector } from '../../../common/hooks/redux-hooks.ts'
import { getErrorCode, getErrorMessages } from '../../../redux/selectors/app-selectors.ts'
export const ErrorNotification = () => {
  const [api, contextHolder] = notification.useNotification()

  const errorMessage = useAppSelector(getErrorMessages)
  const errorCode = useAppSelector(getErrorCode)

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: errorCode,
      description: errorMessage,
      placement,
    })
  }

  useEffect(() => {
    if (errorMessage) {
      openNotification('topRight')
    }
  }, [errorMessage])

  return <>{contextHolder}</>
}
