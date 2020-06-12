"""replace filename to path in model

Revision ID: 02cc4e190942
Revises: 449e9bd141b3
Create Date: 2020-05-09 13:24:44.194660

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '02cc4e190942'
down_revision = '449e9bd141b3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('model', sa.Column('path', sa.String(length=120), nullable=True))
    op.create_index(op.f('ix_model_path'), 'model', ['path'], unique=True)
    op.drop_index('ix_model_filename', table_name='model')
    op.drop_column('model', 'filename')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('model', sa.Column('filename', mysql.VARCHAR(length=50), nullable=True))
    op.create_index('ix_model_filename', 'model', ['filename'], unique=True)
    op.drop_index(op.f('ix_model_path'), table_name='model')
    op.drop_column('model', 'path')
    # ### end Alembic commands ###
