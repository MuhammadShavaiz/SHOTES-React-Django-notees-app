from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes, name='routes'),
    path('notes/',views.getNotes, name='Get Notes'),
    path('notes/<str:pk>/update/',views.updateNote,name='Update Note'),
    path('notes/<str:pk>',views.getNote,name='Get Note'),   
]