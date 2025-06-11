from django.shortcuts import render
from rest_framework import generics
from .models import AgeGroup, AgeMilestoneInfo
from .serializers import AgeGroupSerializer, AgeMilestoneInfoSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'age-groups': reverse('age-group-list', request=request, format=format),
        'all-milestones': reverse('all-milestones', request=request, format=format),
        'age-group-detail (example)': reverse('age-group-detail', args=[1], request=request, format=format),
    })
# List all age groups
class AgeGroupListAPIView(generics.ListAPIView):
    queryset = AgeGroup.objects.all()
    serializer_class = AgeGroupSerializer

# Retrieve milestone details for one age group
class AgeGroupDetailAPIView(generics.RetrieveAPIView):
    queryset = AgeGroup.objects.all()
    serializer_class = AgeGroupSerializer
    lookup_field = 'id'

# Optional: list all milestone entries (flat)
class AllMilestonesAPIView(generics.ListAPIView):
    queryset = AgeMilestoneInfo.objects.select_related('age_group')
    serializer_class = AgeMilestoneInfoSerializer
