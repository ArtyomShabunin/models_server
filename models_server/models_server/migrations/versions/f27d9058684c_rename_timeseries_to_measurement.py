"""rename timeseries to measurement

Revision ID: f27d9058684c
Revises: f05d2a0a4005
Create Date: 2020-05-10 12:45:58.372937

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'f27d9058684c'
down_revision = 'f05d2a0a4005'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('measurement',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.Column('value', sa.Float(), nullable=True),
    sa.Column('achive_id', sa.Integer(), nullable=True),
    sa.Column('variable_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['achive_id'], ['achive.id'], ),
    sa.ForeignKeyConstraint(['variable_id'], ['variable.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_measurement_timestamp'), 'measurement', ['timestamp'], unique=False)
    op.drop_index('ix_timeseries_timestamp', table_name='timeseries')
    op.drop_table('timeseries')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('timeseries',
    sa.Column('id', mysql.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('timestamp', mysql.DATETIME(), nullable=True),
    sa.Column('value', mysql.FLOAT(), nullable=True),
    sa.Column('achive_id', mysql.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('variable_id', mysql.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['achive_id'], ['achive.id'], name='timeseries_ibfk_1'),
    sa.ForeignKeyConstraint(['variable_id'], ['variable.id'], name='timeseries_ibfk_2'),
    sa.PrimaryKeyConstraint('id'),
    mysql_collate='utf8mb4_0900_ai_ci',
    mysql_default_charset='utf8mb4',
    mysql_engine='InnoDB'
    )
    op.create_index('ix_timeseries_timestamp', 'timeseries', ['timestamp'], unique=False)
    op.drop_index(op.f('ix_measurement_timestamp'), table_name='measurement')
    op.drop_table('measurement')
    # ### end Alembic commands ###
