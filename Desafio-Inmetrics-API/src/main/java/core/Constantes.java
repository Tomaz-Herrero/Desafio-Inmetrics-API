package core;

import io.restassured.http.ContentType;

public interface Constantes {

	//String APP_BASE_URL = "https://inmetrics:automacao@inm-test-api.herokuapp.com"; => Autenticando via url
	String APP_BASE_URL = "https://inm-test-api.herokuapp.com"; //=> Não autenticando apra verificar permissão negada
	Integer APP_PORT = 443; //80 Não precisa para http, somente por convensão
	String APP_BASE_PATH = "";
	
	ContentType APP_CONTENT_TYPE = ContentType.JSON;
	
	Long MAX_TIMEOUT = 5000L;
}
