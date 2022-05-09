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
                    done: false,
                },
                {
                    text: "controllare asta ebay",
                    done: false,
                },
            ],
        },
        methods: {

        },
    }
);