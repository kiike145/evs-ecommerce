package com.example.demo.service;

import com.example.demo.model.Usuario;

public interface UsersService {
	void registrarUsuario(Usuario u);
	Boolean findUserByUsernameAndPass(String username , String password);
}
