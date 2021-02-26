#language: pt
#encoding: UTF-8
@APIEmpregadoController
Funcionalidade: Realizar testes de API - https://inm-test-app.herokuapp.com

  Contexto: 
    Dado que seja acessado a API - Inmetrics - Empregado Controller

  @VerificarPermissaoAcessoAPI
  Cenario: 001 API - Empregados Controller - Verificar Permissão
    Mas ao acessar nao informar o login e senha
    Entao o sistema deve retornoar o status code = 401

  @ListarTodosEmpregados
  Cenario: 002 API - Empregados Controller - Listar Empregados
    E listar usuario cadastrados via GET Empregado Controller
    Entao o sistema deve retornoar o status code = 200

  @CadastrarUsuario
  Cenario: 003 API - Cadastrar Novo Empregado
    E digitar todas as informacoes do Empregado
    Entao o sistema deve retornoar o status code = 201

  @ListarUsuarioCadastrado
  Cenario: 004 API - Listar Ultimo Empregado Cadastrado
    E verificar o ultimo empregado cadastrado
    Entao o sistema deve retornoar o status code = 200

  @EditarNomeEmpregadoPorID
  Cenario: 005 API - Empregados Controller - Editar nome empregado por ID
    E e editar o nome do empregado de ID "148" para o nome "Novo Nome Alterado"
    Entao o sistema deve retornoar o status code = 200
