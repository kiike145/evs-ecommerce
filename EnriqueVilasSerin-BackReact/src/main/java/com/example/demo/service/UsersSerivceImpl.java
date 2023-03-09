package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Perfil;
import com.example.demo.model.Usuario;
import com.example.demo.repository.UsersRepository;

@Service
public class UsersSerivceImpl implements UsersService {

	@Autowired
	UsersRepository usersRepo;

	@Override
	public void registrarUsuario(Usuario u) {
		
		Perfil p = new Perfil();
		p.setId(1);
		p.setPerfil("USUARIO");
		
		System.out.println(u);
		
		u.agregar(p);
		u.setEstatus(1);
		
		usersRepo.save(u);
		
	}
	
	@Override
	public boolean findUserByUsernameAndPass(String username, String password) {
		
		Usuario u = usersRepo.findByUsernameAndPassword(username, password);
		
		if (u != null) {
			return true;
		}
		return false;
	}
}
