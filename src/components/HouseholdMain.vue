<script setup lang="ts">
  import Form from './Form.vue';
  import Table from './Table.vue';
  import { useHouseholdStore } from '../stores/household';

  const householdstore = useHouseholdStore();

  const formMessage = '支出';
  const tableMessage = '今月の家計簿';
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
            v-on:click="householdstore.changeTab('form')"
            class="shadow-lg px-5 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
          >
            Form
          </button>
        </li>
        <li>
          <button
            v-on:click="householdstore.changeTab('table')"
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
          <span class="text-2xl">Total cost</span>
        </li>
        <li>食費　：{{ householdstore.getTotalFoodCost }}円</li>
        <li>固定費：{{ householdstore.getTotalFixedCost }}円</li>
      </ul>
    </div>

    <div class="h-full px-10 py-4">
      <!-- FormボタンとTableボタンによる画面表示切り替え -->
      <div v-if="householdstore.currentTabName === 'form'">
        <Form :formMessage="formMessage" />
      </div>
      <div v-if="householdstore.currentTabName === 'table'">
        <Table :tableMessage="tableMessage" />
      </div>
    </div>
  </div>
</template>
