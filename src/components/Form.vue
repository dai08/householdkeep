<script lang="ts">
  import { defineComponent, reactive } from '@vue/runtime-core';
  import { ref } from 'vue';

  // ユーザーが選択した日付を値として保持。初期値は以下の通り
  const date = reactive({
    year: 2024,
    month: 4,
    day: 1,
  });

  const cost = ref('食費');
  const price = ref('0');

  export default defineComponent({
    props: {
      formMessage: {
        type: String,
        required: true,
      },
      month: {
        type: Array,
      },
    },
    setup(props) {
      const setDay = (day: number) => {
        date.day = day;
      };
      const setData = (cost: string) => {
        if (cost === '食費') {
          month[date.day - 1].foodCost += price;
        } else if (cost === '固定費') {
          month[date.day - 1].fixedCost += price;
        }
      };

      return { props, date, cost, price, setDay, setData };
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
      <option value="食費">食費</option>
      <option value="固定費">固定費</option>
    </select>
    <br />
    <input type="number" v-model.number="price" name="price" />
    <!-- 費用が食費下固定費かで出力ボタンを切替えている。ボタン一つで済むような修正必須 -->
    <button
      @click="setData()"
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
