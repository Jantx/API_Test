CREATE DEFINER=`root`@`localhost` PROCEDURE `empleadoAddOrEdit`(
IN _id INT,
IN _nombre VARCHAR(100),
IN _apellido VARCHAR(100),
IN _salario INT(10)

)
BEGIN
		IF _id = 0 THEN 
			INSERT INTO empleados (nombre, apellido, salario) 
			VALUES (_nombre, _apellido, _salario);
			SET _id = LAST_INSERT_ID();
		ELSE
			UPDATE empleados
			SET
			nombre = _nombre,
			apellido = _apellido,
			salario = _salario
			WHERE id = _id;
		END IF;
        
        SELECT _id AS id;
END