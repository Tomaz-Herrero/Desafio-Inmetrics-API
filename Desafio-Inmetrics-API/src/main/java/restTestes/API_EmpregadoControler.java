package restTestes;

import static io.restassured.RestAssured.given;

import java.util.HashMap;
import java.util.Map;

import org.hamcrest.Matchers;
import org.junit.Test;

import io.restassured.http.ContentType;
import io.restassured.response.ResponseBodyExtractionOptions;
import io.restassured.response.ValidatableResponse;
import stepsDefinitions.Hooks;

public class API_EmpregadoControler extends Hooks {

private static String ID_EMPREGADO_CADASTRADO;
private static ResponseBodyExtractionOptions LISTA;
private static ValidatableResponse RESPONSE;
	
@Test
public void verificarPermissaoAcessoAPI() {
	given()
	.when()
		.get("/empregado/list_all")
	.then()
	.statusCode(401)

	;	
}

@Test
public void listarTodosEmpregados() {
	LISTA = given()
	.auth().preemptive().basic("inmetrics", "automacao")
	.when()
		.get("/empregado/list_all")
	.then()
		.log().all()
		.statusCode(200)
		.extract()
		;

	 System.out.println("----------------LISTA-----------" +LISTA.jsonPath().getList("empregadoDto"));
	
}

@Test
public void buscarRegistroEmpregadoId(String codId){
	System.out.println("BUSCANDO REGISTRO");
	  given()
		.auth().preemptive().basic("inmetrics", "automacao")
	.when()
		.contentType(ContentType.JSON)
		.get("/empregado/list/"+codId)
	.then()
		.log().all()
		.statusCode(202) //vem o código 202
		
	;
	
	System.out.println("IMPRIMINDO RESPOSTA ----------------"+RESPONSE.body("empregadoDto",Matchers.is(codId)));
}

//"LISTA.jsonPath().getList(\"empregadoDto\"))"

@Test
public void editarEmpregadoSucessoId(String id, String nome) {	
	System.out.println("EDITAR REGISTRO");
	given()
		.log().all()
		.auth().preemptive().basic("inmetrics", "automacao")
		.body("{\"nome\":\" "+nome+" \"}")
	.when()
		.put("/empregado/alterar/"+id)
	.then()
		.log().all()
		.statusCode(200)
	
	
	;
	
	System.out.println("TERMINOU DE EDITAR");
}



@Test
public void adicionarEmpregadoComSucesso() {
	Map<String, Object> params = new HashMap<String, Object>();
	params.put("admissao","21/02/2021");
	params.put("cargo","Analista de Teste");
	params.put("comissao","1.00,00");
	params.put("cpf","912.203.700-45");
	params.put("departamentoId",1); //- Na documentação está igual a 0
	params.put("nome", "Tomaz Teste API");
	params.put("salario","6.000,00");
	params.put("sexo","m");
	params.put("tipoContratacao","clt");
	 
	given()
		.auth().preemptive().basic("inmetrics", "automacao")
		.body(params)	
	.when()
		.contentType(ContentType.JSON)	
		.post("/empregado/cadastrar")	
	.then()
		//.log().all()
	.statusCode(201)
	.body("nome", Matchers.is("Tomaz Teste API"))
		;
		//Na documentação tem somente a resposata 201 Created e retorna a 202
		//(202 Accepted): A api deve ser corrigida
	}


@Test
public void caposObrigatoriosAdicionarEmpregado() {
	given()
		.auth().preemptive().basic("inmetrics", "automacao")
		.body("{}")
	.when()
		.post("/empregado/cadastrar")
	.then()
		.body("nome.size()", Matchers.is(9))
		.log().all()
		.statusCode(400)
		
		
;		
}

@Test
public void listaUltimoEmpregadoCadastrado() {
	given()
	.auth().preemptive().basic("inmetrics", "automacao")
.when()
	.get("/empregado/list/"+ID_EMPREGADO_CADASTRADO)
.then()
	.log().all()
	.statusCode(202) //vem o código 202
	.body("empregadoId", Matchers.is(148))
	;	
}
	
}
