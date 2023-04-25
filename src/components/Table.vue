<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { DAY_OF_WEEKS } from './util/constant';
  import { useHouseholdStore } from '../stores/household';

  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const householdstore = useHouseholdStore();

      // 曜日によってテーブルの背景色を変更する関数
      const getBackgroundColor = (dayOfWeek: string): string => {
        return DAY_OF_WEEKS.find((arr) => arr.name === dayOfWeek)?.color ?? DAY_OF_WEEKS[0].color;
      };
      // 日付をクリックした際にクリックした日付がプルダウンで表示された状態でFormタグに切り替わる関数
      const changeTabAndFormData = (day: number) => {
        householdstore.changeTab('form');
        householdstore.setDay(day);
      };

      return { props, householdstore, getBackgroundColor, changeTabAndFormData };
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
      <tr v-for="day in householdstore.month" :key="day.id">
        <td class="border-r border-b cursor-pointer" :style="{ backgroundColor: getBackgroundColor(day.dayOfWeek) }">
          <div class="m-2" @click="changeTabAndFormData(day.id)">
            {{ day.date }}
          </div>
        </td>
        <td
          class="m-2 p-0 border-r border-b cursor-pointer"
          :style="{ backgroundColor: getBackgroundColor(day.dayOfWeek) }"
        >
          <div class="m-2" @click="changeTabAndFormData(day.id)">
            {{ day.dayOfWeek }}
          </div>
        </td>
        <td class="m-2 border-r border-b text-right">{{ day.foodCost }}</td>
        <td class="m-2 border-b text-right">{{ day.fixedCost }}</td>
      </tr>
    </table>
  </div>
</template>
