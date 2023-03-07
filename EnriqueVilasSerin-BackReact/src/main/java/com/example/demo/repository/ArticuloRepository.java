package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Articulo;

public interface ArticuloRepository extends JpaRepository<Articulo, Integer> {

}
