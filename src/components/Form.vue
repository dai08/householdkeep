<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    props: {
      formMessage: {
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
    <span>{{ props.formMessage }}</span>
    <form>
      <textarea name="comment" placeholder="edit me" rows="4" v-model="textData"></textarea><br />
      <!-- タスク2でsendMessageを実装予定 -->
      <button v-on:click="sendMessage">送信</button>
    </form><br/>
  </div>
</template>

<style scoped></style>
