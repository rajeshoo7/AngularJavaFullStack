package com.raj.rest.webservices.restful_web_services.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	
	
		@GetMapping(path="/basicauth")
		public AuthenticationBean helloWorldBean() {
			//throw new RuntimeException("Some Error has happened! Contact Support at ***_***");
			
			return new AuthenticationBean ("You are Authenticated");
		}
		
		
	
	
}
