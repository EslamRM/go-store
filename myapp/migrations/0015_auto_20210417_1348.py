# Generated by Django 3.1.7 on 2021-04-17 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0014_auto_20210414_1058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.CharField(default='$21.99', max_length=200, null=True),
        ),
    ]
