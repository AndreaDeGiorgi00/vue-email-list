
const selectTarget = document.querySelector(".target")
for(let i = 0 ; i < 10 ;i++){

    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then( (iteam) => {
        
        selectTarget.innerHTML += `<li> ${iteam.data.response}</li>`
    })

}