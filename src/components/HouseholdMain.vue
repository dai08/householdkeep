<script setup>
  const formMessage = 'メッセージに書いてみよう'
  const tableMessage = 'テーブルの説明'
  import Form from '@/components/Form.vue'
    import Table from '@/components/Table.vue'
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
  <p>メッセージ：</p>
  <form>
  <textarea name="comment" placeholder="edit me" rows="4"></textarea><br>
  <input type="submit" value="送信"><br>
  </form>
  {{ formMessage }}<br>
    {{ tableMessage }}
  </div>
  </div>
</template>

