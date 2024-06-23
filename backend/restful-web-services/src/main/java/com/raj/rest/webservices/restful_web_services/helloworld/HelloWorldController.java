package com.raj.rest.webservices.restful_web_services.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	//method - "Hello World"
	//URI
	//GET
		//@RequestMapping(method= RequestMethod.GET, path="/hello-world")
		@GetMapping(path="/hello-world")
		public String helloWorld() {
			return "Hello World";
		}
		@GetMapping(path="/hello-world-bean")
		public HelloWorldBean helloWorldBean() {
			//throw new RuntimeException("Some Error has happened! Contact Support at ***_***");
			
			return new HelloWorldBean("Hello World");
		}
		@GetMapping(path="/hello-world/path-variable/{name}")
		public HelloWorldBean helloWorldBean(@PathVariable String name) {
			return new HelloWorldBean(String.format("Hello World, %s", name));
		}
		
		
	
	
}
