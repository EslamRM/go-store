# Generated by Django 3.1.7 on 2021-04-19 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0015_auto_20210417_1348'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='slug',
            field=models.SlugField(max_length=200),
        ),
    ]
