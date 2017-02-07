-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 demo100 的数据库结构
DROP DATABASE IF EXISTS `demo100`;
CREATE DATABASE IF NOT EXISTS `demo100` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `demo100`;


-- 导出  表 demo100.php 结构
DROP TABLE IF EXISTS `php`;
CREATE TABLE IF NOT EXISTS `php` (
  `name` varchar(50) DEFAULT NULL,
  `password` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  demo100.php 的数据：~11 rows (大约)
/*!40000 ALTER TABLE `php` DISABLE KEYS */;
REPLACE INTO `php` (`name`, `password`) VALUES
	('', 123123),
	('', 2143214),
	('', 2142143),
	('243213', 1242131),
	('21321431', 42143123),
	('213213', 213213),
	('123123', 2143123),
	('18070470476', 123123),
	('fdwqfqw', 123214),
	('qweqw', 123213),
	('wqrqw', 1324124),
	('12321321', 1243214),
	('124214', 24124214);
/*!40000 ALTER TABLE `php` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
