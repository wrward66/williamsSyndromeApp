from django.db import models

# Create your models here.
MILESTONE_CHOICES = [
    ('sit', 'Sitting without support'),
    ('stand', 'Standing with assistance'),
    ('crawl', 'Hands-and-knees crawling'),
    ('walk', 'Walking with assisstance'),
    ('standalone', 'Standing without support'),
    ('walkalone', 'Walking without support'),
]

class AgeGroup(models.Model):
    """
    Represents a specific age or age range (e.g., '6 months', '12–18 months').
    """
    label = models.CharField(max_length=20, unique=True)  # e.g., '6 months', '12-18 months'
    age_in_months = models.PositiveIntegerField(help_text="Use the lower bound in months for sorting")

    class Meta:
        ordering = ['age_in_months']

    def __str__(self):
        return self.label


class AgeMilestoneInfo(models.Model):
    """
    Links an age group to specific milestone information.
    """
    age_group = models.ForeignKey(AgeGroup, on_delete=models.CASCADE, related_name='milestones')
    milestone = models.CharField(max_length=10, choices=MILESTONE_CHOICES)
    description = models.TextField(help_text="Description of typical milestone achievement at this age")
    image = models.ImageField(upload_to='milestone_images/', blank=True, null=True, help_text="Optional image representing the milestone")

    def __str__(self):
        return f"{self.age_group.label} - {self.get_milestone_display()}"