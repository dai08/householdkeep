<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { ref } from 'vue';
  import { COST_TYPE } from './util/constant';
  import { useHouseholdStore } from '../stores/household';

  const cost = ref('食費');
  const price = ref(0);

  export default defineComponent({
    props: {
      formMessage: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const householdstore = useHouseholdStore();

      // フォームで選択または入力した日付、コスト、価格をテーブルに反映させ、タブをテーブルにしつつフォームデータを初期化する
      const setData = (cost: string) => {
        if (cost === '食費') {
          householdstore.setDataFoodCost();
        } else if (cost === '固定費') {
          householdstore.setDataFixedCost();
        }
        householdstore.changeTab('table');
        householdstore.setInitialData();
      };

      return { props, cost, price, setData, COST_TYPE, householdstore };
    },
  });
</script>

<template>
  <div>
    <span class="m-1">{{ props.formMessage }}</span>
    <br />
    <!-- 日付、費用種類の選択及び値段の入力フォーム -->
    <select
      class="w-20 my-2 bg-white border border-gray-400 hover:border-gray-500 rounded shadow focus:shadow-outline"
      v-model="householdstore.date.year"
    >
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
    /
    <select
      class="w-20 bg-white border border-gray-400 hover:border-gray-500 rounded shadow focus:shadow-outline"
      v-model="householdstore.date.month"
    >
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    /
    <select
      class="w-20 bg-white border border-gray-400 hover:border-gray-500 rounded shadow focus:shadow-outline"
      v-model="householdstore.date.day"
    >
      <option v-for="i in 30" :key="i" @click="householdstore.setDay(i)">{{ i }}</option>
    </select>
    <br />
    <select
      class="w-20 text-lg my-2 bg-white border border-gray-400 hover:border-gray-500 rounded shadow focus:shadow-outline"
      v-model="cost"
    >
      <option v-for="costType in COST_TYPE" :key="costType.id">{{ costType.text }}</option>
    </select>

    <br />
    <input
      type="number"
      class="text-lg my-1 border border-gray-400 rounded"
      v-model="householdstore.price"
      name="price"
    />
    <button
      @click="setData(cost)"
      class="shadow-lg mx-1 px-2 py-1 bg-orange-400 text-lg text-white font-semibold rounded hover:bg-orange-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
    >
      反映
    </button>
  </div>
</template>

<style scoped></style>
