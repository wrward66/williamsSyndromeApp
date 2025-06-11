from django.urls import path
from .views import AgeGroupListAPIView, AgeGroupDetailAPIView, AllMilestonesAPIView, api_root


urlpatterns = [
    path('', api_root, name='api-root'),
    path('age-groups/', AgeGroupListAPIView.as_view(), name='age-group-list'),
    path('age-groups/<int:id>/', AgeGroupDetailAPIView.as_view(), name='age-group-detail'),
    path('milestones/', AllMilestonesAPIView.as_view(), name='all-milestones'),
]