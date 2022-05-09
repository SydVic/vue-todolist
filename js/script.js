const app = new Vue (
    {
        el: "#root",
        data: {
            toDoList: [
                {
                    text: "pulire casa",
                    done: false,
                },
                {
                    text: "dare da mangiare ai pesci",
                    done: false,
                },
                {
                    text: "ritirare macchina dal meccanico",
                    done: true,
                },
                {
                    text: "controllare asta ebay",
                    done: false,
                },
            ],
        },
        methods: {
            jobDone: function(index) {
                this.toDoList[index].done = !this.toDoList[index].done;
            },
            // clicclando sulla X in html rimuove l'elemento dall'array
            removeJob: function(index) {
                this.toDoList.splice(index, 1);
            },
        },
    }
);