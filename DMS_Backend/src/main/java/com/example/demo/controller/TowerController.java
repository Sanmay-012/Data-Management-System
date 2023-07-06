package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.model.Tower;
import com.example.repository.TowerRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/towers")
public class TowerController {
	
 	@Autowired
    TowerRepository towerRepository;

    @GetMapping("/getAllTowerDetails")
    public List<Tower> getAllTowers() {
        return towerRepository.findAll();
    }
    
//    @GetMapping("/getAllTowerDetailsWD")
//    public List<Tower> getTowerData() {
//        return towerRepository.getTowerData();
//    }
    
    @PostMapping("/getAllTowerDetails")
    public Tower createTower(@RequestBody Tower tower) {
		return towerRepository.save(tower);
    	
    }
    @GetMapping("/hello")
    public String hello() {
    	return "Hello";
    }
}
