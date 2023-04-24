<script setup lang="ts">
  import Form from './Form.vue';
  import Table from './Table.vue';
  import { useTableStore } from '../stores/table';

  const tablestore = useTableStore();
</script>

<template>
  <div class="flex">
    <div class="px-10 py-4 w-50 bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-5 font-medium">
        <li>
          <span class="text-2xl">Chenge tab</span>
        </li>
        <li>
          <button
            v-on:click="tablestore.changeTab('form')"
            class="shadow-lg px-5 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
          >
            Form
          </button>
        </li>
        <li>
          <button
            v-on:click="tablestore.changeTab('table')"
            class="shadow-lg px-5 py-1 bg-red-400 text-lg text-white font-semibold rounded hover:bg-red-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
          >
            Table
          </button>
        </li>
      </ul>
    </div>
    <div class="h-full px-10 py-4 w-50 bg-gray-200 dark:bg-gray-800">
      <ul class="space-y-5 font-medium">
        <li>
          <span class="text-2xl">Num cost</span>
        </li>
        <li>食費　：{{ tablestore.numFoodCost }}円</li>
        <li>固定費：{{ tablestore.numFixedCost }}円</li>
      </ul>
    </div>

    <div class="h-full px-10 py-4">
      <!-- FormボタンとTableボタンによる画面表示切り替え -->
      <div v-if="tablestore.currentTabName === 'form'">
        <Form />
      </div>
      <div v-if="tablestore.currentTabName === 'table'">
        <Table />
      </div>
    </div>
  </div>
</template>
