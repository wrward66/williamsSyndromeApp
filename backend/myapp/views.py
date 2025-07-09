from django.shortcuts import get_object_or_404
from rest_framework import generics, viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView

from .models import Milestone
from .serializers import MilestoneSerializer, MilestoneDetailSerializer


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'milestones': reverse('milestone-list', request=request, format=format),
    })


# List all milestones (basic info)

class MilestoneListAPIView(APIView):
    def get(self, request):
        milestones = Milestone.objects.prefetch_related('percentiles').all()
        serializer = MilestoneSerializer(milestones, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Detail view of a single milestone with its percentile data
class MilestoneDetailAPIView(generics.RetrieveAPIView):
    queryset = Milestone.objects.all()
    serializer_class = MilestoneDetailSerializer
    lookup_field = 'id'


# Optional: viewset if you use routers
class MilestoneViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Milestone.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return MilestoneDetailSerializer
        return MilestoneSerializer
