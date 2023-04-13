<script setup>
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { ref } from 'vue';
  import { reactive } from 'vue';

  const formMessage = '家計簿入力';
  const tableMessage = 'テーブルの説明';

  // 初期表示はformコンポーネントÏ
  const currentTabName = ref('form');

  // 表示の切替を行う関数
  const changeTab = (tabName) => {
    currentTabName.value = tabName;
  };

  const month = reactive([
    { date: 1, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 1 },
    { date: 2, dayOfWeek: '日', foodCost: null, fixedCost: null, id: 2 },
    { date: 3, dayOfWeek: '月', foodCost: null, fixedCost: null, id: 3 },
    { date: 4, dayOfWeek: '火', foodCost: null, fixedCost: null, id: 4 },
    { date: 5, dayOfWeek: '水', foodCost: null, fixedCost: null, id: 5 },
    { date: 6, dayOfWeek: '木', foodCost: null, fixedCost: null, id: 6 },
    { date: 7, dayOfWeek: '金', foodCost: null, fixedCost: null, id: 7 },
    { date: 8, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 8 },
    { date: 9, dayOfWeek: '日', foodCost: null, fixedCost: null, id: 9 },
    { date: 10, dayOfWeek: '月', foodCost: null, fixedCost: null, id: 10 },
    { date: 11, dayOfWeek: '火', foodCost: null, fixedCost: null, id: 11 },
    { date: 12, dayOfWeek: '水', foodCost: null, fixedCost: null, id: 12 },
    { date: 13, dayOfWeek: '木', foodCost: null, fixedCost: null, id: 13 },
    { date: 14, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 14 },
    { date: 15, dayOfWeek: '日', foodCost: null, fixedCost: null, id: 15 },
    { date: 16, dayOfWeek: '月', foodCost: null, fixedCost: null, id: 16 },
    { date: 17, dayOfWeek: '火', foodCost: null, fixedCost: null, id: 17 },
    { date: 18, dayOfWeek: '水', foodCost: null, fixedCost: null, id: 18 },
    { date: 19, dayOfWeek: '木', foodCost: null, fixedCost: null, id: 19 },
    { date: 20, dayOfWeek: '金', foodCost: null, fixedCost: null, id: 20 },
    { date: 21, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 21 },
    { date: 22, dayOfWeek: '日', foodCost: null, fixedCost: null, id: 22 },
    { date: 23, dayOfWeek: '月', foodCost: null, fixedCost: null, id: 23 },
    { date: 24, dayOfWeek: '火', foodCost: null, fixedCost: null, id: 24 },
    { date: 25, dayOfWeek: '水', foodCost: null, fixedCost: null, id: 25 },
    { date: 26, dayOfWeek: '木', foodCost: null, fixedCost: null, id: 26 },
    { date: 27, dayOfWeek: '金', foodCost: null, fixedCost: null, id: 27 },
    { date: 28, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 28 },
    { date: 29, dayOfWeek: '日', foodCost: null, fixedCost: null, id: 29 },
    { date: 30, dayOfWeek: '月', foodCost: null, fixedCost: null, id: 30 },
  ]);
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
        <Form :formMessage="formMessage" :month="month"></Form>
      </div>
      <div v-if="currentTabName === 'table'">
        <Table :tableMessage="tableMessage" :month="month" :currentTabName="currentTabName" :changeTab="changeTab" />
      </div>
    </div>
  </div>
</template>
