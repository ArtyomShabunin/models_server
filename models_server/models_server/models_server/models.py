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

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    model_id = db.Column(db.Integer, db.ForeignKey('model.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Task {}>'.format(self.body)

class Model(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), index=True, unique=True)
    tasks = db.relationship('Task', backref='model', lazy='dynamic')

#class Variable(db.Model):

#class Achive(db.Model):

#class Timeseries(db.Model):
