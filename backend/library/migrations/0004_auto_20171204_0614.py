# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-12-04 06:14
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0003_auto_20171203_0831'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='loan',
            name='key',
        ),
        migrations.AddField(
            model_name='loan',
            name='uuid_key',
            field=models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False),
        ),
    ]
