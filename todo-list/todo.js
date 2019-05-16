Vue.component("todo-item", {
    template:
        "\
      <li>\
        {{ title }}\
        <button v-on:click=\"$emit('remove')\">Remove</button>\
      </li>\
    ",
    props: ["title"]
});

new Vue({
    el: "#todo-list-example",
    data: {
        newTodoText: "",
        todos: [
            {
                id: 1,
                title: "Do the dishes"
            },
            {
                id: 2,
                title: "Take out the trash"
            },
            {
                id: 3,
                title: "Mow the lawn"
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = "";
        }
    }
});

// list
// new Vue({
//     el: "#main",
//     data: {
//         list: [{ check: false, label: "1" }, { check: true, label: "2" }, { check: false, label: "3" }]
//     },
//     methods: {
//         setListCheck: function(idx) {
//             let check = this.list[idx].check;
//             this.list[idx].check = check === true ? false : true;
//         }
//     }
// });

new Vue({
    el: "#app",
    computed: {
        foos() {
            return this.selectedProperties.map(item => item.value);
        }
    },
    data() {
        return {
            selectedProperties: [],
            items: [
                {
                    name: "storage",
                    type: 1,
                    options: [{ id: "1", value: "64G" }, { id: "2", value: "256G" }]
                },
                {
                    name: "color",
                    type: 1,
                    options: [{ id: "3", value: "gold" }, { id: "4", value: "red" }]
                },
                {
                    name: "network",
                    type: 1,
                    options: [{ id: "5", value: "2G" }, { id: "6", value: "4G" }, { id: "7", value: "5G" }]
                },
                {
                    name: "type",
                    type: 1,
                    options: [{ id: "8", value: "normal" }, { id: "9", value: "vip" }]
                }
            ]
        };
    }
});
