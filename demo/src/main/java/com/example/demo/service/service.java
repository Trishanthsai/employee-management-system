package com.example.demo.service;

import com.example.demo.model.employee;
import com.example.demo.repo.repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class service {

    @Autowired
    repo r;

    public List<employee> getemployees() {
        return r.findAll();
    }

    public employee addemployee(employee employee) {
        return r.save(employee);
    }

    public void deleteemployee(int id) {
        r.deleteById(id);
    }

    public employee getemployee(int id) {
        return r.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }

    public employee updateemployees(int id, employee employee) {
        r.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));

        employee.setId(id);
        return r.save(employee);
    }
}
