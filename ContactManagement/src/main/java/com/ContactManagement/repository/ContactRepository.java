package com.ContactManagement.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.ContactManagement.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {}