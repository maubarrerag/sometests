select 
	pr_id, 
    JSON_EXTRACT(pr_json, '$.pr_name') as pr_name,
    JSON_EXTRACT(pr_json, '$.pr_price') as pr_price,
    pr_date 
from product;