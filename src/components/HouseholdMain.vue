<script setup>
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { ref } from 'vue';

  const formMessage = 'フォームに好きなメッセージを書いて送ってみよう';
  const tableMessage = 'テーブルの説明';

  const val = ref('form');

  const formbtn = () => (val.value = 'form');
  const tablebtn = () => (val.value = 'table');
</script>

<template>
  <div class="flex">
    <!-- 以下参考リンクよりサイドバー1のコピペ。tailwind cssの練習も兼ねて -->
    <div class="h-full px-10 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <!-- 
          h-full = height: 100% 
          overflow-y-auto 縦スクロールを有効にする     
          -->
      <ul class="space-y-2 font-medium">
        <li>
        <span class="text-2xl">Dashboard1</span>
        </li>
        <li>
        <span class="text-2xl">Kanban</span>
        </li>
        <li>
        <span class="text-2xl">Inbox</span>
        </li>
        <li>
        <span class="text-2xl">Users</span>
        </li>
      </ul>
      <!-- 
                ml = margin left 
                -->
    </div>

    <!-- 以下Dashboard2 -->
    <div class="h-full px-10 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
      <span class="text-2xl">Dashboard2</span>
    </div>

    <!-- 以下FormとTable -->
    <div class="h-full px-10 py-4">
      <button
        v-on:click="formbtn()"
        class="shadow-lg px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
      >
        Formボタン
      </button>
      <button
        v-on:click="tablebtn()"
        class="ml-4 shadow-lg px-2 py-1 bg-red-400 text-lg text-white font-semibold rounded hover:bg-red-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
      >
        Tableボタン
      </button>
      <br />
      <br />
      <div v-if="val === 'form'">
        <Form :formMessage="formMessage"></Form>
      </div>
      <div v-if="val === 'table'">
        <Table :tableMessage="tableMessage" />
      </div>
    </div>
  </div>
</template>
