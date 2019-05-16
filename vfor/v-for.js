var example1 = new Vue({
    el: "#example-1",
    data: {
        items: [{ message: "Foo" }, { message: "Bar" }]
    }
});

var example2 = new Vue({
    el: "#example-2",
    data: {
        parentMessage: "parent",
        items: [
            {
                message: "Foo"
            },
            {
                message: "Bar"
            }
        ]
    }
});

new Vue({
    el: "#v-for-object",
    data: {
        object: {
            title: "How to do lists in Vue",
            author: "Jane Doe",
            publishedAt: "2019-05-15"
        }
    }
});
