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
            newJob: '',
            newDone: false,
        },
        methods: {
            jobDone: function(index) {
                this.toDoList[index].done = !this.toDoList[index].done;
            },
            // clicclando sulla X in html rimuove l'elemento dall'array
            removeJob: function(index) {
                this.toDoList.splice(index, 1);
            },
            // raccogliendo i dati dall'input crea nuovo oggetto nell'array
            addNewJob: function() {
                // const newToDoJob = Object.create(this.toDoList);
                // newToDoJob.text = this.newJob;
                // newToDoJob.done = this.newDone;
                // this.toDoList.push(newToDoJob);

                // Object correzione
                const newObject = {
                    text: this.newJob,
                    done: false,
                }
                this.toDoList.push(newObject);
                this.newJob = '';
            },
        },
    }
);