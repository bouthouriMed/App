package com.evaluation.student.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evaluation.student.entities.Media;

@Repository
public interface MediaRepository extends JpaRepository<Media, Long>{

}
