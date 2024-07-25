<script setup lang="ts">
import { useTableViewNew } from '@/composables/useTableViewNew'

// const { tableData, listQuery, pageQuery, filterFormRef, resetFormAndFetch, $fetchList } =
//   useTableView<OperatorTableItemType>({
//     listQuery: createListQuery,
//     listApi: getOperators,
//     requestHandler(pQuery, lQuery) {
//       // TODO: request 컨버팅
//       const params = toRaw(lQuery)
//       return Object.assign(
//         {},
//         {
//           page: pQuery.page,
//           size: pQuery.size
//         },
//         filterNonEmptyQueryParamsDeep(params)
//       )
//     },
//     responseHandler: (res: any) => {
//       // TODO: response 컨버팅
//       const list: never[] = []
//       return {
//         list,
//         total: res.totCnt
//       }
//     }
//   })

const obj = useTableViewNew({})

console.log('성공', obj)
</script>

<template>
  <div class="about">1</div>
</template>

<style></style>
