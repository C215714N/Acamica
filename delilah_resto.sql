CREATE DATABASE IF NOT EXISTS delilah;
USE delilah;

/*DATA DEFINITION LANGUAGE*/
  -- Tabla usuarios registrados
  CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone INT(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    password VARCHAR(500) NOT NULL,
    admin BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (user_id),
    UNIQUE KEY (username),
    UNIQUE KEY (email)
  );
  -- Tabla platillos del menu
  CREATE TABLE IF NOT EXISTS menu (
    menu_id INT(10) AUTO_INCREMENT,
    name TEXT DEFAULT NULL,
    glutten TINYINT(1) DEFAULT NULL,
    price INT(10) DEFAULT NULL,
    img VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (menu_id)
  );
  -- Tabla estados de envio
  CREATE TABLE IF NOT EXISTS states(
    state_id INT AUTO_INCREMENT,
    description VARCHAR(50),
    PRIMARY KEY (state_id)
  );
  -- Tabla metodos de Pago
  CREATE TABLE IF NOT EXISTS pay_methods(
    method_id INT AUTO_INCREMENT,
    description VARCHAR(50),
    PRIMARY KEY (method_id)
  );
  -- Tabla carrito (menu_id + user_id)
  CREATE TABLE IF NOT EXISTS cart (
    cart_id INT AUTO_INCREMENT,
    menu_id INT NOT NULL,
    price INT(20) NOT NULL,
    user_id INT(10) NOT NULL,
    PRIMARY KEY (cart_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (menu_id) REFERENCES menu(menu_id)
  );
  -- Tabla de Pedidos
  CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT,
    state_id INT NOT NULL
    reg_time datetime(6) NOT NULL DEFAULT current_timestamp(6),
    Numero INT(11) NOT NULL,
    description VARCHAR(200) NOT NULL,
    full_description VARCHAR(1000) NOT NULL,
    method_id INT NOT NULL
    paid BOOLEAN NOT NULL,
    user_id INT(20) NOT NULL,
    address VARCHAR(100) NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (state_id) REFERENCES states(state_id),
    FOREIGN KEY (method_id) REFERENCES pay_methods(method_id)
  );
  -- Tabla Historica de Ordenes (state_id + user_id + method_id)
  CREATE TABLE IF NOT EXISTS history (
    history_id INT AUTO_INCREMENT,
    state_id INT NOT NULL,
    reg_time VARCHAR(100) NOT NULL,
    order_id INT NOT NULL,
    description VARCHAR(1000) NOT NULL,
    full_description VARCHAR(1000) NOT NULL,
    method_id INT NOT NULL,
    paid BOOLEAN DEFAULT FALSE,
    user_id INT(10) NOT NULL,
    address VARCHAR(1000) NOT NULL,
    PRIMARY KEY (history_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (state_id) REFERENCES states(state_id),
    FOREIGN KEY (method_id) REFERENCES pay_methods(method_id)
  );
  -- Tabla de registro de sessiones
  CREATE TABLE IF NOT EXISTS sessions (
    session_id VARCHAR(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    expires INT(11) UNSIGNED NOT NULL,
    data MEDIUMTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
    PRIMARY KEY (session_id)
  );

/* DATA MANIPULATION LANGUAGE */
  -- usuarios registrados
  INSERT INTO users (username, fullname, email, phone, address, password) 
    VALUES    
      ('admin', 'admin', 'admin@delilah.com.ar', 1112341234, 'Delilah Resto', '$2a$10$3q2VzByvZ.SspsIZ0LK6N.x3s0eFd.Gqk7j4RQXIfVNjniUu9tw/K');
      ('C215714N', 'Cristian Racedo', 'cristiandracedo@hotmail.com', 6214571411, 'E. del Campo 95', '$2a$10$BrwPaRSN0R8CcsJM7svCZO6gFIFlIqjqFHFc20OhhtjNMDO.blv1W'),
      ('joe123', 'Joe McMahom', 'joe@gmail.com', 1166589487, 'Reconquista 548', '$2a$10$g3v.q5ZlG.geqVLpKshjIOUZXzXqyMfPrFj4YzgGt8KwamM3dglUG'),
      ('mark4', 'Mark Anthony', 'mark@netscape.com', 1178479234, 'Blanco Encalada 2291', '$2a$10$m9N6hx4uGvLW1H5TenBtm.BtWQSr4H2T4O6dqYS/nS0xowWI6wIli'),
      ('tomtom', 'Tom Petty', 'petty2020@gmail.com', 1130059632, 'Sanabria 940', '$2a$10$LFAieY9a6P0KXZijgfmHT.OOlK9KogxbMF7Z0jAN1rXtSr8Jt7IQi'),
      ('billy6', 'Billy Joel', 'pianoman@gmail.com', 1132897741, 'Bonifacini 1505', '$2a$10$uzBySdlDzC7P9mjAowJDheEJ06MhtcJIa/VySEqRwALD9CyVWrzXS'),
      ('gloria', 'Gloria Gaynor', 'survive@outlook.com', 237129837, 'Humahuaca 500', '$2a$10$Iq9Uv8ERuxCp/jWs961mTes3JtYi387vy2.z3wJnRN1C/AdIAZKDC'),
      ('jovi', 'Jon Bon Jovi', 'jbj@yahoo.com', 1146025319, 'Nicaragua 2450', '$2a$10$N3k1r2RLgzKhaCsPG99CFuZanvsi23olBtIMNokjDSvs244Jr.T/2'),
      ('elton1', 'Elton John', 'rocketman@hotbot.com', 1185204975, 'Humboldt 1984', '$2a$10$q0JjM6c0PuFUkpJ.m2geQ.tg2dSjClm8HRmwUrB1afL7uzB4uPAU6'),
      ('phil', 'Phil Collins', 'INTheair@tonight.com', 1130204879, 'Paradise 1152', '$2a$10$STLWXtD5cAvlXZkHilUPdOSQKiWq47QEP86RwDcik1SMh3k/x/s1.'),
  UPDATE users 
    SET admin = true 
    WHERE username IN('admin','C215714N');
  -- platillos del menu
  INSERT INTO menu (name, glutten, price, img) 
    VALUES
      ('Hamburgesa clasica', 1, 250, 'https://i.imgur.com/KaGNegD.png'),
      ('Bagel de salmon', 1, 420, 'https://i.imgur.com/yrHKMiK.jpg'),
      ('Sandwich veggie', 0, 310, 'https://i.imgur.com/pZehRUK.jpg'),
      ('Ensalada veggie', 0, 340, 'https://i.imgur.com/2pmnLhG.jpg'),
      ('Focaccia', 1, 300, 'https://i.imgur.com/eQ8563H.jpg'),
      ('Sandwich focaccia', 0, 440, 'https://i.imgur.com/RgVYbEX.jpg'),
      ('Ensalada Caesar', 0, 320, 'https://i.imgur.com/OUwLnpw.jpg'),
      ('Hamburguesa de lentejas', 1, 380, 'https://i.imgur.com/1cnJL1v.jpg'),
      ('Ensalada de atún', 0, 305, 'https://i.imgur.com/I2lLT2J.jpg'),
      ('Tarta de jamon y queso', 1, 380, 'https://i.imgur.com/hKrt49L.jpg'),
      ('Tarta INTegral de verdura', 0, 380, 'https://i.imgur.com/fcTZtic.jpg'),
      ('Empanada de jamon y queso', 1, 100, 'https://i.imgur.com/FcnX7F1.jpg'),
      ('Empanada de carne', 1, 100, 'https://i.imgur.com/Mxq4vTT.jpg'),
      ('Empanada de verdura', 1, 100, 'https://i.imgur.com/FhDkhmj.jpg'),
      ('Wrap de verdura', 0, 210, 'https://i.imgur.com/3OlClju.jpg'),
      ('Wrap de pollo y verdura', 0, 270, 'https://i.imgur.com/kKExXq7.jpg'),
      ('Wrap INTegral de atún', 0, 330, 'https://i.imgur.com/RyF2d3T.jpg'),
      ('Ñoquis del 29', 0, 450, 'https://i.imgur.com/tPbRwcF.jpg');
  -- estados de envio
  INSERT INTO states (description)
    VALUES
      ('NUEVO'),
      ('CONFIRMADO'),
      ('PREPARANDO'),
      ('ENVIADO'),
      ('CANCELADO'),
      ('ENTREGADO');
  -- metodos de pago
  INSERT INTO pay_methods(description)
    VALUES 
      ('EFECTIVO'),
      ('CREDITO'),
      ('DEBITO'),
      ('TRANSF.B'),
      ('VIRTUAL');
  -- sesiones guardadas
  INSERT INTO sessions (session_id, expires, data) 
    VALUES
      ('AAZrN9uVktTGfc6szeonr670MRpo3bYA', 1589479155, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":10}}');

