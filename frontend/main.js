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
    //* metodo che recupera le tasks dalla api
    fetchTaskList() {
      axios.get("../backend/api/get-list.php").then((response) => {
        console.log(response.data);
        this.tasks = response.data;
      });
    },

    //* metodo che invia una nuova task alla api e ne riceve la lista aggiornata
    AddTasck() {
      //* i dati da postare
      const data = {
        name: this.newTask.name,
        state: false,
      };

      //* i parametri da aggiungere alla richiesta (headers e altro)
      const params = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      //* la richiesta axios per aggiungere una task
      axios
        .post("../backend/api/add-task-list.php", data, params)
        .then((response) => {
          this.tasks = response.data;
        });
    },
  },
  mounted() {
    //* prendi la lista dalla api e visualizzala
    this.fetchTaskList();
  },
});

app.mount("#root");

//* DIRETTIVE VUE
