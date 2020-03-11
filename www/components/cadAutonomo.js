

$(document).on("click","#ButtonPreto",function(){

    var parametros={
      "nomeAut":$("#nome").val(),
      "sobrenomeAut":$("#sobrenome").val(),
       "cpfAut":$("#CPF").val(),
       "emailAut":$("#email").val(),
       "telefoneAut":$("#telefone").val()
    };
    $.ajax({
      type: post,
      url:"https://tcc3ds2.000webhostapp.com/cadastroAutonomo.php",

    data: parametros,
    success: function(data){
    navigator.notification.alert(data);

    $("nomeAut").val("");
    $("sobrenomeAut").val("");
    $("cpfAut").val("");
    $("emailAut").val("");
    $("telefoneAut").val("");
      },
   error: function(data){
   navigator.notification.alert("Erro ao cadastrar");
    }
 })
});



