<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },

      month: [],
      currentTabName: {},
      changeTab: {
        type: Function,
      },
    },
    setup(props) {
      const getBackgroundColor = (day: string) => {
        if (day == '土') {
          return '#e0f2fe';
        } else if (day == '日') {
          return '#ffe4e6';
        } else {
          return 'white';
        }
      };

      return { props, getBackgroundColor };
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
      <tr v-for="user in month" :key="user.id">
        <td class="border-r border-b" :style="{ backgroundColor: getBackgroundColor(user.dayOfWeek) }">
          <div class="m-2" @click="changeTab('form')">
            {{ user.date }}
          </div>
        </td>
        <td class="m-2 p-0 border-r border-b" :style="{ backgroundColor: getBackgroundColor(user.dayOfWeek) }">
          <div class="m-2">
            {{ user.dayOfWeek }}
          </div>
        </td>
        <td class="m-2 border-r border-b text-right">{{ user.foodCost }}</td>
        <td class="m-2 border-b text-right">{{ user.fixedCost }}</td>
      </tr>
    </table>
  </div>
</template>
