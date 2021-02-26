package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber-report",
		   "json:target/cucumber-report/cucumber.json",
		   //"io.qameta.allure.cucumber2jvm.AllureCucumber2Jvm"
		   },
			features = "src/main/resources/features", 
			glue = {"stepsDefinitions"}, 
			snippets = SnippetType.CAMELCASE, 
			monochrome = true, 
			strict = true,  
			tags = {"@APIEmpregadoController"},
			dryRun = false)


public class Run_ListarEmpregados {



}
