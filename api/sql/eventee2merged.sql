-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 18, 2021 at 10:52 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventee2`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendees`
--

DROP TABLE IF EXISTS `attendees`;
CREATE TABLE IF NOT EXISTS `attendees` (
  `userID` int(10) UNSIGNED NOT NULL,
  `eventID` int(11) UNSIGNED NOT NULL,
  `FullName` char(200) NOT NULL,
  `eventName` char(250) NOT NULL,
  `eventAttendance` char(10) NOT NULL DEFAULT 'Not Going',
  KEY `userID` (`userID`),
  KEY `eventID` (`eventID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `changelog`
--

DROP TABLE IF EXISTS `changelog`;
CREATE TABLE IF NOT EXISTS `changelog` (
  `date` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `browser` char(200) NOT NULL,
  `ip` char(15) NOT NULL,
  `action_type` char(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `changelog`
--

INSERT INTO `changelog` (`date`, `browser`, `ip`, `action_type`) VALUES
('2021-03-24 02:34:33.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'register'),
('2021-03-28 00:19:07.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'undefined'),
('2021-03-28 00:20:31.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'displayEvents'),
('2021-03-28 00:25:36.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'createEvent'),
('2021-03-28 02:47:17.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'register'),
('2021-03-28 12:27:36.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'createEvent'),
('2021-03-28 12:29:43.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'register'),
('2021-04-14 14:02:07.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', '::1', 'register');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `eventID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `eventName` char(250) NOT NULL,
  `eventDescription` text NOT NULL,
  `eventCategory` char(200) NOT NULL,
  `eventAddress` varchar(200) NOT NULL,
  `eventLocation` char(200) NOT NULL,
  `eventDate` char(15) NOT NULL,
  `eventTime` char(10) NOT NULL,
  PRIMARY KEY (`eventID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eventID`, `eventName`, `eventDescription`, `eventCategory`, `eventAddress`, `eventLocation`, `eventDate`, `eventTime`) VALUES
(1, 'Library Meetup', 'Loremjskjksjkfjds', 'Food & Drink', '676 Hjs', 'brisbane', '18 March', '11:20AM'),
(7, 'Pool', 'klsdk', 'Family', 'kdlk', 'dklkdlk', 'Mar 26, 2021', '01:00 PM'),
(16, 'Fish and Chips', 'fhjdhfhj', 'Food & Drink', 'djkfjfkjk', 'brisbane', '27 Oct', '2:00PM');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `loginID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `userID` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`loginID`),
  KEY `userID` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`loginID`, `Email`, `Password`, `userID`) VALUES
(26, 'kira@hotmail.com', 'bleh', 29),
(28, 'jessie@email.com', '$2y$10$R0sc5oRKMxwiU3pQhEx.uOFdKwnPyiaxbxfM/vNbGHXh2WNkuyIc2', 31);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `userID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `FullName` char(200) NOT NULL,
  `PhoneNumber` char(10) NOT NULL,
  `DateOfBirth` char(15) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `FullName`, `PhoneNumber`, `DateOfBirth`) VALUES
(29, 'Kira Light', '0466988766', '6 Oct 2001'),
(31, 'Jessie Pierce', '046656565', 'Mar 03, 2021');

-- --------------------------------------------------------

--
-- Table structure for table `users2`
--

DROP TABLE IF EXISTS `users2`;
CREATE TABLE IF NOT EXISTS `users2` (
  `UserID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `FullName` char(200) NOT NULL,
  `PhoneNumber` char(10) NOT NULL,
  `DateOfBirth` char(15) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `UserPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users2`
--

INSERT INTO `users2` (`UserID`, `FullName`, `PhoneNumber`, `DateOfBirth`, `Email`, `UserPassword`) VALUES
(1, 'Kira Black', '0404040404', 'Apr 22, 2021', 'kirablack@email.com', 'blah');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
