package com.example.demo.controller;

import com.example.demo.model.employee;
import com.example.demo.service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class controller {

    @Autowired
    service service;

    @GetMapping("/employee")
    public List<employee> getemployees() {
        return service.getemployees();
    }

    @GetMapping("/employee/{id}")
    public employee getemployee(@PathVariable int id) {
        return service.getemployee(id);
    }

    @PostMapping("/employee")
    public String addemployee(@RequestBody employee employee) {
        service.addemployee(employee);
        return "new employee added";
    }

    @PutMapping("/employee/{id}")
    public employee updateemployees(@PathVariable int id, @RequestBody employee employee) {
        return service.updateemployees(id, employee);
    }

    @DeleteMapping("/employee/{id}")
    public String deleteemployee(@PathVariable int id) {
        service.deleteemployee(id);
        return "employee deleted";
    }
}
