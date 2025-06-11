from django.contrib import admin
from .models import AgeGroup, AgeMilestoneInfo

class AgeMilestoneInfoInline(admin.TabularInline):
    model = AgeMilestoneInfo
    extra = 1  # Number of blank inlines shown
    fields = ('milestone', 'description', 'image')
    ordering = ('milestone',)

@admin.register(AgeGroup)
class AgeGroupAdmin(admin.ModelAdmin):
    list_display = ('label', 'age_in_months')
    ordering = ('age_in_months',)
    inlines = [AgeMilestoneInfoInline]

@admin.register(AgeMilestoneInfo)
class AgeMilestoneInfoAdmin(admin.ModelAdmin):
    list_display = ('age_group', 'milestone', 'get_milestone_display')
    list_filter = ('milestone', 'age_group')
    search_fields = ('description',)