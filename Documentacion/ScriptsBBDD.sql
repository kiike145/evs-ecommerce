DROP TABLE IF EXISTS `articulo`;

CREATE TABLE `articulo` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nombre` varchar(200) NOT NULL,
    `descripcion` varchar(200) NOT NULL,
    `precio` decimal(7, 3) NOT NULL,
    `rutaimagen` varchar(200) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 14 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
    `articulo`
VALUES
    (
        1,
        'Jordan 5 Retro',
        'UNC University Blue',
        254.000,
        'https://images.stockx.com/images/Air-Jordan-5-Retro-UNC-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1678264400&q=57'
    ),
    (
        2,
        'Air force',
        'Air force',
        10.000,
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-White-07_V2-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1631122839&q=57'
    ),
    (
        3,
        'Converse Chuck Taylor All-Star 70 Hi',
        'Stussy 8-Ball',
        97.000,
        'https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-70-Hi-Stussy-8-Ball-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1669101170&q=57'
    ),
    (
        4,
        'Jordan 1 Retro High OG',
        'Taxi',
        166.000,
        'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Yellow-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1659018402&q=57'
    ),
    (
        5,
        'Adidas FORUM LOW',
        'Adidas FORUM LOW',
        11.000,
        'https://images.stockx.com/images/adidas-Forum-Low-White-Royal-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1641565358&q=57'
    ),
    (
        6,
        'Jordan 3 Retro',
        'White Cement Reimagined',
        277.000,
        'https://images.stockx.com/images/Air-Jordan-3-Retro-White-Cement-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1678266994&q=57'
    ),
    (
        7,
        'Nike Dunk Low SE',
        'Sand Drift (W)',
        138.000,
        'https://images.stockx.com/images/Nike-Dunk-Low-SE-Sand-Drift-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1678485168&q=57'
    ),
    (
        9,
        'Jordan 11 Retro',
        'Cherry (2022)',
        211.000,
        'https://images.stockx.com/images/Air-Jordan-11-Retro-Cherry-2022-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1669100668&q=57'
    ),
    (
        10,
        'Nike SB Dunk Low Pro',
        'White Gum',
        155.000,
        'https://images.stockx.com/images/Nike-SB-Dunk-Low-White-Gum-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1672818220&q=57'
    ),
    (
        11,
        'adidas Yeezy Slide',
        'Onyx',
        143.000,
        'https://images.stockx.com/images/adidas-Yeezy-Slide-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1646687426&q=57'
    ),
    (
        12,
        'New Balance 550',
        'White Green',
        194.000,
        'https://images.stockx.com/images/New-Balance-550-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1628002321&q=57'
    ),
    (
        13,
        'Nike Dunk Low Retro',
        'Reverse Brazil',
        124.000,
        'https://images.stockx.com/images/Nike-Dunk-Low-Reverse-Brazil-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1678434591&q=57'
    );

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nombre` varchar(45) NOT NULL,
    `apellido` varchar(45) NOT NULL,
    `email` varchar(100) NOT NULL,
    `username` varchar(45) NOT NULL,
    `password` varchar(100) NOT NULL,
    `estatus` int(11) NOT NULL DEFAULT '1',
    `birthday` varchar(10) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username_UNIQUE` (`username`),
    UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
    `usuarios`
VALUES
    (
        2,
        'a',
        'a',
        'a@a',
        'a',
        'CV6XDNgD8CCe6QK',
        1,
        '2000-10-10'
    ),
    (
        3,
        'b',
        'b',
        'gdgh@hfhf.vu',
        'b',
        'CV6XDNgD8CCe6QK',
        1,
        '2000-10-10'
    );