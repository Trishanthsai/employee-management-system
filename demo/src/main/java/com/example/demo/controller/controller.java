package com.example.demo.controller;

import com.example.demo.model.employee;
import com.example.demo.service.service;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class controller {

    @Autowired
    service service;

    // ✅ Normal GET all employees (no pagination)
    @GetMapping("/employee")
    public ResponseEntity<List<employee>> getemployees() {
        List<employee> list = service.getemployees();
        return ResponseEntity.ok(list);
    }

    // ✅ Pagination + Sorting
    // Example:
    // GET /employee/page?page=0&size=5&sortBy=name&direction=asc
    @GetMapping("/employee/page")
    public ResponseEntity<Page<employee>> getemployeesPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String direction
    ) {
        Page<employee> result = service.getemployeesPage(page, size, sortBy, direction);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<employee> getemployee(@PathVariable Integer id) {
        employee emp = service.getemployeeById(id);
        return ResponseEntity.ok(emp);
    }

    @PostMapping("/employee")
    public ResponseEntity<employee> addemployee(@Valid @RequestBody employee employee) {
        employee saved = service.addemployee(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<employee> updateemployees(@PathVariable Integer id, @Valid @RequestBody employee employee) {
        employee updated = service.updateemployees(id, employee);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<String> deleteemployee(@PathVariable Integer id) {
        service.deleteemployee(id);
        return ResponseEntity.ok("employee deleted");
    }
}
