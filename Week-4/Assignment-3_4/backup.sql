-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'1','1ST CONTENT','jerry@gmail.com'),(2,'2','2ND CONTENT','jerry@gmail.com'),(3,'3','3RD CONTENT','amy@gmail.com'),(4,'4','4TH CONTENT','mike@gmail.com'),(5,'5','5TH CONTENT','amy@gmail.com'),(6,'6','6TH CONTENT','mike@gmail.com'),(7,'7','7TH CONTENT','mike@gmail.com'),(8,'8','8TH CONTENT','amy@gmail.com'),(9,'9','9TH CONTENT','amy@gmail.com'),(10,'10','10TH CONTENT','mike@gmail.com'),(11,'11','11TH CONTENT','mike@gmail.com'),(12,'12','12TH CONTENT','amy@gmail.com'),(13,'13','13TH CONTENT','mike@gmail.com'),(14,'14','14TH CONTENT','jerry@gmail.com'),(15,'15','15TH CONTENT','jerry@gmail.com'),(16,'16','16TH CONTENT','amy@gmail.com'),(17,'17','17TH CONTENT','jerry@gmail.com'),(18,'18','18TH CONTENT','amy@gmail.com'),(19,'19','19TH CONTENT','mike@gmail.com'),(20,'20','20TH CONTENT','jerry@gmail.com'),(21,'21','21ST CONTENT','mike@gmail.com'),(22,'22','22ND CONTENT','jerry@gmail.com'),(23,'23','23RD CONTENT','mike@gmail.com'),(24,'24','24TH CONTENT','amy@gmail.com'),(25,'25','25TH CONTENT','jerry@gmail.com'),(26,'26','26TH CONTENT','mike@gmail.com'),(27,'27','27TH CONTENT','amy@gmail.com'),(28,'28','28TH CONTENT','jerry@gmail.com'),(29,'29','29TH CONTENT','amy@gmail.com'),(30,'30','30TH CONTENT','jerry@gmail.com');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jerry@gmail.com','000000'),(2,'amy@gmail.com','000000'),(3,'mike@gmail.com','000000');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-20  1:41:53
