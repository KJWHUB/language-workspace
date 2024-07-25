import { reactive } from 'vue'

export interface Pageable {
  page: number
  size: number
}

export type TableViewData<TListItem extends object> = {
  list: TListItem[]
  total: number
  loading: boolean
}

type TestType = {
  id: number
  name: string
}[]
function isType(variable: any): variable is TestType {
  // 여기에 variable이 Type 타입인지 확인하는 로직
  return true
}

export function useTableViewNew({ initQuery }) {
  const tableData = reactive({
    list: [],
    total: 0,
    loading: false
  })
  const listQuery = reactive(initQuery())
  const pageQuery = reactive<Pageable>({
    page: 1,
    size: 10
  })

  const res = [
    {
      id: 1,
      name: 'test'
    }
  ]

  // 여기서 tableData.list 의 타입이 res 과 일치하도록 타입 가드 설정
  tableData.list = res
  isType(tableData.list)
  tableData.list.push({
    id: 2,
    name: 'test2'
  })

  tableData.list[0].id

  return {}
}

// =====================================================================================================================
// import { reactive, ref, UnwrapRef } from 'vue'
// import { ElMessage, type FormInstance } from 'element-plus'

// export interface Pageable {
//   page: number
//   size: number
// }

// export const useTableView = ({
//   listQuery,
//   listApi,
//   requestHandler,
//   responseHandler
// }) => {
//   type ListQuery = ReturnType<typeof listQuery>
//   type ApiResponse = Awaited<ReturnType<typeof listApi>>
//   type ListItem = ReturnType<typeof responseHandler> extends { list: (infer T)[] } ? T : never

//   const filterFormRef = ref<FormInstance>()
//   const tableData = reactive({
//     list: [] as ListItem[],
//     total: 0,
//     loading: false
//   })
//   const query = reactive(listQuery())
//   const pageQuery = reactive<Pageable>({
//     page: 1,
//     size: 10
//   })

//   const fetchList = async () => {
//     tableData.loading = true
//     try {
//       const request = requestHandler(pageQuery, query)
//       const res = await listApi(request)
//       const { list, total } = responseHandler(res)

//       // 여기서 타입 가드를 사용하여 list의 타입을 ListItem[]로 확실히 합니다.
//       if (Array.isArray(list) && list.every(item => typeof item === 'object' && item !== null)) {
//         tableData.list = list as ListItem[]
//       } else {
//         throw new Error('Invalid list data')
//       }

//       tableData.total = total
//     } catch (error) {
//       console.error('Failed to fetch list:', error)
//       ElMessage.error(`목록 조회에 실패했습니다: ${error instanceof Error ? error.message : String(error)}`)
//     } finally {
//       tableData.loading = false
//     }
//   }

//   const resetForm = (formEl: FormInstance | undefined) => {
//     if (!formEl) return
//     formEl.resetFields()
//   }

//   const resetFormAndFetch = () => {
//     resetForm(filterFormRef.value)
//     fetchList()
//   }

//   return {
//     tableData,
//     pageQuery,
//     query,
//     filterFormRef,
//     fetchList,
//     resetFormAndFetch
//   }
// }
