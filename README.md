# Project Information

This is my first project using Next.js, created as a practice and learning exercise. The project is developed by following the guidance of an instructor from TEDU.

## Features

### Admin panel

- Managers management ( admins )
- Categories management
- Products management
- Coupons management
- Users management
- Order management

### Customer

- Homepage ( All products pagination, categories list )
- Category detail
- Product detail
- Cart
- Payment
- Order status

## DB design

### Admins (Managers)

```
- email: string
- password: string
- isActive: boolean
- deleted_at: string
- created_at: string
- updated_at: string
```

### Categories

```
- name: string
- slug: string
- description: string // html
- images: string[] // url to storage firebase
- deleted_at: string
- created_at: string
- updated_at: string
```

### Products

```
- name: string
- slug: string
- description: string // html
- created_by: AdminRef
- images: string[] // url to storage firebase
- categories: Array<CategoriesRef>
  | ### categories
  - id: string
  - name: string
  - slug: string
  - description: string // html
- properties:
  | ### properties
  - name: string
  - color: string
  - size: string
  - price: number
```

### Coupons

```
- name: string
- code: string
- expired_at: string
- percent: number (%)
- stripe_id: string
```

### Users

```
- email: string
- google_id: string // or token
- facebook_id: string // or token
- firstName: string
- lastName: string
- avt: string // url to storage firebase
```

### Cart

```
- user: UserRef
- products: Array<ProductRef>
```

### Orders

```
- user: UserRef
- products: Array<ProductRef>
- coupon: CouponRef
- total: number
- stripe_invoice_id: string
- status: string
```
