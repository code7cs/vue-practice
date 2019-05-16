new Vue({
    el: "#app",
    data: {
        shoppingList: [
            "Milk",
            "Donuts",
            "Cookies",
            "Chocolate",
            "Peanut Butter",
            "Pepto Bismol",
            "Pepto Bismol (Chocolate flavor)",
            "Pepto Bismol (Cookie flavor)"
        ],
        key: ""
    },
    computed: {
        filterShoppingList: function() {
            // `this` points to the vm instance
            var key = this.key;
            var shoppingList = this.shoppingList;
            //在使用filter时需要注意的是，前面调用的是需要使用filter的数组，而给filter函数传入的是数组中的每个item，也就是说filter里面的函数，是每个item要去做的，并将每个结果返回。
            return shoppingList.filter(function(item) {
                return item.toLowerCase().indexOf(key.toLowerCase()) != -1;
            });
        }
    }
});
