package core;

import io.restassured.http.ContentType;

public interface Constantes {

	//String APP_BASE_URL = "https://inmetrics:automacao@inm-test-api.herokuapp.com"; => Autenticando via url
	String APP_BASE_URL = "https://inm-test-api.herokuapp.com"; //=> N�o autenticando apra verificar permiss�o negada
	Integer APP_PORT = 443; //80 N�o precisa para http, somente por convens�o
	String APP_BASE_PATH = "";
	
	ContentType APP_CONTENT_TYPE = ContentType.JSON;
	
	Long MAX_TIMEOUT = 5000L;
}
