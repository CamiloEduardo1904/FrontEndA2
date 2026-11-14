// Formulário de contato: validação feita em JavaScript, com mensagem de erro embaixo de cada
// campo e borda em destaque, e rascunho salvo no localStorage para não perder o que foi digitado.
// Como o site é estático, nada é enviado; ao passar na validação mostramos uma confirmação.
(function () {
  "use strict";

  var CHAVE_RASCUNHO = "bolso-coletivo-rascunho-contato";
  // Campos guardados no rascunho (o aceite da LGPD não é guardado: a pessoa marca de novo).
  var CAMPOS_RASCUNHO = ["nome", "email", "telefone", "idade", "assunto", "data", "mensagem"];

  // Escolhe a mensagem de erro em português de acordo com o problema do campo.
  function mensagemDeErro(campo) {
    var v = campo.validity;
    if (v.valueMissing) {
      if (campo.type === "checkbox") return "Marque esta caixa para enviar a mensagem.";
      if (campo.tagName === "SELECT") return "Escolha um assunto.";
      return "Preencha este campo.";
    }
    if (v.typeMismatch && campo.type === "email") return "Digite um e-mail válido, como nome@email.com.";
    if (v.patternMismatch && campo.type === "tel") return "Digite o telefone com DDD, como (11) 91234-5678.";
    if (v.tooShort) return "Escreva pelo menos " + campo.minLength + " caracteres.";
    if (v.rangeUnderflow) {
      if (campo.type === "date") return "Escolha uma data a partir de " + campo.min.split("-").reverse().join("/") + ".";
      return "O valor mínimo é " + campo.min + ".";
    }
    if (v.rangeOverflow) return "O valor máximo é " + campo.max + ".";
    if (v.badInput || v.stepMismatch) return "Digite um número inteiro.";
    return "Confira este campo.";
  }

  // Cria (uma vez) o espaço da mensagem de erro e liga ao campo pelo aria-describedby,
  // para o leitor de tela ler o erro junto com o nome do campo.
  function espacoDoErro(campo) {
    var id = campo.id + "-erro";
    var erro = document.getElementById(id);
    if (!erro) {
      erro = document.createElement("span");
      erro.className = "campo__erro";
      erro.id = id;
      campo.closest(".campo").appendChild(erro);
      var descricao = campo.getAttribute("aria-describedby");
      campo.setAttribute("aria-describedby", descricao ? descricao + " " + id : id);
    }
    return erro;
  }

  // Confere um campo: mostra ou apaga a mensagem e marca o campo como inválido.
  function validarCampo(campo) {
    var valido = campo.checkValidity();
    var erro = espacoDoErro(campo);
    erro.textContent = valido ? "" : mensagemDeErro(campo);
    if (valido) {
      campo.removeAttribute("aria-invalid");
    } else {
      campo.setAttribute("aria-invalid", "true");
    }
    return valido;
  }

  function salvarRascunho(form) {
    var dados = {};
    CAMPOS_RASCUNHO.forEach(function (nome) { dados[nome] = form.elements[nome].value; });
    try {
      window.localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(dados));
    } catch (erro) {
      console.warn("Não foi possível salvar o rascunho do formulário.", erro);
    }
  }

  // Devolve true quando havia um rascunho com algo preenchido.
  function recuperarRascunho(form) {
    var dados;
    try {
      dados = JSON.parse(window.localStorage.getItem(CHAVE_RASCUNHO) || "null");
    } catch (erro) {
      return false;
    }
    if (!dados) return false;
    var achou = false;
    CAMPOS_RASCUNHO.forEach(function (nome) {
      if (typeof dados[nome] === "string" && dados[nome] !== "") {
        form.elements[nome].value = dados[nome];
        achou = true;
      }
    });
    return achou;
  }

  function apagarRascunho() {
    try {
      window.localStorage.removeItem(CHAVE_RASCUNHO);
    } catch (erro) {
      console.warn("Não foi possível apagar o rascunho do formulário.", erro);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form-contato");
    var retorno = document.getElementById("form-retorno");
    var aviso = document.getElementById("form-rascunho");
    if (!form || !retorno) return;

    // O JavaScript assume a validação; sem JS, o navegador continua validando sozinho.
    form.setAttribute("novalidate", "");
    var campos = Array.prototype.slice.call(form.querySelectorAll("input, select, textarea"));
    var tentouEnviar = false;

    if (recuperarRascunho(form) && aviso) {
      aviso.textContent = "Recuperamos o rascunho que você começou a escrever neste navegador.";
    }

    form.addEventListener("input", function (e) {
      salvarRascunho(form);
      // Depois da primeira tentativa, o erro some assim que o campo é corrigido.
      if (tentouEnviar) validarCampo(e.target);
    });
    form.addEventListener("change", function (e) {
      salvarRascunho(form);
      if (tentouEnviar) validarCampo(e.target);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      tentouEnviar = true;
      var invalidos = campos.filter(function (campo) { return !validarCampo(campo); });

      if (invalidos.length) {
        retorno.classList.add("formulario__retorno--erro");
        retorno.textContent = invalidos.length === 1
          ? "Falta corrigir 1 campo, destacado em vermelho."
          : "Falta corrigir " + invalidos.length + " campos, destacados em vermelho.";
        invalidos[0].focus();
        return;
      }

      var nome = form.elements.nome.value.trim().split(" ")[0];
      retorno.classList.remove("formulario__retorno--erro");
      retorno.textContent = "Obrigado, " + nome + "! Mensagem validada. Este é um projeto acadêmico, então ela não foi enviada de verdade.";
      apagarRascunho();
      if (aviso) aviso.textContent = "";
      tentouEnviar = false;
      form.reset();
    });
  });
})();
