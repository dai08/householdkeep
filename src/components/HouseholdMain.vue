<script setup>
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { ref } from 'vue';

  const formMessage = 'フォームに好きなメッセージを書いて送ってみよう';
  const tableMessage = 'テーブルの説明';

// 初期表示はformコンポーネントÏ
  const currentTabName = ref('form');

// 表示の切替を行う関数
  const changeTab = (tabName) => {
    currentTabName.value = tabName;
  };
</script>

<template>
  <div class="flex">
    <div class="h-full px-10 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
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
    </div>
    <div class="h-full px-10 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
      <span class="text-2xl">Dashboard2</span>
    </div>

    <div class="h-full px-10 py-4">
      <button
        v-on:click="changeTab('form')"
        class="shadow-lg px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
      >
        Formボタン
      </button>
      <button
        v-on:click="changeTab('table')"
        class="ml-4 shadow-lg px-2 py-1 bg-red-400 text-lg text-white font-semibold rounded hover:bg-red-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
      >
        Tableボタン
      </button>
      <br />
      <br />
      <!-- FormボタンとTableボタンによる画面表示切り替え -->
      <div v-if="currentTabName === 'form'">
        <Form :formMessage="formMessage"></Form>
      </div>
      <div v-if="currentTabName === 'table'">
        <Table :tableMessage="tableMessage" />
      </div>
    </div>
  </div>
</template>
