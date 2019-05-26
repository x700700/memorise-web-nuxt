<template>
  <div class="training-edit-route">
    Edit Training id: {{ id }}
  </div>
</template>

<script>
export default {
  validate({ params }) {
    console.warn('id length=', params.id.length);
    const looksLikeId = params.id.match(/^\w[^ _-]+$/g);
    if (params.id && params.id.length === 24 && looksLikeId) {
      return true;
    } else {
      console.error('wrong id');
      return false;
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
}
</script>

<style lang="less" scoped>
.training-edit-route {
  font-size: 22px;
}
</style>
