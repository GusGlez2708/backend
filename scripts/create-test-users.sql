-- Script para crear usuarios de prueba directamente en Supabase
-- Ejecuta esto en el SQL Editor de Supabase Dashboard

-- IMPORTANTE: Estos usuarios NO tendrán autenticación de Supabase Auth
-- Solo existirán en la tabla profiles para pruebas

-- Usuario 1: Admin
INSERT INTO profiles (id, username, role, banned, created_at)
VALUES (
  gen_random_uuid(),
  'admin',
  'admin',
  false,
  NOW()
) ON CONFLICT (id) DO NOTHING;

-- Usuario 2: Usuario normal
INSERT INTO profiles (id, username, role, banned, created_at)
VALUES (
  gen_random_uuid(),
  'maria123',
  'user',
  false,
  NOW()
) ON CONFLICT (id) DO NOTHING;

-- Usuario 3: Otro usuario normal
INSERT INTO profiles (id, username, role, banned, created_at)
VALUES (
  gen_random_uuid(),
  'pedro456',
  'user',
  false,
  NOW()
) ON CONFLICT (id) DO NOTHING;

-- Ver los usuarios creados
SELECT id, username, role, banned, created_at FROM profiles ORDER BY created_at DESC;
