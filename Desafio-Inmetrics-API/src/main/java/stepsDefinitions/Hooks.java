package stepsDefinitions;

import org.hamcrest.Matchers;

import core.Constantes;
import io.cucumber.java.Before;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;


public class Hooks implements Constantes {

	@Before  
	public static void setup() {
		System.out.println("----- INICIANDO CHAMADA DE API ----");
		RestAssured.baseURI = APP_BASE_URL;
		RestAssured.port = APP_PORT;
		RestAssured.basePath = APP_BASE_PATH;
	
	//configurando requisições
	RequestSpecBuilder reqBuilder = new RequestSpecBuilder();
	reqBuilder.setContentType(APP_CONTENT_TYPE);
	RestAssured.requestSpecification = reqBuilder.build();
	
	//configurando respostas
	ResponseSpecBuilder resBuilder = new ResponseSpecBuilder();
	resBuilder.expectResponseTime(Matchers.lessThan(MAX_TIMEOUT));
	RestAssured.responseSpecification = resBuilder.build();
	
	//log somente para erros
	RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();	
	}
	


	
}
