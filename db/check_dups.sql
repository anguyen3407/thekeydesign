SELECT *
FROM lineitems
WHERE product_id = $1 AND order_id=$2;