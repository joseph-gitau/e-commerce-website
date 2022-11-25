-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2022 at 05:51 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `price` float(4,2) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `type`, `price`, `description`, `image`) VALUES
(1, 'Soft drinks', 1, 15.00, 'Coca-Cola is a carbonated, sweetened soft drink and is the world\'s best-selling drink. A popular nickname for Coca-Cola is Coke. ', 'drink2.png'),
(2, 'Sandwiches', 2, 13.00, 'The sandwich was a moment of bliss in the day, a chance to be still and and take a moment to reconnect with nature. · Homebaked bread, generous filling', 'sandwhich2.jpg'),
(3, 'Starters', 3, 15.00, 'From dainty finger food to crunchy croquettes, these recipes will get your dinner party off to a delicious beginning. Roasted stuffed mushrooms.', 'starter2.jpg'),
(4, 'Burgers', 4, 17.00, 'Seeing a burger lying in front of me makes my mouth water. I see the scrumptious half-pounder chicken burger with lettuce, onion and the best of all the burger.', 'burger2.png'),
(5, 'Fries with cheese', 5, 20.00, 'Cheese fries are French fries covered in a cheese sauce. Of course, you can always add other toppings like chili for chili cheese fries. But the classic cheese fry is simply sauce and potatoes.', 'fries with cheese.jpg'),
(6, 'Soft drinks', 1, 15.00, 'Coca-Cola is a carbonated, sweetened soft drink and is the world\'s best-selling drink. A popular nickname for Coca-Cola is Coke. ', 'drink2.png'),
(7, 'Sandwiches', 2, 13.00, 'The sandwich was a moment of bliss in the day, a chance to be still and and take a moment to reconnect with nature. · Homebaked bread, generous filling', 'sandwhich2.jpg'),
(8, 'Starters', 3, 15.00, 'From dainty finger food to crunchy croquettes, these recipes will get your dinner party off to a delicious beginning. Roasted stuffed mushrooms.', 'starter2.jpg'),
(9, 'Burgers', 4, 17.00, 'Seeing a burger lying in front of me makes my mouth water. I see the scrumptious half-pounder chicken burger with lettuce, onion and the best of all the burger.', 'burger2.png'),
(10, 'Fries with cheese', 5, 20.00, 'Cheese fries are French fries covered in a cheese sauce. Of course, you can always add other toppings like chili for chili cheese fries. But the classic cheese fry is simply sauce and potatoes.', 'fries with cheese.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `menu_type`
--

CREATE TABLE `menu_type` (
  `id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu_type`
--

INSERT INTO `menu_type` (`id`, `type`) VALUES
(1, 'Soft drinks'),
(2, 'Sandwiches'),
(3, 'Starters'),
(4, 'Burgers'),
(5, 'Fries with cheese');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `name` int(100) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `name`, `email`, `password`, `created_at`) VALUES
(1, 'joseph', 'crosetsw09@gmail.com', '$2b$10$XAeqxNcgnvaAs4wPRyBtgeHaR1pTPYXM98MOprAvaBZbN3Jgay5n2', '2022-11-24 17:15:40'),
(2, 'bot', 'bot@gmail.com', '$2b$10$HV6J16ek6fjYuLRMZvRGcOJGjFA1iKmEcOpkW9MVLSXOMNw7K26Jy', '2022-11-24 18:27:35'),
(3, 'burt', 'admin@gmail.com', '$2b$10$9ldb9fw.v6hGUGGzHSWYTe6DYqptaNEm8gylUHCC0ItWPWgDFmZs6', '2022-11-24 18:52:41');

-- --------------------------------------------------------

--
-- Table structure for table `userstb`
--

CREATE TABLE `userstb` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userstb`
--

INSERT INTO `userstb` (`id`, `name`, `email`, `message`, `created_at`) VALUES
(0, 'joseph gitau', 'crosetsw09@gmail.com', 'ret test', '2022-11-24 16:40:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `menu_type`
--
ALTER TABLE `menu_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`),
  ADD KEY `u_id` (`u_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `menu_type`
--
ALTER TABLE `menu_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
