const App = {
    data(){
        return{
            myplaceholder:'введите название заментки',
            title:'список заметок',
            inputValue:''
        }
    },
    methods:{
        inputChangeHandler() {
        console.log('inputChangeHandler', Event.target.value)
        this.inputValue
    }
  } 
} 




const app = Vue.createApp(App)
app.mount('#app')