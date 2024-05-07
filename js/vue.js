const { createApp } = Vue;
createApp({

    data() {
        return {
            email: [],
            isLoading: false,
        }
    },

    created() {
        
    },

    methods: {
        generateEmail: function () {
            
            
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((risposta) => {
                    if (i < 10) {
                        this.isLoading = true;
                    }
                    console.log(this.email);
                    this.email.push(risposta.data.response);
                    this.isLoading = false;
                    
                    
                })
                this.email = []
                
            }



        }
    },

}).mount("#app")

