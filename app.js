const app = Vue.createApp({
  data() {
    return {
      userTasks: [],
      currentTask: "",
      listIsVisible: true,
    };
  },
  methods: {
    addTask(task) {
      this.userTasks.push(task);
      this.currentTask = "";
    },
    removeTask(index) {
      this.userTasks.splice(index, 1);
    },
    toggleVisibility() {
      this.listIsVisible = !this.listIsVisible;
    },
  },
});
app.mount("#user-tasks");
