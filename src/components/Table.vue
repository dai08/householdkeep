<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import type { PropType } from 'vue';
  import type { Month } from './util/types';
  import { DAY_OF_WEEKS } from './util/constant';

  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
      dayOfMonth: {
        interface: Object as PropType<{
          date: number;
          dateOfWeek: string;
          foodCost: number;
          fixedCost: number;
          id: number;
        }>,
        required: true,
      },
      month: {
        type: Array as PropType<Month[]>,
        required: true,
      },
      changeTab: {
        type: Function as PropType<(tabName: string) => void>,
        required: true,
      },
      changeFormData: {
        type: Function as PropType<(day: number) => void>,
        required: true,
      },
    },
    setup(props) {
      // 曜日によってテーブルの背景色を変更する関数
      const getBackgroundColor = (dayOfWeek: string): string => {
        return DAY_OF_WEEKS.find((arr) => arr.name === dayOfWeek)?.color ?? DAY_OF_WEEKS[0].color;
      };
      // 日付をクリックした際にクリックした日付がプルダウンで表示された状態でFormタグに切り替わる関数
      const changeTabAndFormData =(day:number)=>{
        props.changeTab('form');
        props.changeFormData(day);
      }
      return { props, getBackgroundColor, changeTabAndFormData };
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
      <tr v-for="day in month" :key="day.id">
        <td class="border-r border-b cursor-pointer" :style="{ backgroundColor: getBackgroundColor(day.dayOfWeek) }">
          <div
            class="m-2"
            @click="changeTabAndFormData(day.id)">
            {{ day.date }}
          </div>
        </td>
        <td class="m-2 p-0 border-r border-b" :style="{ backgroundColor: getBackgroundColor(day.dayOfWeek) }">
          <div class="m-2">
            {{ day.dayOfWeek }}
          </div>
        </td>
        <td class="m-2 border-r border-b text-right">{{ day.foodCost }}</td>
        <td class="m-2 border-b text-right">{{ day.fixedCost }}</td>
      </tr>
    </table>
  </div>
</template>
