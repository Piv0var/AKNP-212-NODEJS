BEGIN
  FOR i IN 1..10 LOOP
    INSERT INTO alex_grades (student_id, course_id, grade)
    VALUES (i, i + 2, 12);
  END LOOP;
  COMMIT;
END;
/
 
SELECT * FROM ALEX_STUDENTS;
SELECT * FROM ALEX_COURSES;
SELECT * FROM ALEX_GRADES;

SELECT 
    s.student_id,
    s.student_name,
    c.course_name,
    t.teacher_name,
    g.grade
FROM 
    ALEX_STUDENTS s
JOIN 
    ALEX_GRADES g ON s.student_id = g.student_id
JOIN 
    ALEX_COURSES c ON g.course_id = c.course_id
JOIN 
    TEACHERS t ON c.teacher_id = t.teacher_id;
