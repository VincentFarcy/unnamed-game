fixtures: 
(Admin)
INSERT INTO `user` (`id`, `email`, `roles`, `password`, `created_at`, `updated_at`, `age_checked`) VALUES (NULL, 'max@o.o', '["ROLE_ADMIN"]', '$argon2id$v=19$m=65536,t=4,p=1$78pVaHG+TeB76xekVYHcAA$hn4cIbrPt6y3ZP2Ni1EeJAO6CC2vsLgRtLI8VIIO5oY', '2020-04-10 00:00:00', NULL, '1');
(User)
INSERT INTO `user` (`id`, `email`, `roles`, `password`, `created_at`, `updated_at`, `age_checked`) VALUES (NULL, 'bob@o.o', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$78pVaHG+TeB76xekVYHcAA$hn4cIbrPt6y3ZP2Ni1EeJAO6CC2vsLgRtLI8VIIO5oY', '2020-04-10 00:00:00', NULL, '1');