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
            removeJob: function(index) {
                this.toDoList.splice(index, 1);
            }
        },
    }
);