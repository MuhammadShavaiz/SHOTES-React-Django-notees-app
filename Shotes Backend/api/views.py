from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NoteSerializer
from .models import Note
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes=[{
        'Endpoint':'/notes/',
        'method': 'GET',
        'body':None,
        'description':'creation of note'
    },
    {
        'Endpoint':'/notes/id/',
        'method':'GET',
        'body':None,
        'description':'returns a single note'
    },
    {
        'Endpoint':'/notes/create/',
        'method':'POST',
        'body':{'body':""},
        'description':'creates a single note'
    },
    {
        'Endpoint':'/notes/id/update/',
        'method':'PUT',
        'body':{'body':""},
        'description':'update notes from sent data'
    },
    {
        'Endpoint':'/notes/id/delete/',
        'method':'DELETE',
        'body':None,
        'description':'deletes an existing note'
    }]
    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes,many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes,many = False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id = pk)
    serializer = NoteSerializer(instance = note, data = data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id = pk)
    note.delete()
    return Response('Note was deleted')

