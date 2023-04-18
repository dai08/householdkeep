<script setup>
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { ref } from 'vue';
  import { reactive } from 'vue';

  const formMessage = '家計簿入力';
  const tableMessage = 'テーブルの説明';

  const date = reactive({
    year: 2024,
    month: 4,
    day: 1,
  });

  // 初期表示はformコンポーネントÏ
  const currentTabName = ref('form');

  // 表示の切替を行う関数
  const changeTab = (tabName) => {
    currentTabName.value = tabName;
  };

  // 日付の値を変更する関数（現状はdayのみ対象）
  const changeFormData = (day) => {
    date.day = day;
  };
  // originDay = { date: 3, dayOfWeek: '月', foodCost: null, fixedCost: null, id: 3 };
  const month = [...Array(30)].map((_, index) => ({
    date: index + 1,
    dayOfWeek: ['日', '月', '火', '水', '木', '金', '土'][index % 7],
    foodCost: null,
    fixedCost: null,
    id: index + 1,
  }));

  const DAY_OF_WEEKS = [
    {
      id: 1,
      name: '月',
      color: 'bg-gray-100',
    },
    {
      id: 2,
      name: '火',
      color: 'bg-gray-100',
    },
    {
      id: 3,
      name: '水',
      color: 'bg-gray-100',
    },
    {
      id: 4,
      name: '木',
      color: 'bg-gray-100',
    },
    {
      id: 5,
      name: '金',
      color: 'bg-gray-100',
    },
    {
      id: 6,
      name: '土',
      color: 'bg-blue-100',
    },
    {
      id: 7,
      name: '日',
      color: 'bg-red-100',
    },
  ];
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
      <!-- FormボタンとTableボタン -->
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
        <Form :formMessage="formMessage" :month="month" :date="date" :changeTab="changeTab"></Form>
      </div>
      <div v-if="currentTabName === 'table'">
        <Table
          :tableMessage="tableMessage"
          :month="month"
          :currentTabName="currentTabName"
          :changeTab="changeTab"
          :date="date"
          :changeFormData="changeFormData"
          :DAY_OF_WEEKS="DAY_OF_WEEKS"
        />
      </div>
    </div>
  </div>
</template>
