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
    },
  });
</script>

<template>
<div>
<span>{{ props.formMessage }}</span>
  <p>メッセージ：</p>

<form>
  <textarea name="comment" placeholder="edit me" rows="4"></textarea><br>
  <input type="submit" value="送信"><br>
  </form>
</div>
</template>

<style scoped></style>