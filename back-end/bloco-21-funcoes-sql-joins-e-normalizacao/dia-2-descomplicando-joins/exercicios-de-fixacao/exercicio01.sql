SELECT act.actor_id, act.first_name, fact.film_id
FROM sakila.actor AS act
INNER JOIN film_actor AS fact
ON act.actor_id = fact.actor_id;