-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2023 a las 00:51:53
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema de gestion escolar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id`, `nombre`, `descripcion`) VALUES
(1, '1er año', 'Primer año de nivel secundario'),
(2, '2do año', 'Segundo año de nivel secundario'),
(3, '3er año', 'Tercer año de nivel secundario'),
(4, '4to año', 'Cuarto año de nivel secundario'),
(5, '5to año', 'Quinto año de nivel secundario'),
(7, '6to año', 'Sexto año de nivel secundario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

CREATE TABLE `estudiantes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `grado` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiantes`
--

INSERT INTO `estudiantes` (`id`, `nombre`, `edad`, `grado`) VALUES
(1, 'Julian Alvarez', 17, '5to año'),
(2, 'Camila Cabello', 15, '3er año'),
(3, 'Lorenzo Paez', 16, '4to año'),
(4, 'Manuel Jara', 17, '5to año'),
(5, 'Yuliana Gallardo', 13, '1er año'),
(6, 'Tomas Quintana', 15, '2do año'),
(9, 'Jorge Riquelme', 17, '5to año');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes_cursos`
--

CREATE TABLE `estudiantes_cursos` (
  `estudiante_id` int(11) DEFAULT NULL,
  `curso_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiantes_cursos`
--

INSERT INTO `estudiantes_cursos` (`estudiante_id`, `curso_id`) VALUES
(5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `especialidad` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id`, `nombre`, `especialidad`, `email`) VALUES
(1, 'Walter Guinoa', 'Biologia-2', 'waltercito90@gmail.com'),
(2, 'Jesica Gamboa', 'Matematica-3', 'Jessi01@gmail.com'),
(3, 'Jesica Gamboa', 'Matematica-3', 'Jessi01@gmail.com'),
(4, 'Omar Camarero', 'Lengua', 'omarciCa91@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estudiantes_cursos`
--
ALTER TABLE `estudiantes_cursos`
  ADD KEY `estudiante_id` (`estudiante_id`),
  ADD KEY `curso_id` (`curso_id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estudiantes_cursos`
--
ALTER TABLE `estudiantes_cursos`
  ADD CONSTRAINT `estudiantes_cursos_ibfk_1` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiantes` (`id`),
  ADD CONSTRAINT `estudiantes_cursos_ibfk_2` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
