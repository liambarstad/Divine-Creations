from django.config.urls import url
from django.contrib import admin
from ThetaHealing import views

urlpatterns = [
    url(r'^/$', views.main)
]
