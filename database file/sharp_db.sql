-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2017 at 04:21 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sharp_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `sharp_emp`
--

DROP TABLE IF EXISTS `sharp_emp`;
CREATE TABLE IF NOT EXISTS `sharp_emp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` text,
  `first_name` text NOT NULL,
  `middle_name` text,
  `last_name` text NOT NULL,
  `phone` int(11) NOT NULL,
  `employee_image` text NOT NULL,
  `id_type` text NOT NULL,
  `id_number` text NOT NULL,
  `id_card_image` text NOT NULL,
  `residence_address` text NOT NULL,
  `residence_location` text NOT NULL,
  `residence_direction` text NOT NULL,
  `residence_gps` text NOT NULL,
  `next_of_kin` text NOT NULL,
  `relationship` text NOT NULL,
  `phone_of_kin` text NOT NULL,
  `kin_residence` text NOT NULL,
  `kin_residence_direction` text NOT NULL,
  `date_employed` date NOT NULL,
  `job_type` text NOT NULL,
  `status` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `accounttype` text NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `firstname`, `lastname`, `username`, `password`, `accounttype`) VALUES
(1, 'jaswanth', 'suggula', 'jaswanth', 'jasu', 'Admin'),
(2, 'sai', 'krishna', 'saikrishna', 'krish', 'Admin'),
(3, 'lokesh', 'kumar', 'lokesh', 'lokh', 'Admin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
