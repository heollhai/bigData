const skipPath = {
  methods: {
    skip(path) {
      this.$router.push({ path: path });
    }
  }
};
export { skipPath };
