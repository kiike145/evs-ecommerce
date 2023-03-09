package com.example.demo.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/list/id={id1}&id={id2}&id={id3}&id={id4}")
	public List<Articulo> listaArticulosDestacados (@PathVariable ("id1") Integer id1 , @PathVariable ("id2") Integer id2 , @PathVariable ("id3") Integer id3 , @PathVariable ("id4") Integer id4) {
		
		List<Integer> listaIds = new LinkedList<Integer>();
		
		listaIds.add(id1);
		listaIds.add(id2);
		listaIds.add(id3);
		listaIds.add(id4);
		
		return articulosService.obtenerArticulosDestacados(listaIds);
	}
	
}
