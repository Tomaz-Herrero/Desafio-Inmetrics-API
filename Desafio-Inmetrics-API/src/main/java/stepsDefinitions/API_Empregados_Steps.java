package stepsDefinitions;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Mas;
import restTestes.API_EmpregadoControler;

public class API_Empregados_Steps {

	API_EmpregadoControler ec = new API_EmpregadoControler();

	@Dado("que seja acessado a API - Inmetrics - Empregado Controller")
	public void queSejaAcessadoAAPIInmetricsEmpregadoController() {
	}

	@Entao("o sistema deve retornoar o status code = {int}")
	public void oSistemaDeveRetornoarOStatusCode(Integer intCode) {
		
	}

	@E("^listar usuario cadastrados via GET Empregado Controller$")
	public void listarUsuarioCadastradosViaGETEmpregadoController() throws Throwable {
		ec.listarTodosEmpregados();
	}

	@Mas("^ao acessar nao informar o login e senha$")
	public void aoAcessarNaoInformarOLoginESenha() throws Throwable {
		ec.verificarPermissaoAcessoAPI();
	}

	@E("^digitar todas as informacoes do Empregado$")
	public void digitarTodasAsInformacoesDoEmpregado() throws Throwable {
		ec.adicionarEmpregadoComSucesso();
	}

	@E("^e editar o nome do empregado de ID \"([^\"]*)\" para o nome \"([^\"]*)\"$")
	public void eEditarONomeDoEmpregadoDeIDParaONome(String cod, String nome) throws Throwable {
		ec.buscarRegistroEmpregadoId(cod);
		ec.editarEmpregadoSucessoId(cod, nome);
	}

	@E("^verificar o ultimo empregado cadastrado$")
	public void verificarOUltimoEmpregadoCadastrado() throws Throwable {
		ec.listaUltimoEmpregadoCadastrado();
	}



}