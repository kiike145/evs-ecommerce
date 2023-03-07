package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
}
