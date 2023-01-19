console.log("vue ok ", Vue)

const app = Vue.createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        getEmails() {

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((iteam) => {

                this.emails.push(iteam.data.response)
            })

        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getEmails()
        }
    }
})


app.mount(".target")