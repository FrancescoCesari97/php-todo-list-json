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

    //* metodo che recupera le tasks dalla api
    fetchTaskList() {
      axios.get("../backend/api/get-list.php").then((response) => {
        console.log(response.data);
        this.tasks = response.data;
      });
    },

    //* metodo che invia una nuova task alla api e ne riceve la lista aggiornata
    AddTasck() {
      // const nuovaTask = this.newTask;
      // console.log(nuovaTask);

      // this.newTask.name = "";

      const data = {
        name: this.newTask.name,
        state: false,
      };

      const params = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios
        .post("../backend/api/add-task-list.php", data, params)
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
    //* prendi la lista dalla api e visualizzala
    this.fetchTaskList();
  },
});

app.mount("#root");

//* DIRETTIVE VUE
