# Generated by Django 2.2.4 on 2020-05-31 21:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_remove_item_label'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='address',
            name='zip',
        ),
    ]
