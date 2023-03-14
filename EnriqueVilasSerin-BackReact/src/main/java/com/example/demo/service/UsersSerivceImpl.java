package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsersRepository;

@Service
public class UsersSerivceImpl implements UsersService {

	@Autowired
	UsersRepository usersRepo;

	@Override
	public boolean registrarUsuario(Usuario user) {

		user.setEstatus(1);
		
		Usuario uAux = usersRepo.findByUsernameAndPassword(user.getUsername(), user.getPassword());
		
		if (uAux == null) {
			
			System.out.println("usuario VALIDO - " + user);
			usersRepo.save(user);
			return true;
		}
		
		System.out.println("usuario NO VALIDO - " + uAux);
		return false;
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
