Vue.createApp({
    data(){
        return{
            product:[
                {
                    id: 1,
                    title:"Artisan Electric Gooseneck Kettle",
                    price:159.00.toFixed(2),
                    image:"image/kettle3.jpg",
                    total:159.00.toFixed(2),
                },
                {
                    id: 2,
                    title:"Tiamo 450ml Stainless Steel Milk Jug",
                    price:47.90.toFixed(2),
                    image:"image/pitcher1.jpg",
                    total:47.90.toFixed(2),
                },
                {
                    id: 3,
                    title:"Hario V60 Ceramic 02 White",
                    price:21.90.toFixed(2),
                    image:"image/dripper1.jpg",
                    total:21.90.toFixed(2),
                },
            ],
            count:[],
            total:0,
            subtotl:0,
            tax:0,
            sumtotal:0,
        }
    },
    mounted(){
        for(i in this.product){
            this.count.push(1)
        }
    },
    methods:{
        addCount(index){
            if (this.count[index] >= 10) return 
            this.count[index] += 1
            this.sumTotal();
        },
        reduceCount(index) {
            if (this.count[index] <= 1) return 
            this.count[index] -= 1
            this.sumTotal()
        },
        sumTotal() {
            for(j in this.count){
                this.product[j]['total'] = 0
                this.product[j]['total'] += this.count[j] * this.product[j]['price']
                  this.product[j]['total'] = parseFloat(this.product[j]['total']).toFixed(2)
            }
     
        },
        
        

    }
}).mount(".shopping_cart")