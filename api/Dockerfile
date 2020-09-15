# Dockerfile for containerizing Flask-gunicorn WSGI app.
FROM python:3-alpine
WORKDIR /usr/src/app

# Activate python virtual environment before installing dependencies.
RUN python3 -m venv app-env
RUN source app-env/bin/activate

# Install python dependencies.
COPY ./requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY ./app/ ./
