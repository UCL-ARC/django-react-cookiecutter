# Django - React/Vite.js Cookiecutter template

## Overview

This template is used for web development project that uses Django and React + Vite.js

## Quickstart

Run cookiecutter against this repo's url:  
```python 
cookiecutter https://github.com/shiyingwucl/cookiecutter 
```

This will prompt the following configurations for your project:

example:
```json
"project_name": "My Django React App",
"project_slug": "django-vite",
"author_name": "Your Name",
"email": "you@example.com",
"description": "Django + React template",
"use_docker": ["y", "n"],
"frontend_package_manager": "npm",
```

## Django REST api routing

communication between backend and frontend is done via api routing.
```python
# your_project_slug/urls.py

router = routers.DefaultRouter()
router.register(r'logins', views.LoginDetailView, 'logins')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
```

this will allow react to fetch information from api

## React router

**WIP**

## Docker

```bash
$ cd <project_slug>
$ docker-compose build
```

## Use in production settings

**WIP**


