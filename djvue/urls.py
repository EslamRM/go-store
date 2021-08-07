from django.contrib import admin
from django.urls import path , include,re_path
from rest_framework import routers
from myapp import views
from django.views.generic.base import TemplateView


router = routers.DefaultRouter()
router.register('users', views.UserViewSet)
router.register('Categories', views.CategoryViewSet)
router.register('products', views.ProductViewSet)
router.register('cart', views.CartViewSet)



urlpatterns = [
    path("",TemplateView.as_view(template_name="myapp/index.html")),
    path('admin/', admin.site.urls),
    path('data/', include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/create-checkout-session/', views.CreateCheckoutSessionView),
    path('config/', views.stripe_config),
    path('auth_config/',views.auth),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/register/', include('dj_rest_auth.registration.urls')),
    path('update_profile/<int:pk>/', views.UpdateProfileView.as_view(), name='update_profile'),
    path('change_password/<int:pk>/', views.ChangePasswordView.as_view(), name='change_password'),
    path('search/',views.SearchAPIView.as_view(), name = 'search'),
    
]

# the best way to resolve refresh problem
urlpatterns += [
    re_path('', TemplateView.as_view(template_name="myapp/index.html")),
]