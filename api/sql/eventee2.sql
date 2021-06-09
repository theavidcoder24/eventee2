-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 09, 2021 at 03:29 AM
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
  `ip` varchar(20) NOT NULL,
  `action_type` char(200) NOT NULL,
  `UserID` int(10) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`changelogID`),
  KEY `UserID` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=403 DEFAULT CHARSET=utf8mb4;

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
(18, '2021-05-13 04:12:13.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
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
(42, '2021-05-13 04:57:46.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', 1),
(77, '2021-05-14 03:32:48.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(80, '2021-05-14 03:52:03.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'register', NULL),
(86, '2021-05-14 03:59:53.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'createEvent', NULL),
(89, '2021-05-17 00:59:20.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(90, '2021-05-17 01:16:08.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 1),
(91, '2021-05-17 02:30:44.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'register', NULL),
(92, '2021-05-17 02:31:47.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'register', NULL),
(93, '2021-05-17 02:32:02.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'register', NULL),
(98, '2021-05-18 12:57:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '::1', 'login', 9),
(104, '2021-05-26 02:51:08.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(105, '2021-05-26 03:14:08.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(106, '2021-05-26 03:37:02.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(107, '2021-05-26 03:37:56.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(108, '2021-05-27 02:47:23.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(109, '2021-05-27 02:47:42.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(110, '2021-05-27 02:48:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(111, '2021-05-27 02:48:34.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(112, '2021-05-27 02:49:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(113, '2021-05-27 12:32:12.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(114, '2021-05-27 12:32:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', NULL),
(115, '2021-05-28 00:54:50.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(116, '2021-05-31 03:52:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(117, '2021-05-31 03:54:49.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(118, '2021-05-31 04:31:21.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(119, '2021-05-31 12:50:48.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(120, '2021-05-31 12:50:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(121, '2021-05-31 12:52:22.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(124, '2021-05-31 12:55:25.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(125, '2021-05-31 12:55:36.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(126, '2021-05-31 12:56:08.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(127, '2021-05-31 12:56:35.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(128, '2021-05-31 12:56:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(129, '2021-05-31 12:57:41.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(130, '2021-05-31 13:08:00.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(131, '2021-05-31 13:08:47.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(132, '2021-05-31 13:30:52.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(133, '2021-05-31 13:51:53.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(134, '2021-05-31 14:27:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(135, '2021-06-01 00:44:45.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(136, '2021-06-01 02:31:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(137, '2021-06-01 02:34:58.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(138, '2021-06-01 03:47:20.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(139, '2021-06-01 04:24:34.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(140, '2021-06-01 05:07:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 14),
(141, '2021-06-01 05:31:43.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 1),
(147, '2021-06-03 02:44:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', NULL),
(148, '2021-06-03 02:45:02.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', NULL),
(149, '2021-06-03 02:46:28.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(150, '2021-06-03 02:46:33.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(151, '2021-06-03 02:47:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(152, '2021-06-03 02:47:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(153, '2021-06-03 02:48:05.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(154, '2021-06-03 02:49:26.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(155, '2021-06-03 02:49:39.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(156, '2021-06-03 02:50:36.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=is_logged_in', NULL),
(157, '2021-06-03 02:50:38.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(158, '2021-06-03 02:50:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(159, '2021-06-03 02:51:09.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(160, '2021-06-03 02:51:30.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(161, '2021-06-03 02:55:11.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(162, '2021-06-03 02:55:58.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(163, '2021-06-03 02:56:44.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(164, '2021-06-03 02:56:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(165, '2021-06-03 02:59:07.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(166, '2021-06-03 02:59:14.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(167, '2021-06-03 02:59:26.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(168, '2021-06-03 02:59:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(169, '2021-06-03 03:00:12.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(170, '2021-06-03 03:14:14.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(171, '2021-06-03 03:14:18.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(172, '2021-06-03 03:14:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(173, '2021-06-03 03:14:57.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(174, '2021-06-03 03:15:02.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(175, '2021-06-03 03:15:04.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(176, '2021-06-03 03:22:22.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0', '127.0.0.1', 'action=adminLogin', NULL),
(177, '2021-06-03 03:22:43.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0', '127.0.0.1', 'action=logout', NULL),
(178, '2021-06-03 03:22:56.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0', '127.0.0.1', 'action=adminLogin', NULL),
(179, '2021-06-03 03:28:57.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=createEvents', NULL),
(180, '2021-06-03 03:30:32.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(181, '2021-06-03 03:36:04.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(182, '2021-06-03 03:36:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=adminLogin', NULL),
(183, '2021-06-03 03:36:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(184, '2021-06-03 03:37:14.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(185, '2021-06-03 03:38:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=adminLogin', NULL),
(186, '2021-06-03 03:38:05.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(187, '2021-06-03 03:38:24.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=adminLogin', NULL),
(188, '2021-06-03 03:44:08.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(189, '2021-06-03 03:44:24.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=adminLogin', NULL),
(190, '2021-06-03 03:44:24.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(191, '2021-06-03 03:44:34.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(192, '2021-06-03 03:48:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=adminLogin', NULL),
(193, '2021-06-03 03:49:15.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(194, '2021-06-03 03:51:50.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(195, '2021-06-03 03:52:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=adminLogin', NULL),
(196, '2021-06-03 03:58:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(197, '2021-06-03 03:59:40.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=is_logged_in', NULL),
(198, '2021-06-03 03:59:40.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(199, '2021-06-03 03:59:41.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=logout', NULL),
(200, '2021-06-03 03:59:50.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', NULL),
(201, '2021-06-03 03:59:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(202, '2021-06-03 04:00:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=displayEvents', NULL),
(203, '2021-06-03 04:00:04.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=login', NULL),
(204, '2021-06-03 04:19:58.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(205, '2021-06-03 04:21:20.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(206, '2021-06-03 04:22:12.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(207, '2021-06-03 04:23:45.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(208, '2021-06-03 04:24:07.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(209, '2021-06-03 04:24:26.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(210, '2021-06-03 04:25:45.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(211, '2021-06-03 04:26:20.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(212, '2021-06-03 04:40:46.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(213, '2021-06-03 04:41:27.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(214, '2021-06-03 04:42:00.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(215, '2021-06-03 04:42:56.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(216, '2021-06-03 04:46:04.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(217, '2021-06-03 04:48:05.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(218, '2021-06-03 04:51:22.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(219, '2021-06-03 04:57:41.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(220, '2021-06-03 04:58:13.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(221, '2021-06-03 04:58:30.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(222, '2021-06-03 05:11:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(223, '2021-06-03 05:12:46.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(224, '2021-06-03 05:16:21.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(225, '2021-06-03 05:19:18.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(226, '2021-06-03 05:28:08.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(227, '2021-06-03 05:28:53.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(228, '2021-06-03 05:33:56.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(229, '2021-06-03 05:36:39.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(230, '2021-06-03 05:36:54.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(231, '2021-06-03 05:41:13.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(232, '2021-06-03 05:56:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(233, '2021-06-03 05:58:24.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(234, '2021-06-03 05:58:40.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(235, '2021-06-03 05:58:45.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(236, '2021-06-03 05:59:07.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(237, '2021-06-03 06:07:37.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(238, '2021-06-04 01:17:56.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(239, '2021-06-04 01:24:36.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(240, '2021-06-04 01:31:11.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(241, '2021-06-04 01:38:21.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(242, '2021-06-04 01:38:44.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(243, '2021-06-04 01:48:13.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(244, '2021-06-04 01:49:42.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(245, '2021-06-04 01:56:42.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(246, '2021-06-04 01:59:25.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(247, '2021-06-04 02:08:04.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(248, '2021-06-04 02:09:47.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(249, '2021-06-04 02:14:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(250, '2021-06-04 02:19:05.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(251, '2021-06-04 02:22:57.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(252, '2021-06-04 02:28:43.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(253, '2021-06-04 03:07:26.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(254, '2021-06-04 03:07:35.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(255, '2021-06-04 03:07:45.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(256, '2021-06-04 03:07:54.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(257, '2021-06-04 03:09:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(258, '2021-06-04 03:09:29.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(259, '2021-06-04 03:10:18.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(260, '2021-06-04 03:14:31.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(261, '2021-06-04 03:14:34.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(262, '2021-06-04 03:14:49.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(263, '2021-06-04 03:14:52.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(264, '2021-06-04 03:14:53.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(265, '2021-06-04 03:15:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(266, '2021-06-04 03:15:44.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(267, '2021-06-04 03:16:15.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(268, '2021-06-04 03:16:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(269, '2021-06-04 03:16:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(270, '2021-06-04 03:16:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(271, '2021-06-04 03:16:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(272, '2021-06-04 03:16:20.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(273, '2021-06-04 03:19:17.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(274, '2021-06-04 03:19:29.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', NULL),
(275, '2021-06-04 03:20:08.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(276, '2021-06-04 03:21:53.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(277, '2021-06-04 03:24:54.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(278, '2021-06-04 03:25:22.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', NULL),
(279, '2021-06-04 03:25:52.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(280, '2021-06-04 03:30:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(281, '2021-06-04 03:36:10.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(282, '2021-06-05 09:04:24.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(283, '2021-06-05 09:06:11.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(284, '2021-06-05 09:10:57.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(285, '2021-06-05 09:11:39.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', 9),
(286, '2021-06-05 09:20:08.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(287, '2021-06-05 09:20:18.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(288, '2021-06-05 09:20:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(289, '2021-06-05 09:28:57.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(290, '2021-06-05 09:32:58.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(291, '2021-06-05 09:34:15.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(292, '2021-06-05 09:52:46.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(293, '2021-06-05 10:01:43.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(294, '2021-06-06 00:32:04.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 11),
(295, '2021-06-06 00:55:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(296, '2021-06-06 00:55:12.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(297, '2021-06-06 00:56:03.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(298, '2021-06-06 23:40:21.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(299, '2021-06-06 23:41:10.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(300, '2021-06-08 03:38:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(301, '2021-06-08 03:55:35.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(302, '2021-06-08 04:03:58.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(303, '2021-06-08 04:06:45.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(304, '2021-06-08 04:44:35.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', '127.0.0.1', 'login_admin', 9),
(305, '2021-06-08 04:54:18.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(306, '2021-06-08 07:11:57.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(307, '2021-06-08 07:30:44.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(308, '2021-06-08 07:52:57.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(309, '2021-06-08 07:53:04.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(310, '2021-06-08 08:01:16.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(311, '2021-06-08 08:01:25.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(312, '2021-06-08 08:06:31.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(313, '2021-06-08 08:07:10.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(314, '2021-06-08 08:08:42.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(315, '2021-06-08 08:18:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(316, '2021-06-08 08:18:54.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', 9),
(317, '2021-06-08 08:24:09.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(318, '2021-06-08 08:24:26.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 18),
(319, '2021-06-08 09:10:13.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 18),
(320, '2021-06-08 09:13:06.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 18),
(321, '2021-06-08 09:13:11.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 18),
(322, '2021-06-08 09:20:50.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 18),
(323, '2021-06-08 09:33:40.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 18),
(324, '2021-06-08 09:57:05.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(325, '2021-06-08 10:56:00.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(326, '2021-06-08 11:17:48.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 9),
(327, '2021-06-08 11:18:52.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(328, '2021-06-08 11:19:27.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(329, '2021-06-08 11:19:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(330, '2021-06-08 11:20:02.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(331, '2021-06-08 11:20:12.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(332, '2021-06-08 11:20:24.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(333, '2021-06-08 11:21:49.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(334, '2021-06-08 11:23:14.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(335, '2021-06-08 11:23:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(336, '2021-06-08 11:24:04.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(337, '2021-06-08 11:24:11.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(338, '2021-06-08 11:26:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(339, '2021-06-08 11:27:07.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(340, '2021-06-08 11:28:26.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(341, '2021-06-08 11:30:06.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9);
INSERT INTO `changelog` (`changelogID`, `date`, `browser`, `ip`, `action_type`, `UserID`) VALUES
(342, '2021-06-08 11:34:55.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(343, '2021-06-08 11:35:11.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(344, '2021-06-08 11:36:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 9),
(345, '2021-06-08 11:37:56.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(346, '2021-06-08 11:42:22.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 18),
(347, '2021-06-08 11:45:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 18),
(348, '2021-06-08 11:46:06.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_user', 18),
(349, '2021-06-08 11:46:22.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', 18),
(350, '2021-06-08 12:03:54.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', 18),
(351, '2021-06-08 12:28:21.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', 18),
(352, '2021-06-09 03:03:42.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', NULL),
(353, '2021-06-09 03:04:00.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', NULL),
(354, '2021-06-09 03:04:17.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateEvent', NULL),
(355, '2021-06-09 03:05:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'register', NULL),
(356, '2021-06-09 03:06:22.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 19),
(357, '2021-06-09 03:07:03.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateUser', 19),
(358, '2021-06-09 03:07:50.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'action=updateUser', 19),
(359, '2021-06-09 03:09:10.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', 19),
(360, '2021-06-09 03:10:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(361, '2021-06-09 03:10:08.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(362, '2021-06-09 03:10:21.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', NULL),
(363, '2021-06-09 03:10:34.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(364, '2021-06-09 03:10:43.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(365, '2021-06-09 03:12:28.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(366, '2021-06-09 03:12:34.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(367, '2021-06-09 03:12:40.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(368, '2021-06-09 03:12:46.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(369, '2021-06-09 03:12:51.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(370, '2021-06-09 03:12:58.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(371, '2021-06-09 03:13:06.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(372, '2021-06-09 03:21:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(373, '2021-06-09 03:21:07.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(374, '2021-06-09 03:21:13.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(375, '2021-06-09 03:21:19.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(376, '2021-06-09 03:21:26.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(377, '2021-06-09 03:21:32.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(378, '2021-06-09 03:21:37.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(379, '2021-06-09 03:21:43.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(380, '2021-06-09 03:21:48.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(381, '2021-06-09 03:21:54.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(382, '2021-06-09 03:21:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(383, '2021-06-09 03:22:34.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(384, '2021-06-09 03:22:39.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(385, '2021-06-09 03:22:44.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(386, '2021-06-09 03:23:01.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(387, '2021-06-09 03:23:06.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(388, '2021-06-09 03:23:11.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(389, '2021-06-09 03:23:16.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(390, '2021-06-09 03:23:21.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(391, '2021-06-09 03:23:26.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(392, '2021-06-09 03:23:31.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(393, '2021-06-09 03:23:36.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(394, '2021-06-09 03:23:41.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(395, '2021-06-09 03:25:16.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', 9),
(396, '2021-06-09 03:26:35.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'createEvent', 9),
(397, '2021-06-09 03:26:54.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(398, '2021-06-09 03:26:59.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(399, '2021-06-09 03:27:05.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(400, '2021-06-09 03:27:18.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(401, '2021-06-09 03:27:23.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9),
(402, '2021-06-09 03:27:56.000000', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', '::1', 'login_admin', 9);

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
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eventID`, `eventName`, `eventDescription`, `eventCategory`, `eventAddress`, `eventLocation`, `eventDate`, `eventTime`) VALUES
(1, 'Brisbane RnB Jam', 'The Brisbane RnB Jam has returned home to Press Club to bring you the biggest and best RnB jam night in South East Queensland!', 'Music', '339 Brunswick St, Fortitude Valley QLD 4006', 'South East Queensland', 'Dec 8, 2021', '11:20AM'),
(7, 'Andy Bull - Its All Connected Brisbane', 'To celebrate his much-anticipated return from hiatus, Sydney&amp;amp;amp;amp;rsquo;s beloved producer performer wunderkind Andy Bull will be playing solo renditions of his alt-pop gems Baby I Am Nobody Now, Keep On Running, Talk Too Much, Dog, and more; including sneak peaks of his stunning upcoming album.', 'Music', '1/322 Brunswick St, Fortitude Valley QLD', 'Black Bear Lodge', 'June 11, 2021', '06:00 PM'),
(16, 'Chess The Musical', 'Natalie Bassingthwaighte, Paulini, Rob Mills, Alexander Lewis and Mark Furze star in a gripping concert-style production of Chess The Musical touring Australia. Inspired by extraordinary real-life events, Chess The Musical tells a story of a complex love triangle combined with dramatic political intrigue, set against the background of the Cold War.', 'Performance', 'Melbourne Street, South Brisbane, Queensland', 'Queensland Performing Arts Centre (QPAC)', 'June 8 2021', '7:30PM'),
(19, 'Sunset Watch', 'Spread over two palatial levels with two full-service cocktail bars, the YOT Club has been designed from the water as the ultimate 40-metre luxury lounge bar. Grab your crew to watch the world go by as you indulge in seasonal cocktails and mouth-watering food from our onboard executive chef. Let the smooth sounds of our resident set the mood as we cruise into a dreamy summer sunset.', 'Social', '147 Alice St, Brisbane City QLD', 'YOT Botanic Gardens', 'Apr 29, 2021', '04:00 PM'),
(40, 'Eat Street', 'Eat Street Northshore plays host to aromatic international cuisines, vibrant textiles and enchanting sights and sounds of live performers.', 'Live Music', '221D MacArthur Ave, Hamilton QLD 4007', 'Eat Street Northshore', 'May 14, 2021', '06:00 PM'),
(51, 'GABS Craft Beer Festival 2021', 'The moment you have been waiting for has arrived! The Great Australasian Beer SpecTAPular (GABS) is back and we can\'t wait to share our love for craft beer with you again!	', 'Sports', 'Glenelg St South Brisbane QLD', 'Brisbane Convention Exhibition Centre', '12 June 2021', '11:30 AM'),
(54, 'Barrio Fiesta Brisbane', 'The team of volunteers bringing this annual event are raring to stage our culture. Our line up of performers are excited to connect with an audience. We also want to support Rocklea Showgrounds who has been good to us over many years.', 'Performance', 'Goburra St & Ipswich Road, Rocklea QLD', 'Rocklea Showgrounds', '12 June 2021', '9:00 AM'),
(55, 'Kayak eco adventure', 'Bookings essential. When was the last time you escaped your daily routine to enjoy quality time with friends or family? Have fun paddling as a team in two seat...', 'Sports', 'Kookaburra Park - West, 11 Nalya Crescent, Karana Downs', 'Kookaburra Park', '12 June 2021', '10:30 AM'),
(56, 'The Sound Society', 'Tune into the smooth vocals and unique sounds of Brisbaneâ€™s most celebrated up and coming artists, surrounded by panoramic parkland views every Friday and...', 'Music', 'South Bank Parklands, Brisbane City', 'South Bank Parkland', 'June 12, 2021', '2:00 PM');

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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users2`
--

INSERT INTO `users2` (`UserID`, `FullName`, `PhoneNumber`, `DateOfBirth`, `Email`, `UserPassword`, `AccessRights`) VALUES
(1, 'Kira Black', '0404040404', 'Apr 22, 2021', 'kirablack@email.com', 'blah', 'User'),
(9, 'Derek Hall', '045888987', 'May 17, 1984', 'derek@email.com', '$2y$10$0yizmFvf2jfnGB9YmmOwN.uKHapnpGYLAA/iEMICHIYraSDUPa0Ia', 'Admin'),
(11, 'Tracey Vance', '0405879871', 'May 16, 1991', 'tracy@email.com', '$2y$10$yWelAMp3KZMEp4uRAld/auxea54ONiYBMsC4VA85TcuVFTPDH4soK', 'User'),
(14, 'Hannah Finn', '0457887889', 'May 02, 1991', 'hannah@email.com', '$2y$10$lI8jRp.MxXzDeZsqivjuK.FFW2xMqeR0q069csl88076.K6VGpQqS', 'Admin'),
(18, 'Koko Reids', '0458744888', 'June 07, 1999', 'koko@email.com', '$2y$10$fcA91Ee4E3u0bZVQyEnj5ekS612UP0Bm1xHLNudzaPJKdmShO0y6W', 'Admin'),
(19, 'Hillary Blake', '0458788799', '26 June 1998', 'hillary@hotmail.com', '$2y$10$y0tYWnvaWVXupySvcimXS.XEc1V96.VpSrq6mJOW/Srbhu6BzQ3S2', 'Admin');

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
