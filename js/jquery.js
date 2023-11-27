$(document).ready(function () {

    $("#pesquisa").click(function () {
      var valor = $("#cep").val();
      $.get(
        "https://viacep.com.br/ws/" + valor + "/json/",
        function (dados, status) {
          $("#estado").val(dados.uf);
          $("#cidade").val(dados.localidade);
          $("#bairro").val(dados.bairro);
          $("#rua").val(dados.logradouro);
        }
      );
    })
    
  });

