<script lang="ts">
  import { defineComponent, reactive } from '@vue/runtime-core';
  import { ref } from 'vue';
  import Table from '@/components/Table.vue';

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
    },
    setup(props) {
      const setDay = (day: number) => {
        date.day = day;
      };
      const setValue = (val: number) => {
        Table.month[2].foodCost = val;
      };
      return { props, date, cost, setDay, price, setValue };
    },
  });
</script>

<template>
  <div>
    <span>{{ props.formMessage }}</span>
    <br />
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
    <button @click="setValue(300)">反映</button>
    <br />
    <br />
    <p>確認用</p>
    {{ date.year }}
    {{ date.month }}
    {{ date.day }}
    {{ cost }}
    {{ price }}
  </div>
</template>

<style scoped></style>
