package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.TowerCompositeKey;
import com.example.model.TwrData;

@Repository
public interface TwrDataRepository extends JpaRepository<TwrData, TowerCompositeKey> {
    // Add any additional methods if needed
}
