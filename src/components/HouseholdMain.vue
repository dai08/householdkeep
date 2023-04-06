<script setup>
  const formMessage = 'メッセージに書いてみよう'
  // const tableMessage = 'テーブルの説明'
  import Form from '@/components/Form.vue'
    // import Table from '@/components/Table.vue'
</script>

<template>
  <div class="flex">
  <div style="font-size:24px;" class="sidebar">
  サイドバー1
  </div>
  <div style="font-size:24px;" class="sidebar2">
  サイドバー2
  </div>
  <div style="font-size:18px;">
  <Form></Form>
  </div>
  </div>
</template>