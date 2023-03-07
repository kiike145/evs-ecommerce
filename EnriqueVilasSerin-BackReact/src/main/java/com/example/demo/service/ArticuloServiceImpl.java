package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Articulo;
import com.example.demo.repository.ArticuloRepository;

@Service
public class ArticuloServiceImpl implements ArticulosService {
	
	@Autowired
	ArticuloRepository articuloRepo;

	@Override
	public void guardarArticulo(Articulo articulo) {
		articuloRepo.save(articulo);
	}

	@Override
	public void borrarArticuloById(Integer id) {
		articuloRepo.deleteById(id);
	}

	@Override
	public Articulo obtenerArticuloById(Integer id) {
		
		Optional<Articulo> o = articuloRepo.findById(id);
		
		if (o.isPresent()) {
			return o.get();
		}
		
		return null;
	}

	@Override
	public List<Articulo> obtenerArticulos() {
		
		for (Articulo a : articuloRepo.findAll()) {
			System.out.println(a);
		}
		
		return articuloRepo.findAll();
	}

}
