from django.urls import path, include
from .models import NewUser
from rest_framework import routers, serializers, viewsets
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# Serializers define the API representation.


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = '__all__'



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['weight'] = user.weight
        token['sex'] = user.sex
        token['score'] = user.score
        token['age'] = user.age
        token['position'] = user.position
        token['stature'] = user.stature

        return token

class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ['username', 'weight', 'stature', 'age', 'position']
