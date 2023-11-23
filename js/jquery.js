$(document).ready(function () {
  $("#cep").blur(function () {
    var valor = $(this).val();
    $.get(
      "https://viacep.com.br/ws/" + valor + "/json/",
      function (dados, status) {
        $("#estado").val(dados.uf);
        $("#cidade").val(dados.localidade);
        $("#bairro").val(dados.bairro);
        $("#rua").val(dados.logradouro);
      }
    );
  });
});
