# Dockerfile for containerizing Flask-gunicorn WSGI app.
FROM python:3-alpine
WORKDIR /usr/src/app

# Install python dependencies.
COPY ./requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY ./app/ ./
