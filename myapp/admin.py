from django.contrib import admin
from .models import Category,Product



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name','price','featured','available', 'created', 'updated']
    list_filter = ['category','featured', 'created', 'updated']
    list_editable = ['price', 'available','featured']
    prepopulated_fields = {'slug': ('name',)}