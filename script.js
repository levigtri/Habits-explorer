// registros na memória
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

// registrou na memória um evento de click
button.addEventListener("click", add)
// sempre que o botão for clicado ele vai registrar a mudança com o save, para salvar a data no localstorage do navegador
form.addEventListener("change", save)

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert("Dia já incluso! ❌")
        return    
    }
    
    alert("Dia adicionado com Sucesso! ✔")

    nlwSetup.addDay(today)
}

// save transforma os dados em objetos para array de string
function save(){
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// transforma o array de string em objetos novamente, o OU é porquê na primeira vez o localstorage estará vazio
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()