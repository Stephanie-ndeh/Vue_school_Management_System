Vue.createApp({
    data(){
        return {
            plans:['the single']
        }
    }
})
.component('plan',{
    template: '#plan-template',
    props:{
        name:{type:String,default: 'the single',required: true},
        price: Number
    }
})
.mount('#app')