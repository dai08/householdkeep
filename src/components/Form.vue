<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { ref, type PropType } from 'vue';
  import type { Month, Date } from './util/types';
  import { COST_TYPE } from './util/constant';

  const cost = ref('食費');
  const price = ref(0);

  export default defineComponent({
    props: {
      formMessage: {
        type: String,
        required: true,
      },
      date: {
        type: Object as PropType<Date>,
        required: true,
      },
      changeTab: {
        type: Function as PropType<(cost: string) => string>,
        required: true,
      },
      month: {
        type: Array as PropType<Month[]>,
        required: true,
      },
    },
    setup(props) {
      const setDay = (day: number) => {
        props.date.day = day;
      };
      // テーブルにデータを反映させ、テーブルに切替える
      const setData = (cost: string) => {
        if (cost == '食費') {
          props.month[props.date.day - 1].foodCost += price.value;
        } else if (cost == '固定費') {
          props.month[props.date.day - 1].fixedCost += price.value;
        }
        props.changeTab('table');
      };
      return { props, cost, price, setDay, setData, COST_TYPE };
    },
  });
</script>

<template>
  <div>
    <span>{{ props.formMessage }}</span>
    <br />
    <!-- 日付、費用種類の選択及び値段の入力フォーム -->
    <select class="w-20" v-model="date.year">
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
    /
    <select class="w-20" v-model="date.month">
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    /
    <select class="w-20" v-model="date.day">
      <option v-for="i in 30" :key="i" @click="setDay(i)">{{ i }}</option>
    </select>
    <br />
    <select class="w-20" v-model="cost">
      <option v-for="costType in COST_TYPE" :key="costType.id">{{ costType.text }}</option>
    </select>
    <br />
    <input type="number" v-model="price" name="price" />
    <button
      @click="setData(cost)"
      class="shadow-lg px-2 py-1 bg-orange-400 text-lg text-white font-semibold rounded hover:bg-orange-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
    >
      反映
    </button>
    <br />
    <br />
    <p>（確認用）</p>
    {{ date.year }}
    {{ date.month }}
    {{ date.day }}
    {{ cost }}
    {{ price }}
  </div>
</template>

<style scoped></style>
