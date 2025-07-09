from django.contrib import admin
from .models import Milestone, MilestonePercentile

class MilestonePercentileInline(admin.TabularInline):
    model = MilestonePercentile
    extra = 1
    fields = ('percentile', 'age_months')
    ordering = ('percentile',)

@admin.register(Milestone)
class MilestoneAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name', 'description')
    inlines = [MilestonePercentileInline]
