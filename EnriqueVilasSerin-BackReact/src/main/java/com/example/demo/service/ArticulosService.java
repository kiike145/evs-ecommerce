package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Articulo;

public interface ArticulosService {

	void guardarArticulo(Articulo articulo);
	void borrarArticuloById(Integer id);
	Articulo obtenerArticuloById(Integer id);
	List<Articulo> obtenerArticulos();
	List<Articulo> obtenerArticulosDestacados(List<Integer> ids);
}
