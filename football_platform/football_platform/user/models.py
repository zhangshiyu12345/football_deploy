from datetime import datetime

from django.db import models
from django.contrib.auth.models import AbstractUser #用户模型类
from django.contrib.auth.models import UserManager
from django.utils.translation import gettext_lazy as _
import uuid

# Create your models here.

class NewUser(AbstractUser):

    role_type = [
        [0, 'admin'],
        [1, 'user'],
    ]

    Sex = [
        ['0', '女'],
        ['1', '男'],
    ]

    Position = [
        ['0', '前锋'],
        ['1', '左边锋'],
        ['2', '右边锋'],
        ['3', '前腰'],
        ['4', '中前卫'],
        ['5', '中后卫'],
        ['6', '左后卫'],
        ['7', '右后卫'],
        ['8', '门将'],
    ]

    roles = models.IntegerField(verbose_name='角色', choices=role_type, default=1)
    last_login = models.DateTimeField(_('last login'), blank=True, null=True, auto_now=True)
    code = models.UUIDField(verbose_name='uuid', default=uuid.uuid4, editable=False) #唯一的,不会重复
    avatar = models.ImageField(verbose_name='头像',default='default.jpg', upload_to='avatar')
    age = models.IntegerField(verbose_name='年龄', null=True)
    sex = models.CharField(verbose_name='性别', choices=Sex, null=True,max_length=32)
    weight = models.FloatField(verbose_name='体重', null=True)
    stature = models.FloatField(verbose_name='身高',null=True)
    position = models.CharField(verbose_name='位置',choices=Position, null=True,max_length=32)
    score = models.FloatField(verbose_name='总评',default=0)
    create_time = models.DateTimeField(verbose_name='创建时间',default=datetime.now)


    objects = UserManager()

    class Meta(AbstractUser.Meta):
        db_table = 'NewUser'
        swappable = 'AUTH_USER_MODEL'
        pass

