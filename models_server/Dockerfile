FROM continuumio/miniconda3:latest

EXPOSE 5000

RUN conda install Flask
RUN pip install mysql-connector-python
RUN pip install flask_sqlalchemy
RUN pip install flask-migrate
RUN pip install pyjwt
RUN pip install rq
RUN pip install redis
RUN conda install -c conda-forge pyfmi
RUN conda install -c conda-forge fmpy

WORKDIR /models_server
COPY models_server /models_server

CMD ["python", "runserver.py"]