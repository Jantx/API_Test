CREATE DATABASE IF NOT EXISTS company;
USE company;

-- Crear la tabla de empleados
CREATE TABLE IF NOT EXISTS Empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    salario INT(10) DEFAULT NULL
);

-- Insertar algunos datos de ejemplo en la tabla de empleados
INSERT INTO Empleados (nombre, apellido, salario) VALUES
    ('Juan', 'Pérez', 50000),
    ('María', 'Gómez', 60000),
    ('Carlos', 'Martínez', 75000);
    
SELECT * FROM Empleados;