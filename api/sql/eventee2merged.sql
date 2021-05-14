-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 14, 2021 at 12:08 AM
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
  `Email` varchar(255) NOT NULL,
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
  `changelogID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `browser` char(200) NOT NULL,
  `ip` char(15) NOT NULL,
  `action_type` char(200) NOT NULL,
  `UserID` int(10) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`changelogID`),
  KEY `UserID` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `changelog`
--

INSERT INTO `changelog` (`changelogID`, `date`, `browser`, `ip`, `action_type`, `UserID`) VALUES
(1, '2021-03-24 02:34:33.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'register', 1),
(2, '2021-03-28 00:19:07.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'undefined', 1),
(3, '2021-03-28 00:20:31.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'displayEvents', 1),
(4, '2021-03-28 00:25:36.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'createEvent', 1),
(5, '2021-03-28 02:47:17.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'register', 1),
(6, '2021-03-28 12:27:36.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'createEvent', 1),
(7, '2021-03-28 12:29:43.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', '::1', 'register', 1),
(8, '2021-04-14 14:02:07.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', '::1', 'register', 1),
(9, '2021-04-19 03:39:09.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36', '::1', 'login_user', 1),
(10, '2021-04-27 05:50:04.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', '::1', 'createEvent', 1),
(11, '2021-04-27 05:55:16.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', '::1', 'register', 1),
(12, '2021-05-12 11:56:05.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', 1),
(13, '2021-05-13 02:50:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(14, '2021-05-13 03:20:32.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(15, '2021-05-13 03:22:02.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(16, '2021-05-13 03:22:41.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(17, '2021-05-13 03:23:46.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 2),
(18, '2021-05-13 04:12:13.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(19, '2021-05-13 04:13:03.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 2),
(20, '2021-05-13 04:19:18.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(21, '2021-05-13 04:33:21.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'register', NULL),
(22, '2021-05-13 04:37:33.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(23, '2021-05-13 04:39:05.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(24, '2021-05-13 04:39:30.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(25, '2021-05-13 04:41:33.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(26, '2021-05-13 04:42:30.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(27, '2021-05-13 04:43:14.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(28, '2021-05-13 04:43:30.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(29, '2021-05-13 04:43:53.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(30, '2021-05-13 04:44:29.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(31, '2021-05-13 04:44:52.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(32, '2021-05-13 04:45:11.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(33, '2021-05-13 04:45:15.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(34, '2021-05-13 04:46:06.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(35, '2021-05-13 04:46:10.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(36, '2021-05-13 04:46:25.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(37, '2021-05-13 04:46:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(38, '2021-05-13 04:48:41.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(39, '2021-05-13 04:49:31.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(40, '2021-05-13 04:52:33.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(41, '2021-05-13 04:56:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(42, '2021-05-13 04:57:46.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(43, '2021-05-13 05:02:10.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 2),
(44, '2021-05-13 12:02:25.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(45, '2021-05-13 12:02:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(46, '2021-05-13 12:03:28.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(47, '2021-05-13 12:14:53.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login_admin', NULL),
(48, '2021-05-13 12:16:15.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login_admin', NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eventID`, `eventName`, `eventDescription`, `eventCategory`, `eventAddress`, `eventLocation`, `eventDate`, `eventTime`) VALUES
(1, 'Library Meetup', 'Loremjskjksjkfjds', 'Food & Drink', '676 Hjs', 'brisbane', '18 March', '11:20AM'),
(7, 'Pool Meet Up', 'klsdk', 'Family', 'kdlk', 'dklkdlk', 'Mar 26, 2021', '01:00 PM'),
(16, 'Fish and Chips', 'fhjdhfhj', 'Food & Drink', 'djkfjfkjk', 'brisbane', '27 Oct', '2:00PM'),
(19, 'Sunset Watch', 'Come join for...', 'Family', 'Mt Gravatt', 'Brisbane', 'Apr 29, 2021', '04:00 PM'),
(40, 'Eat Street', 'Loksjfkjfk', 'Food & Drink', 'Eat Street', 'Brisbane', 'May 14, 2021', '06:00 PM'),
(44, 'Admin Event', 'djskdjkjd', 'Business', 'kjdjkjd', 'jkjd', 'kjdj', 'kjdk');

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
  `AccessRights` char(200) NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users2`
--

INSERT INTO `users2` (`UserID`, `FullName`, `PhoneNumber`, `DateOfBirth`, `Email`, `UserPassword`, `AccessRights`) VALUES
(1, 'Kira Black', '0404040404', 'Apr 22, 2021', 'kirablack@email.com', 'blah', 'User'),
(2, 'Blaire Carsen', '0457898887', 'Apr 14, 1995', 'blaire@admin.com', 'admin', 'Admin');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `changelog`
--
ALTER TABLE `changelog`
  ADD CONSTRAINT `fk_logUser` FOREIGN KEY (`UserID`) REFERENCES `users2` (`UserID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
