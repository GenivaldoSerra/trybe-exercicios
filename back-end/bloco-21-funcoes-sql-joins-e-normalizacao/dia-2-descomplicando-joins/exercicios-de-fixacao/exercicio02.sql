SELECT st.first_name, st.last_name, ad.address
FROM sakila.address AS ad
INNER JOIN sakila.staff AS st
ON st.address_id = ad.address_id;