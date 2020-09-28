from django.shortcuts import render
from rest_framework import viewsets
from random import randint
from rest_framework.response import Response
from rest_framework.decorators import api_view

#class SensorViewSet(viewsets.ModelViewSet):
#    pass

@api_view()
def sensor_communication_view(request):
    temperatures = [ ]
    for i in range(0, 16):
        value = randint(20, 30)
        temperatures.append(value)
    return Response(temperatures)
