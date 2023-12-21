CREATE TABLE  `post` (
    `id_post` INT PRIMARY KEY AUTO_INCREMENT,
    `titulo_post` VARCHAR(30),
    `conteudo_post` VARCHAR(500),
    `autor_post` VARCHAR(50),
    `data_criacao` DATETIME,
    `data_alteracao` DATETIME
);