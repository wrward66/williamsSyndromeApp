from django.urls import path
from .views import api_root, MilestoneListAPIView, MilestoneDetailAPIView

urlpatterns = [
    path('', api_root, name='api-root'),
    path('milestones/', MilestoneListAPIView.as_view(), name='milestone-list'),
    path('milestones/<int:id>/', MilestoneDetailAPIView.as_view(), name='milestone-detail'),
]