import { reactive, ref } from 'vue'

import { ElMessage, type FormInstance } from 'element-plus'

export interface Pageable {
  page: number
  size: number
}

export type TableViewData<TListItem extends object> = {
  list: TListItem[]
  total: number
  loading: boolean
}

export type RequestHandler = (pageQuery: Pageable, listQuery: any) => any
export type ResponseHandler = (res: any) => { list: any[]; total: number }

export type UseTableViewProps = {
  listQuery: Function
  listApi: Function
  requestHandler: RequestHandler
  responseHandler: ResponseHandler
}

export const useTableView = <TListItem extends object>({
  listQuery: setLQ,
  listApi,
  requestHandler,
  responseHandler
}: UseTableViewProps) => {
  const filterFormRef = ref<FormInstance>()
  const tableData = reactive<TableViewData<TListItem>>({
    list: [],
    total: 0,
    loading: false
  })
  const listQuery = reactive(setLQ())
  const pageQuery = reactive<Pageable>({
    page: 1,
    size: 10
  })

  const $fetchList = async () => {
    tableData.loading = true
    try {
      const request = requestHandler(pageQuery, listQuery)
      const res = await listApi(request)
      const { list, total } = responseHandler(res)
      tableData.list = list
      tableData.total = total
    } catch (e) {
      console.error(e)
      ElMessage.error('목록 조회에 실패했습니다. ' + e)
    } finally {
      tableData.loading = false
    }
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }

  const resetFormAndFetch = () => {
    resetForm(filterFormRef.value)
    $fetchList()
  }

  return {
    tableData,
    pageQuery,
    listQuery,
    filterFormRef,
    $fetchList,
    resetFormAndFetch
  }
}
