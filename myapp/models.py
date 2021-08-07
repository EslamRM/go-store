from django.contrib.auth.models import User
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200,db_index=True)
    slug = models.SlugField(max_length=200)
    image = models.URLField(blank=True)


    class Meta:
        ordering = ('name',)
        verbose_name = 'category'
        verbose_name_plural = 'categories'
    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return f"/category/{self.slug}/"

class Product(models.Model):
    category = models.ForeignKey(Category,related_name='category',on_delete=models.CASCADE)
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.URLField()
    description = models.TextField(blank=True)
    price = models.CharField(max_length=200,default='$21.99')
    quantity = models.IntegerField(default=1)
    stock = models.CharField(max_length=200,default='50 Item In Stock')
    delivery = models.CharField(max_length=200,default='FREE Delivery On First Order.')
    available = models.BooleanField(default=True)
    featured = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ('name',)
        index_together = (('id', 'slug'),)
    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return f"/{self.category.slug}/{self.slug}/"

class AddToCart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=200, db_index=True)
    image = models.URLField()
    price = models.CharField(max_length=200,null=True ,default='$21.99')
    quantity = models.IntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ('-created',)
    def __str__(self):
        return self.name