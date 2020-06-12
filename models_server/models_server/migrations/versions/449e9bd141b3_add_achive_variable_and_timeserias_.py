"""add Achive Variable and TimeSerias tables

Revision ID: 449e9bd141b3
Revises: 8f7e76b24e61
Create Date: 2020-05-09 13:07:32.227420

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '449e9bd141b3'
down_revision = '8f7e76b24e61'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('variable',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('unit', sa.String(length=50), nullable=True),
    sa.Column('max_value', sa.Float(), nullable=True),
    sa.Column('min_value', sa.Float(), nullable=True),
    sa.Column('model_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['model_id'], ['model.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_variable_unit'), 'variable', ['unit'], unique=False)
    op.create_table('achive',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('task_id', sa.Integer(), nullable=True),
    sa.Column('model_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['model_id'], ['model.id'], ),
    sa.ForeignKeyConstraint(['task_id'], ['task.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('timeseries',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.Column('value', sa.Float(), nullable=True),
    sa.Column('achive_id', sa.Integer(), nullable=True),
    sa.Column('variable_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['achive_id'], ['achive.id'], ),
    sa.ForeignKeyConstraint(['variable_id'], ['variable.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_timeseries_timestamp'), 'timeseries', ['timestamp'], unique=False)
    op.add_column('model', sa.Column('filename', sa.String(length=50), nullable=True))
    op.create_index(op.f('ix_model_filename'), 'model', ['filename'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_model_filename'), table_name='model')
    op.drop_column('model', 'filename')
    op.drop_index(op.f('ix_timeseries_timestamp'), table_name='timeseries')
    op.drop_table('timeseries')
    op.drop_table('achive')
    op.drop_index(op.f('ix_variable_unit'), table_name='variable')
    op.drop_table('variable')
    # ### end Alembic commands ###
