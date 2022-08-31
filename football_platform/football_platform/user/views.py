import os

from IPython.core.display import JSON
from rest_framework.views import APIView

from football_platform import settings
from .models import NewUser
from rest_framework import viewsets,status
from rest_framework.response import Response
from user.serializers import UserSerializer,UpdateUserSerializer
from football_platform.settings import BASE_URL
from django.core.mail import send_mail
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny
from .serializers import MyTokenObtainPairSerializer
import json
# Create your views here.

MEDIA_ADDR = 'http://127.0.0.1:8000/media/'
Position = ['前锋','左边锋','右边锋','前腰','中前卫','中后卫','左后卫','右后卫','门将']
Sex = ['女','男']


#进行路径拼接
def get_avatar_url(avatar):
    '''返回头像的url'''
    if avatar == 'default.jpg':
        return MEDIA_ADDR + 'avatar/' + str(avatar)
    else:
        return MEDIA_ADDR + str(avatar)


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

#获取登录用户信息
class UserInfoViewSet(viewsets.ViewSet):
    queryset = NewUser.objects.all().order_by('-date_joined')
    http_method_names = ['get']

    def list(self, request, *args, **kwargs):
        print('ok')
        user_info = NewUser.objects.filter(id=request.user.id).values()[0]
        role = request.user.roles
        avatar = request.user.avatar
        position = int(user_info['position'])
        sex = int(user_info['sex'])
        user_info['avatar'] = get_avatar_url(avatar)
        user_info['position'] = Position[position]
        user_info['sex'] = Sex[sex]
        if role == 0:
            user_info['roles'] = ['admin']
        else:
            user_info['roles'] = ['user']

        return Response(user_info)

#获取所有用户信息
class UserViewSet(viewsets.ModelViewSet):
    queryset = NewUser.objects.all()
    serializer_class = UserSerializer

class UserCreateViewSet(viewsets.ModelViewSet):
    queryset = NewUser.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['post', 'get']
    permission_classes = []

    #查看某一条数据
    def retrieve(self, request, *args, **kwargs):
        instance = NewUser.objects.get(code=kwargs['pk'])
        instance.is_active = True
        instance.save()
        data = {
            'status': 'success',
        }
        return Response(data, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user_info = self.perform_create(serializer)
        user_info.set_password(request.data['password'])
        user_info.is_active = False #刚开始注册的用户未被激活
        user_info.save()
        code = user_info.code
        # url = request.build_absolute_uri("/api/user_activate/" + str(code) + "/")
        url = BASE_URL + "/api/user_activate/" + str(code)
        print(url)

        #发送邮件给用户激活
        send_mail('用户激活', url,'15016299762@163.com',[user_info.email],fail_silently=False)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        return serializer.save()


class UploadAvatarView(APIView):
    def post(self,request):
        file = request.data.get('file')
        user_obj = NewUser.objects.get(id=5)
        user_obj.avatar = file
        user_obj.save()
        media_path = "media/avatar"
        file_path = os.path.join(settings.BASE_DIR, media_path)
        file_name = os.path.join(file_path, file.name)
        # wb  以二进制形式写入
        with open(file_name, "wb") as f:
            # 写入字节流
            f.write(file.file.read())
            # 返回响应
            data = {
                "code": 200,
                'msg': "上传图片成功",
                'media_path': media_path,
            }
            return Response(data)

class UserUpdateViewSet(APIView):
    queryset = NewUser.objects.all()
    serializer_class = UpdateUserSerializer
    http_method_names = ['put']

    def put(self, request, id):
        print(request.data)
        user_obj = NewUser.objects.get(id=id)
        validated_data = UpdateUserSerializer(data=request.data, instance=user_obj)
        if validated_data.is_valid():
            validated_data.save()
            return Response(validated_data.data)
        else:
            return Response(validated_data.errors)


