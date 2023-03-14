package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsersService;

@RestController
@RequestMapping(value = "/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuariosController {
	
	@Autowired
	UsersService userService;
	
	@PostMapping("/signup")
	public ResponseEntity<Usuario> registrarUsuario(@RequestBody Usuario user) {
		
		if (userService.registrarUsuario(user)) {
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Usuario> loginUsuario(@RequestBody Usuario user) {
		
		// REVISAR DEVOLCIONES: 200 + USER ENCONTRADO / 401 - NULL-ERROR
		if (userService.findUserByUsernameAndPass(user.getUsername(), user.getPassword())) {
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}
		
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	
}