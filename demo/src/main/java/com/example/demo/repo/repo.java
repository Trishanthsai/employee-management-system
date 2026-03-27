package com.example.demo.repo;

import com.example.demo.model.employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface repo extends JpaRepository<employee, Integer> {
}
