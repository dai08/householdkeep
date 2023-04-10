<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const users = [
        { name: 'Taro', age: 20, from: 'Osaka', food: 'ラーメン', id: 1 },
        { name: 'Taro', age: 21, from: 'Osaka', food: 'ラーメン', id: 2 },
        { name: 'Taro', age: 22, from: 'Osaka', food: 'ラーメン', id: 3 },
        { name: 'Taro', age: 23, from: 'Osaka', food: 'ラーメン', id: 4 },
        { name: 'Taro', age: 20, from: 'Osaka', food: 'ラーメン', id: 5 },
        { name: 'Taro', age: 20, from: 'Osaka', food: 'ラーメン', id: 6 },
        { name: 'Taro', age: 20, from: 'Osaka', food: 'ラーメン', id: 7 },
        { name: 'Taro', age: 20, from: 'Osaka', food: 'ラーメン', id: 8 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 30, from: 'Osaka', food: 'ラーメン', id: 9 },
        { name: 'Taro', age: 40, from: 'Osaka', food: 'ラーメン', id: 9 },
      ];
      return { props, users };
    },
  });
</script>

<template>
  <div>
    <span>{{ props.tableMessage }}</span>
    <table>
      <tr>
        <td>名前</td>
        <td>年齢</td>
        <td>出身地</td>
        <td>好きな食べ物</td>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.from }}</td>
        <td>{{ user.food }}</td>
      </tr>
    </table>
  </div>
</template>
