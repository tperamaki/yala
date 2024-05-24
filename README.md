YALA: Yet Another Lunch App

## Getting Started

```bash
npm run dev
```

```mermaid
---
title: Approximate data model
---
classDiagram
    Restaurant <|-- Review
    class Restaurant {
        int id
        String name
        String category
        String description
        String address
        Date created_at
        Date modified_at
        String created_by
        String modified_by
    }
    class Review {
        int id
        int restaurant_id
        String user_id
        int rating
        String comment
        Date date
    }
```
