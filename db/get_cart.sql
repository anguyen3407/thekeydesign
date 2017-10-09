SELECT *
FROM lineitems
JOIN products ON lineitems.product_id = products.id
WHERE order_id = $1;