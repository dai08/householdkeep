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
      return { props };
    }
  });
</script>

<template>
  <div>
    <span>{{ props.tableMessage }}</span>
    <table>
      <tr>
        <td>a</td>
        <td>a</td>
        <td>a</td>
        <td>a</td>
      </tr>
      <tr>
        <td>a</td>
        <td>a</td>
        <td>a</td>
        <td>a</td>
      </tr>
      <tr>
        <td>a</td>
        <td>a</td>
        <td>a</td>
        <td>a</td>
      </tr>
      <tr>
        <td>a</td>
        <td>a</td>
        <td>a</td>
        <td>a</td>
      </tr>
    </table>
  </div>
</template>
