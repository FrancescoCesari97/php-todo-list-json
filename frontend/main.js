//* STRUTTUTA BASE VUE

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo App",

      tasks: [],

      newTask: {
        name: "",
        state: false,
      },
    };
  },

  methods: {
    // deleteTasks(index) {
    //   this.tasks.splice(index, 1);
    // },
    // AddTasck() {
    //   const nuovaTask = { ...this.newTask };
    //   if (!nuovaTask.name) {
    //     alert("non hai inserito");
    //     return;
    //   }
    //   this.tasks.push(nuovaTask);
    //   this.newTask.name = "";
    // },
    // changeState(index) {
    //   if (this.tasks[index].state == false) {
    //     this.tasks[index].state = true;
    //   } else if (this.tasks[index].state == true) {
    //     this.tasks[index].state = false;
    //   }
    // },

    fetchTaskList() {
      axios
        .get("http://localhost/php-todo-list-json/backend/api/get-list.php")
        .then((response) => {
          console.log(response.data);
          this.todolist = response.data;
        });
    },
  },
  mounted() {
    this.fetchTaskList();
  },
});

app.mount("#root");

//* DIRETTIVE VUE
