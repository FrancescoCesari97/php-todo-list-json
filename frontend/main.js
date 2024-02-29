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
          this.tasks = response.data;
        });
    },
    AddTasck() {
      const nuovaTask = this.newTask;
      console.log(nuovaTask);

      // this.newTask.name = "";

      const data = {
        params: { nuovaTask },
      };

      const params = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios
        .post(
          "http://localhost/php-todo-list-json/backend/api/tasks-list.php",
          data,
          params
        )
        .then((response) => {
          console.log(response.data);
        });

      // if (!nuovaTask.name) {
      //   alert("non hai inserito");
      //   return;
      // }
      // this.tasks.push(nuovaTask);

      this.newTask.name = "";
    },
  },
  mounted() {
    this.fetchTaskList();
  },
});

app.mount("#root");

//* DIRETTIVE VUE
