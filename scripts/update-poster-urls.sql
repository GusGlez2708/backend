-- ============================================
-- SCRIPT PARA ACTUALIZAR URLs DE POSTERS
-- Ejecuta este script en Supabase SQL Editor
-- ============================================

-- Actualizar posters con URLs correctas de TMDB
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' WHERE title = 'The Shawshank Redemption';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' WHERE title = 'The Godfather';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' WHERE title = 'The Dark Knight';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg' WHERE title = 'Pulp Fiction';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg' WHERE title = 'Forrest Gump';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' WHERE title = 'Inception';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' WHERE title = 'The Matrix';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg' WHERE title = 'Goodfellas';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' WHERE title = 'Parasite';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' WHERE title = 'Spirited Away';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg' WHERE title = 'The Silence of the Lambs';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg' WHERE title = 'Saving Private Ryan';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg' WHERE title = 'The Green Mile';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg' WHERE title = 'Se7en';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg' WHERE title = 'The Prestige';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' WHERE title = 'Gladiator';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg' WHERE title = 'The Departed';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg' WHERE title = 'Whiplash';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' WHERE title = 'The Lion King';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg' WHERE title = 'Back to the Future';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg' WHERE title = 'The Pianist';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/2oKstK7zUfL5K2x2N0o3i9M1wHw.jpg' WHERE title = 'Superbad';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/u3R7z6jT47KqY9Y5kOa2uQ1mRfx.jpg' WHERE title = 'Monty Python and the Holy Grail';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/xXpQkC5w1c8kH6WvXmN3o0S9uP8.jpg' WHERE title = 'Coming to America';
UPDATE movies SET poster_url = 'https://image.tmdb.org/t/p/w500/sC0r75t6lM4T2kK6rT7e9yD5t8.jpg' WHERE title = 'The Grand Budapest Hotel';

SELECT 'Posters actualizados correctamente' as resultado;
