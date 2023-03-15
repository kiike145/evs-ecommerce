package com.example.demo.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Articulo;
import com.example.demo.service.ArticulosService;

@RestController
@RequestMapping(value = "articulos")
@CrossOrigin(origins = "http://localhost:3000")
public class ArticulosController {
	
	@Autowired
	ArticulosService articulosService;
	
	@GetMapping("/list")
	public List<Articulo> listaArticulos() {
		return articulosService.obtenerArticulos();
	}
	
	@GetMapping("/list/home")
	public List<Articulo> listaArticulosDestacados() {
		
		List<Integer> listaIds = new LinkedList<Integer>();
		
		listaIds.add(1);
		listaIds.add(2);
		listaIds.add(3);
		listaIds.add(4);
		
		return articulosService.obtenerArticulosDestacados(listaIds);
	}
	
}
