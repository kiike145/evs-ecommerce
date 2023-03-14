package com.example.demo.service;

import com.example.demo.model.Usuario;

public interface UsersService {
	boolean registrarUsuario(Usuario u);
	boolean findUserByUsernameAndPass(String username , String password);
}
