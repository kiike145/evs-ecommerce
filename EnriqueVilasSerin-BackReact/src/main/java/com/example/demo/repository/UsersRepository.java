package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Usuario;

public interface UsersRepository extends JpaRepository<Usuario, String> {

	Usuario findByUsernameAndPassword(String username , String password);
}
