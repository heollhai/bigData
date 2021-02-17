<template>
  <div
    v-if="types"
    class="loading"
    element-loading-text="拼命加载中"
    v-loading="types"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  ></div>
</template>

<script>
export default {
  props: {
    types: {
      type: Boolean
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
