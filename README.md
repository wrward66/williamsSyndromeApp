# Williams Syndrome Motor Development Guide

This project is a small web application for families and professionals who want to learn more about early motor development in children with Williams syndrome. It presents six milestones, research-based age ranges, percentile information, illustrations, and plain-language guidance.

The project has two parts:

- `backend/` — a Django and Django REST Framework API containing the milestone data.
- `frontend/` — a React website that displays the data and provides the interactive milestone pages.

The information is intended for guidance only and is not a replacement for advice from a qualified healthcare professional.

## Requirements

You will need:

- Python 3.9 or newer
- Node.js and npm
- Git, if you are cloning the project

## Getting started

From the repository root, open two terminal windows or tabs.

### 1. Start the backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install Django djangorestframework django-cors-headers Pillow
python manage.py migrate
python manage.py data
python manage.py runserver
```

The API will be available at <http://127.0.0.1:8000/>. The main endpoints are:

- `GET /api/milestones/` — returns all milestones
- `GET /api/milestones/<id>/` — returns one milestone and its percentile data

The `data` command creates or updates the six milestones and their research values. It is safe to run again if the database already contains the data.

### 2. Start the frontend

In a second terminal:

```bash
cd frontend
npm ci
npm start
```

The website will open at <http://localhost:3000> and will request its data from the local Django server.

If `npm ci` reports a dependency problem, remove the existing `node_modules` directory and run `npm ci` again. The frontend currently uses a fixed local API address, so the backend must be running on port `8000` during development.

## Useful commands

Backend commands should be run from `backend/` with the virtual environment active:

```bash
python manage.py check
python manage.py test
python manage.py makemigrations --check --dry-run
```

Frontend commands should be run from `frontend/`:

```bash
npm start       # development server
npm test        # test runner
npm run build   # production build in frontend/build
```

## Project layout

```text
backend/
  backend/                 Django project settings and URLs
  myapp/                   Models, API views, serializers, and seed command
  media/milestones/        Backend-uploaded milestone images
  db.sqlite3               Local development database

frontend/
  public/milestones/       Images used by the website
  src/pages/               Home, milestones, about, and detail pages
  src/components/          Shared layout and UI components
  src/milestoneConfig.js   Maps API milestone names to website content/images
  src/milestoneContent.js  Plain-language page content
```

## Troubleshooting

**The page is empty or shows no milestones**

Make sure the Django server is running, then visit `http://127.0.0.1:8000/api/milestones/` directly. If the response is empty, run `python manage.py data` from `backend/`.

**The browser reports a CORS error**

The development backend allows `http://localhost:3000`. Use that address for the React app, and make sure the backend is running at `127.0.0.1:8000`.

**The tests fail before starting**

Run `npm ci` in `frontend/` to install the dependencies from `package-lock.json`. The existing test file is still the default Create React App starter test and may need updating as the application evolves.

## Deployment note

The current settings are for local development. Before deploying, move the Django secret key into an environment variable, turn off `DEBUG`, configure `ALLOWED_HOSTS`, configure production CORS origins, and serve uploaded media through the chosen hosting setup. The frontend API address should also be made configurable instead of pointing directly to localhost.

