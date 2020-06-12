from models_server import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    name = db.Column(db.String(50), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password = db.Column(db.String(80))
    admin = db.Column(db.Boolean)
    tasks = db.relationship('Task', backref='author', lazy='dynamic')
    achives = db.relationship('Achive', backref='author', lazy='dynamic')

    def __repr__(self):
        return '<User {}>'.format(self.name)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    model_id = db.Column(db.Integer, db.ForeignKey('model.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    achive = db.relationship('Achive', backref='task', uselist=False)
    #job_key

    def __repr__(self):
        return '<Task id {} of {}>'.format(self.id, self.timestamp)

class Model(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), index=True, unique=True)
    path = db.Column(db.String(120), index=True, unique=True)
    tasks = db.relationship('Task', backref='model', lazy='dynamic')
    variables = db.relationship('Variable', backref='model', lazy='dynamic')
    achives = db.relationship('Achive', backref='model', lazy='dynamic')
    def __repr__(self):
        return '<Model - {}>'.format(self.name)

class Variable(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), index=True, unique=True)
    unit = db.Column(db.String(50), index=True)
    max_value = db.Column(db.Float)
    min_value = db.Column(db.Float)
    model_id = db.Column(db.Integer, db.ForeignKey('model.id'))
    measurements = db.relationship('Measurement', backref='variable', lazy='dynamic')
    def __repr__(self):
        return '<Variable - {}>'.format(self.name)

class Achive(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    task_id = db.Column(db.Integer, db.ForeignKey('task.id'))
    model_id = db.Column(db.Integer, db.ForeignKey('model.id'))
    measurements = db.relationship('Measurement', backref='achive', lazy='dynamic')
    def __repr__(self):
        return '<Achive id {} of task id {}>'.format(self.id, self.task_id)

class Measurement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time= db.Column(db.Float)
    value = db.Column(db.Float)
    achive_id = db.Column(db.Integer, db.ForeignKey('achive.id'))
    variable_id = db.Column(db.Integer, db.ForeignKey('variable.id'))
