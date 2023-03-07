package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.Perfil;
import com.example.demo.model.Usuario;
import com.example.demo.repository.UsersRepository;

@Service
public class UsersSerivceImpl implements UsersService {

	@Autowired
	UsersRepository usersRepo;
	@Autowired
	PasswordEncoder passEncoder;

	@Override
	public void registrarUsuario(Usuario u) {
		
		System.out.println(u.getFechaRegistro());
		
		Perfil p = new Perfil();
		p.setId(1);
		p.setPerfil("USUARIO");
		
		u.agregar(p);
		u.setPassword(passEncoder.encode(u.getPassword()));
		u.setEstatus(1);
		
		System.out.println(u);
	}
	

	@ResponseBody
	public String encriptarPass(@PathVariable("pass") String pass) {
		return passEncoder.encode(pass);
	}
}