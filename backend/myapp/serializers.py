from rest_framework import serializers
from .models import AgeGroup, AgeMilestoneInfo

class AgeMilestoneInfoSerializer(serializers.ModelSerializer):
    milestone_display = serializers.CharField(source='get_milestone_display', read_only=True)

    class Meta:
        model = AgeMilestoneInfo
        fields = ['id', 'milestone', 'milestone_display', 'description', 'image']

class AgeGroupSerializer(serializers.ModelSerializer):
    milestones = AgeMilestoneInfoSerializer(many=True, read_only=True)

    class Meta:
        model = AgeGroup
        fields = ['id', 'label', 'age_in_months', 'milestones']