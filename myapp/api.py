import stripe
from django.conf import settings
from stripe.api_resources import line_item
from .models import AddToCart
from django.http import JsonResponse


def create_checkout_session(request):
    cart = AddToCart.objects.all()
    pub_key = settings.STRIPE_PUBLISHABLE_KEY
    stripe.api_key = settings.STRIPE_SECRET_KEY
    items = []
    for item in cart:
        obj = {
            'price_data':{
                'currancy':'usd',
                'product_data':{
                    'name':item.name,
                },
                'unit_amount': int(item.price*100),
            },
            'quantity': item.quantity,
        }
        items.append(obj)
    session = stripe.checkout.Session.create(
        payment_method_types = ['card'],
        line_items = items,
        mode = 'payment',
        success_url = 'http://127.0.0.1:8000/payment/success/',
        cancel_url = ' http://127.0.0.1:8000/cart/'
    )
    return JsonResponse({'session':session})