# Farm Stop Inventory System

## API Endpoints

|Method|URI|Action|
|---|---|---|
||||
|Vendors|
|GET|[api/vendors](#api-vendors)|get all vendors|
|GET|api/vendors/:id|get vendor by ID|
|POST|api/vendors|create new vendor|
|PUT|api/vendors/:id|update vendor by ID|
|DELETE|api/vendors/:id|delete vendor by ID|
||||
|Products|
|GET|api/products|get all products for all vendors|
|GET|api/vendors/:id/products|get all products for vendor by ID|
|POST|api/products|create new product|
|PUT|api/products/:id|update product by ID|
|PUT|api/products/:id/disable|disable product by ID|
|PUT|api/products/:id/enable|enable product by ID|
|DELETE|api/products/:id|delete product by ID|
||||
|Intake|
|GET|api/intakes|get all intake records for all vendors/products|
|GET|api/vendors/:id/intakes|get all intake records for vendor by ID|
|GET|api/products/:id/intakes|get all intake records for product by ID|
|GET|api/periods/:id/intakes|get all intake records for pay period by ID|
|POST|api/intakes|create new intake record|
|PUT|api/intakes/:id|update intake record by ID|
|DELETE|api/intakes/:id|delete intake record by ID|
|GET|api/intakes?vendor={vendorID}&product={productID}&period={periodID}|get all intake records for the specified vendor/product/pay period|
||||
|Inventory|
|GET|api/inventories|get all inventory records for all vendors/products|
|GET|api/vendors/:id/inventories|get all inventory records for vendor by ID|
|GET|api/products/:id/inventories|get all inventory records for product by ID|
|GET|api/periods/:id/inventories|get all inventory records for pay period by ID|
|POST|api/inventories|create new inventory record|
|PUT|api/inventories/:id|update inventory record by ID|
|DELETE|api/inventories/:id|delete inventory record by ID|
|GET|api/inventories?vendor={vendorID}&product={productID}&period={periodID}|get all inventory records for the specified vendor/product/pay period|
||||
|Pay Periods|
|GET|api/periods|get all pay periods|
|GET|api/periods/:id|get pay period by ID|
|POST|api/periods|create new pay period|
|PUT|api/periods/:id|update pay period by ID|
|PUT|api/periods/:id/close|close pay period by ID|
|DELETE|api/periods/:id|delete pay period by ID|

### api/vendors {#api-vendors}

Returns the following JSON object:



## Glossary

### Vendor

Vendors own, sell, and are paid for products that customers purchase.

### Product

Products are the things that vendors provide for customers to purchase. Each product consists of a Name, and Description, a Sales Unit, and a Unit Price. Products can be either enabled or disabled.

### Intake

An intake is a record of products being added or removed from inventory. Sometimes products are removed because they're no longer fresh enough to be sold, and sometimes they are removed by the vendor in order to be sold at a different market.

### Inventory

Inventory is the record of all products that are available for sale at a given point in time. An inventory record consists of a time period (usually a Pay Period), a product, and a count.

### Pay Period

Pay periods are the time periods for which vendors get paid. Inventory is counted at the beginning and end of each pay period, and the net change via intake actions is added (subtracted), to calculate how much of a given product was sold during the period.