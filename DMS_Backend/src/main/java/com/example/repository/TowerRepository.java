package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.example.model.Tower;

@Repository
public interface TowerRepository extends JpaRepository<Tower, String> {
    // Add any custom query methods here if needed
//	@Query("SELECT t FROM Tower t INNER JOIN TwrData td ON t.sapid = td.id")
//    List<Tower> getTowerData();
}
