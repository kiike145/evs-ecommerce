package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
	public void registrarUsuario(@RequestBody Usuario user) {
		System.out.println(user);
		userService.registrarUsuario(user);
	}
	
	@PostMapping("/login")
	public boolean loginUsuario(@RequestBody Usuario user) {
		System.out.println(user);
		return userService.findUserByUsernameAndPass(user.getUsername(), user.getPassword());
	}
}
