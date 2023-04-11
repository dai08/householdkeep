<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { reactive } from 'vue';

  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const month = reactive([
        { date: 1, dayOfWeek: '土', foodCost: 0, fixedCost: 0, id: 1 },
        { date: 2, dayOfWeek: '日', foodCost: 0, fixedCost: 0, id: 2 },
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
        { date: 15, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 15 },
        { date: 16, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 16 },
        { date: 17, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 17 },
        { date: 18, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 18 },
        { date: 19, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 19 },
        { date: 20, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 20 },
        { date: 21, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 21 },
        { date: 22, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 22 },
        { date: 23, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 23 },
        { date: 24, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 24 },
        { date: 25, dayOfWeek: '土', foodCost: null, fixedCost: null, id: 25 },
      ]);
      const getBackgroundColor = (day: string) => {
        if (day == '土') {
          return '#e0f2fe';
        } else if (day == '日') {
          return '#ffe4e6';
        } else {
          return 'white';
        }
      };

      return { props, getBackgroundColor, month };
    },
  });
</script>

<template>
  <div>
    <span>{{ props.tableMessage }}</span>
    <table>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <td class="w-20 p-2 border-r border-gray-400">日付</td>
        <td class="w-16 p-2 border-r border-gray-400">曜日</td>
        <td class="w-60 p-2 border-r border-gray-400">食費</td>
        <td class="w-60 p-2">固定費</td>
      </tr>
      <tr v-for="user in month" :key="user.id" v-bind:style="{ backgroundColor: 'getBackgroundColor(user.dayOfWeek)' }">
        <td class="border-r border-b" :style="{ backgroundColor: getBackgroundColor(user.dayOfWeek) }">
          <div class="m-2">
            {{ user.date }}
          </div>
        </td>
        <td class="m-2 p-0 border-r border-b" :style="{ backgroundColor: getBackgroundColor(user.dayOfWeek) }">
          <div class="m-2">
            {{ user.dayOfWeek }}
          </div>
        </td>
        <td class="m-2 border-r border-b">{{ user.foodCost }}</td>
        <td class="m-2 border-b">{{ user.fixedCost }}</td>
      </tr>
    </table>
  </div>
</template>
