$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/API_Empregado-Controller.feature");
formatter.feature({
  "name": "Realizar testes de API - https://inm-test-app.herokuapp.com",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@APIEmpregadoController"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que seja acessado a API - Inmetrics - Empregado Controller",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.queSejaAcessadoAAPIInmetricsEmpregadoController()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "001 API - Empregados Controller - Verificar Permiss�o",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@APIEmpregadoController"
    },
    {
      "name": "@VerificarPermissaoAcessoAPI"
    }
  ]
});
formatter.step({
  "name": "ao acessar nao informar o login e senha",
  "keyword": "Mas "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.aoAcessarNaoInformarOLoginESenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve retornoar o status code \u003d 401",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.oSistemaDeveRetornoarOStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que seja acessado a API - Inmetrics - Empregado Controller",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.queSejaAcessadoAAPIInmetricsEmpregadoController()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "002 API - Empregados Controller - Listar Empregados",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@APIEmpregadoController"
    },
    {
      "name": "@ListarTodosEmpregados"
    }
  ]
});
formatter.step({
  "name": "listar usuario cadastrados via GET Empregado Controller",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.listarUsuarioCadastradosViaGETEmpregadoController()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve retornoar o status code \u003d 200",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.oSistemaDeveRetornoarOStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que seja acessado a API - Inmetrics - Empregado Controller",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.queSejaAcessadoAAPIInmetricsEmpregadoController()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "003 API - Cadastrar Novo Empregado",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@APIEmpregadoController"
    },
    {
      "name": "@CadastrarUsuario"
    }
  ]
});
formatter.step({
  "name": "digitar todas as informacoes do Empregado",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.digitarTodasAsInformacoesDoEmpregado()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e but was \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:237)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:492)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:125)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$4.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:133)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat restTestes.API_EmpregadoControler.adicionarEmpregadoComSucesso(API_EmpregadoControler.java:121)\r\n\tat stepsDefinitions.API_Empregados_Steps.digitarTodasAsInformacoesDoEmpregado(API_Empregados_Steps.java:34)\r\n\tat ✽.digitar todas as informacoes do Empregado(file:///C:/Users/Stefanini/Documents/Desafio/Teste_API_Controler/src/main/resources/features/API_Empregado-Controller.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "o sistema deve retornoar o status code \u003d 201",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.oSistemaDeveRetornoarOStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que seja acessado a API - Inmetrics - Empregado Controller",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.queSejaAcessadoAAPIInmetricsEmpregadoController()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "004 API - Listar Ultimo Empregado Cadastrado",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@APIEmpregadoController"
    },
    {
      "name": "@ListarUsuarioCadastrado"
    }
  ]
});
formatter.step({
  "name": "verificar o ultimo empregado cadastrado",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.verificarOUltimoEmpregadoCadastrado()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c202\u003e but was \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:492)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:125)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$4.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:133)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat restTestes.API_EmpregadoControler.listaUltimoEmpregadoCadastrado(API_EmpregadoControler.java:153)\r\n\tat stepsDefinitions.API_Empregados_Steps.verificarOUltimoEmpregadoCadastrado(API_Empregados_Steps.java:45)\r\n\tat ✽.verificar o ultimo empregado cadastrado(file:///C:/Users/Stefanini/Documents/Desafio/Teste_API_Controler/src/main/resources/features/API_Empregado-Controller.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "o sistema deve retornoar o status code \u003d 200",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.oSistemaDeveRetornoarOStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que seja acessado a API - Inmetrics - Empregado Controller",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.queSejaAcessadoAAPIInmetricsEmpregadoController()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "005 API - Empregados Controller - Editar nome empregado por ID",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@APIEmpregadoController"
    },
    {
      "name": "@EditarNomeEmpregadoPorID"
    }
  ]
});
formatter.step({
  "name": "e editar o nome do empregado de ID \"148\" para o nome \"Novo Nome Alterado\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.eEditarONomeDoEmpregadoDeIDParaONome(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c202\u003e but was \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:492)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:125)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$4.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:133)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat restTestes.API_EmpregadoControler.buscarRegistroEmpregadoId(API_EmpregadoControler.java:70)\r\n\tat stepsDefinitions.API_Empregados_Steps.eEditarONomeDoEmpregadoDeIDParaONome(API_Empregados_Steps.java:39)\r\n\tat ✽.e editar o nome do empregado de ID \"148\" para o nome \"Novo Nome Alterado\"(file:///C:/Users/Stefanini/Documents/Desafio/Teste_API_Controler/src/main/resources/features/API_Empregado-Controller.feature:31)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "o sistema deve retornoar o status code \u003d 200",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.API_Empregados_Steps.oSistemaDeveRetornoarOStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
});