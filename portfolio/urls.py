from django.conf.urls import url
from . import views
from django.conf.urls import include
from django.views.i18n import JavaScriptCatalog

urlpatterns = [
    url(r'^jsi18n/$', JavaScriptCatalog.as_view(), name='javascript-catalog'),
    url(r'^i18n/', include('django.conf.urls.i18n')),
    url(r'^', views.index, name='index'),
]
