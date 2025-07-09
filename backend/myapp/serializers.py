from rest_framework import serializers
from .models import Milestone, MilestonePercentile

class MilestonePercentileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MilestonePercentile
        fields = ['percentile', 'age_months']

class MilestoneSerializer(serializers.ModelSerializer):
    percentiles = serializers.SerializerMethodField()
    
    class Meta:
        model = Milestone
        fields = ['id', 'name', 'description', 'age_range', 
                'image', 'milestone_display', 'percentiles']
    def get_percentiles(self, obj):
        percentiles = obj.percentiles.all().order_by('percentile')
        return [
            {
                'percentile': p.percentile,
                'age_months': p.age_months
            } for p in percentiles
        ]

class MilestoneDetailSerializer(serializers.ModelSerializer):
    percentiles = MilestonePercentileSerializer(many=True, read_only=True)

    class Meta:
        model = Milestone
        fields = ['id', 'milestone_display', 'description', 'image', 'age_range', 'percentiles']
