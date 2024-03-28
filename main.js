window.addEventListener("load", () =>{
    const loader = document.querySelector(".loader");

    document.querySelector(".loader").classList.add("loader--hidden");

    document.querySelector(".loader").addEventListener("transitionend", () =>{
        document.body.removeChild(document.querySelector(".loader"));
    });
});

function sendEmail(){
    Email.send({
        secureToken: "a765bf68-1d6b-4693-a274-9a426b3892c1",
        To : 'eduardoxaubet1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Novo Contato de Pesquisa do Formulário",
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Número de Celular: " +document.getElementById("phone").value
                + "<br> Mensagem: " + document.getElementById("message").value
    }).then(
      message => alert("Mensagem Enviada com Sucesso")
    );
}