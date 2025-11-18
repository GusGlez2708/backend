-- ============================================
-- SCRIPT PARA INSERTAR PELÍCULAS DE EJEMPLO
-- Ejecuta este script en Supabase SQL Editor
-- ============================================

-- Insertar películas populares
INSERT INTO public.movies (title, description, genre, release_year, director, poster_url, rating) VALUES

('The Shawshank Redemption', 'Dos hombres encarcelados se unen a lo largo de varios años, encontrando consuelo y eventual redención a través de actos de decencia común.', 'Drama', 1994, 'Frank Darabont', 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', 4.8),

('The Godfather', 'El patriarca envejecido de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su hijo reacio.', 'Drama', 1972, 'Francis Ford Coppola', 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', 4.7),

('The Dark Knight', 'Cuando la amenaza conocida como el Joker emerge de su misterioso pasado, causa estragos y caos en la gente de Gotham.', 'Acción', 2008, 'Christopher Nolan', 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', 4.7),

('Pulp Fiction', 'Las vidas de dos sicarios, un boxeador, la esposa de un gángster y dos bandidos se entrelazan en cuatro historias de violencia y redención.', 'Thriller', 1994, 'Quentin Tarantino', 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg', 4.6),

('Forrest Gump', 'Las presidencias de Kennedy y Johnson, la guerra de Vietnam, el escándalo Watergate y otros eventos históricos se desarrollan desde la perspectiva de un hombre de Alabama.', 'Drama', 1994, 'Robert Zemeckis', 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg', 4.5),

('Inception', 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños recibe la tarea inversa de plantar una idea en la mente de un CEO.', 'Ciencia Ficción', 2010, 'Christopher Nolan', 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', 4.6),

('The Matrix', 'Un hacker descubre que su realidad es una simulación creada por máquinas y se une a una rebelión para libertar a la humanidad.', 'Ciencia Ficción', 1999, 'Lana Wachowski, Lilly Wachowski', 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 4.5),

('Goodfellas', 'La historia de Henry Hill y su vida en la mafia, cubriendo su relación con su esposa Karen Hill y sus socios Jimmy Conway y Tommy DeVito.', 'Drama', 1990, 'Martin Scorsese', 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg', 4.6),

('Parasite', 'La codicia y la discriminación de clases amenazan la relación simbiótica recién formada entre la adinerada familia Park y el clan indigente Kim.', 'Thriller', 2019, 'Bong Joon Ho', 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', 4.5),

('Spirited Away', 'Durante el traslado de su familia a los suburbios, una niña malhumorada de 10 años deambula por un mundo gobernado por dioses, brujas y espíritus.', 'Animación', 2001, 'Hayao Miyazaki', 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg', 4.7),

('The Silence of the Lambs', 'Una joven cadete del FBI debe recibir la ayuda de un caníbal encarcelado y manipulador para ayudar a capturar a otro asesino en serie.', 'Terror', 1991, 'Jonathan Demme', 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg', 4.6),

('Saving Private Ryan', 'Tras el desembarco de Normandía, un grupo de soldados estadounidenses va tras las líneas enemigas para recuperar a un paracaidista cuyas hermanos han muerto en combate.', 'Acción', 1998, 'Steven Spielberg', 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg', 4.6),

('The Green Mile', 'Las vidas de los guardias en el corredor de la muerte se ven afectadas por uno de sus reclusos: un hombre negro acusado de asesinato de niños y violación que tiene un don misterioso.', 'Drama', 1999, 'Frank Darabont', 'https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg', 4.6),

('Se7en', 'Dos detectives, un novato y un veterano, cazan a un asesino en serie que usa los siete pecados capitales como su modus operandi.', 'Thriller', 1995, 'David Fincher', 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg', 4.5),

('The Prestige', 'Después de una tragedia, dos hombres jóvenes magos se involucran en una batalla para crear la ilusión definitiva mientras sacrifican todo lo que tienen para superarse mutuamente.', 'Thriller', 2006, 'Christopher Nolan', 'https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg', 4.4),

('Gladiator', 'Un ex general romano se propone vengarse del corrupto emperador que asesinó a su familia y lo envió a la esclavitud.', 'Acción', 2000, 'Ridley Scott', 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg', 4.5),

('The Departed', 'Un agente encubierto y un topo en la policía intentan identificarse mutuamente mientras se infiltran en una pandilla irlandesa en Boston.', 'Thriller', 2006, 'Martin Scorsese', 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg', 4.4),

('Whiplash', 'Un joven baterista ambicioso es empujado al límite de su habilidad y cordura por un instructor abusivo en una de las mejores escuelas de música del país.', 'Drama', 2014, 'Damien Chazelle', 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg', 4.5),

('The Lion King', 'El príncipe león Simba y su padre son el objetivo de su tío, que quiere ascender al trono él mismo.', 'Animación', 1994, 'Roger Allers, Rob Minkoff', 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg', 4.4),

('Back to the Future', 'Marty McFly, un estudiante de secundaria de 17 años, es enviado accidentalmente treinta años al pasado en un DeLorean que viaja en el tiempo inventado por su amigo Doc Brown.', 'Ciencia Ficción', 1985, 'Robert Zemeckis', 'https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg', 4.5),

('The Pianist', 'Un músico judío polaco lucha por sobrevivir a la destrucción del gueto de Varsovia durante la Segunda Guerra Mundial.', 'Drama', 2002, 'Roman Polanski', 'https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg', 4.5),

('Terminator 2: Judgment Day', 'Un cyborg, idéntico al que falló en matar a Sarah Connor, debe ahora proteger a su hijo adolescente John Connor de un cyborg aún más avanzado y poderoso.', 'Acción', 1991, 'James Cameron', 'https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg', 4.4),

('Avengers: Endgame', 'Después de los devastadores eventos de Avengers: Infinity War, el universo está en ruinas. Con la ayuda de los aliados restantes, los Vengadores se reúnen una vez más.', 'Acción', 2019, 'Anthony Russo, Joe Russo', 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg', 4.4),

('Spider-Man: Into the Spider-Verse', 'El adolescente Miles Morales se convierte en el Spider-Man de su realidad y se cruza con sus contrapartes de otras dimensiones para detener una amenaza para todas las realidades.', 'Animación', 2018, 'Bob Persichetti, Peter Ramsey', 'https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg', 4.5),

('Joker', 'En Gotham City, mentalmente perturbado comediante Arthur Fleck es despreciado y maltratado por la sociedad. Luego se embarca en una espiral descendente de revolución y crimen sangriento.', 'Drama', 2019, 'Todd Phillips', 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', 4.3),

('The Truman Show', 'Un agente de seguros descubre que toda su vida es en realidad un programa de televisión.', 'Comedia', 1998, 'Peter Weir', 'https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg', 4.3),

('Toy Story', 'Un juguete vaquero se siente amenazado y celoso cuando un nuevo juguete de astronauta suplanta su posición como el juguete favorito en la habitación de un niño.', 'Animación', 1995, 'John Lasseter', 'https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg', 4.3),

('Braveheart', 'El guerrero escocés William Wallace lidera a su compatriotas en una rebelión para liberar su tierra natal del dominio inglés.', 'Acción', 1995, 'Mel Gibson', 'https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg', 4.4),

('Alien', 'Después de que la tripulación de una nave espacial comercial aterriza en un planeta desconocido para investigar una transmisión misteriosa, descubren una forma de vida hostil.', 'Terror', 1979, 'Ridley Scott', 'https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg', 4.4),

('Coco', 'Aspirante a músico Miguel, confrontado con la prohibición de música de su familia, entra en la Tierra de los Muertos para encontrar a su bisabuelo, un cantante legendario.', 'Animación', 2017, 'Lee Unkrich', 'https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg', 4.5),

('Django Unchained', 'Con la ayuda de un cazarrecompensas alemán, un esclavo liberado se propone rescatar a su esposa de un brutal propietario de plantación de Mississippi.', 'Acción', 2012, 'Quentin Tarantino', 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg', 4.3),

('The Grand Budapest Hotel', 'Un escritor encuentra al dueño de un hotel en decadencia, quien le cuenta de su juventud sirviendo como conserje en el hotel durante la guerra.', 'Comedia', 2014, 'Wes Anderson', 'https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg', 4.2),

('Mad Max: Fury Road', 'En un futuro apocalíptico, una mujer se rebela contra un líder tiránico en busca de su tierra natal con la ayuda de un grupo de prisioneras y un vagabundo llamado Max.', 'Acción', 2015, 'George Miller', 'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg', 4.3),

('The Shining', 'Una familia se dirige a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia, mientras su hijo psíquico ve horribles premoniciones del pasado y del futuro.', 'Terror', 1980, 'Stanley Kubrick', 'https://image.tmdb.org/t/p/w500/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg', 4.3),

('Casablanca', 'Un cínico expatriado estadounidense lucha por decidir si ayudar o no a su ex amante y su esposo fugitivo a escapar de los nazis en Marruecos.', 'Romance', 1942, 'Michael Curtiz', 'https://image.tmdb.org/t/p/w500/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg', 4.4),

('Amélie', 'Amélie es una joven inocente y ingenua que decide ayudar a quienes la rodean y, en el proceso, descubre el amor.', 'Romance', 2001, 'Jean-Pierre Jeunet', 'https://image.tmdb.org/t/p/w500/nSxDa3M9aMvGVLoItzWTepQ5h5d.jpg', 4.2);

-- Mensaje de confirmación
SELECT 'Se insertaron ' || COUNT(*) || ' películas correctamente.' as resultado FROM public.movies;
