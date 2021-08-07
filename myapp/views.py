import stripe
from django.conf import settings
from django.http import JsonResponse
from .models import Category, Product
from django.contrib.auth.models import User
from rest_framework import viewsets,permissions,generics
from .models import Category,Product, AddToCart
from .serializers import UserSerializer,CategoryApi,ProductApi,CartApi,UpdateUserSerializer,ChangePasswordSerializer
from django_filters import rest_framework as filters
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import filters as filter
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@csrf_exempt
def auth(request):
    if request.method == 'GET':
        is_auth = request.user.is_authenticated
    return JsonResponse(is_auth, safe=False)

@csrf_exempt
def stripe_config(request):
    if request.method == 'GET':
        cart = AddToCart(request.user.id)
        print(cart)
        stripe_config = {'publicKey': settings.STRIPE_PUBLISHABLE_KEY}
    return JsonResponse(stripe_config, safe=False)

stripe.api_key = settings.STRIPE_SECRET_KEY
def CreateCheckoutSessionView(request):
    cart_products = AddToCart.objects.filter(user=request.user).all()
    print(cart_products)
    line_items = []
    for cart_product in cart_products:
        line_items.append({
            'price_data': {
                'currency': 'usd',
                'unit_amount': int(float(cart_product.price[1:]))*100,
                'product_data': {
                    'name': cart_product.name,
                    'images': [cart_product.image],
                    'metadata': {'product_id': cart_product.id}
                },
            },
            'quantity': cart_product.quantity
        })
    print(line_items)
    # Domain for the success and cancel view
    if settings.DEBUG:
        CLIENT_DOMAIN = 'http://127.0.0.1:8000'
    else:
        CLIENT_DOMAIN = 'https://vuengo.herokuapp.com'
    
    session = stripe.checkout.Session.create(
        billing_address_collection='auto',
        shipping_address_collection={
            'allowed_countries': ['US'],
        },
        payment_method_types=['card'],
        mode='payment',
        line_items=line_items,
        customer_email=request.user.email,
        success_url= CLIENT_DOMAIN+'/success',
        cancel_url=CLIENT_DOMAIN+'/cancelled',
    )

    return JsonResponse({
        'sessionId': session.id,
        'publicKey': settings.STRIPE_PUBLISHABLE_KEY
    })

class SearchAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductApi
    filter_backends = (filter.SearchFilter,)
    search_fields = ['name']
   
# to delete duplcates
# for row in AddToCart.objects.all().reverse():
#     if AddToCart.objects.filter(name=row.name).count() > 1:
#         row.delete()

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
    

    def retrieve(self, request: Request, *args, **kwargs):
        """
        If provided 'pk' is "me" then return the current user.
        """
        if kwargs.get('pk') == 'me':
            return Response(self.get_serializer(request.user).data)
        return super().retrieve(request, args, kwargs)

class ChangePasswordView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = ChangePasswordSerializer      
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
        
class UpdateProfileView(generics.UpdateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UpdateUserSerializer
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategoryApi

class CartViewSet(viewsets.ModelViewSet):
    queryset = AddToCart.objects.all().order_by('-created')
    serializer_class = CartApi
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
    def get_queryset(self):
        return AddToCart.objects.filter(user=self.request.user)
    def delete_all(self):
        return AddToCart.objects.all().delete()


class ProductFilter(filters.FilterSet):
    min_price = filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="price", lookup_expr='lte')

    class Meta:
        model = Product
        fields = ['category', 'min_price', 'max_price','featured']


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-created')
    serializer_class = ProductApi
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProductFilter


categories = Category.objects.filter(image='')
cats =['Accessories', 'Apparel', 'Baby Products',
 'Beauty', 'Cameras', 'Car & Motorbike', 'Diapers & Wipes',
  'Gourmet', 'Handbags', 'Health', 'Home Entertainment',
   'Household Supplies', 'Jewellery', 'Laptops', 'Luggage',
    'Mobiles', 'Movies & TV Shows', 'Music', 'Musical Instruments',
     'Office Supplies', 'Personal Care Appliances', 'Pet Supplies', 
     'Shoes', 'Sports', 'Sunglasses', 'Televisions', 'Toys & Games', 
     'Travel Accessories', 'Video Games', 'Watches'] 