from django.db import models

class Milestone(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    age_range = models.CharField(max_length=50, blank=True)
    image = models.ImageField(upload_to='milestones/', blank=True, null=True)
    milestone_display = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.milestone_display or self.milestone

class MilestonePercentile(models.Model):
    milestone = models.ForeignKey(Milestone, related_name="percentiles", on_delete=models.CASCADE)
    percentile = models.IntegerField()
    age_months = models.FloatField()

    class Meta:
        unique_together = ("milestone", "percentile")
        ordering = ["percentile"]

    def __str__(self):
        return f"{self.milestone}: {self.percentile}th - {self.age_months} months"
