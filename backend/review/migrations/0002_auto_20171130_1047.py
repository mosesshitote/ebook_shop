# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-30 10:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0001_initial'),
        ('review', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='object_review',
        ),
        migrations.AddField(
            model_name='review',
            name='object_review',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='library.Ebook'),
        ),
    ]
