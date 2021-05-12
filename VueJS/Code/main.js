var app = new Vue({
    el: '#app',
    data: {
        name: 'NonLa - NoN',
        product:{
            name: "NonLa",
            image: 'ZeroToOne.png',
            link: 'https://fb.com/nonlanon.vn',
            style: 'width: 100px',
            quantity: 10,
            inStock: true,
            details: [" 95% cotton + 5% spandex" , "2 Colors" , "Topic: Traditional"],
            variants: [
                {
                    id: 1,
                    v_color: "green"
                },
                {
                    id: 2,
                    v_color: "blue"
                }
            ]
        }
    }
})