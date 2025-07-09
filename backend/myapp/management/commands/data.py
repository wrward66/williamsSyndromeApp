from django.core.management.base import BaseCommand
from myapp.models import Milestone, MilestonePercentile
import os
from django.core.files import File

class Command(BaseCommand):
    help = 'Seeds milestone and percentile data'

    def handle(self, *args, **options):
        media_path = os.path.join('media', 'milestones')

        sitting_without_support_milestone, created = Milestone.objects.get_or_create(
            name="sitting_without_support",
            defaults={
                'description': "When a child achieves this skill, they are able to sit up straight with the head erect (rather than leaning forward). They are able to balance the weight of their trunk and head without any external support or the use of arms and hands. One of the child's legs is usually flexed.",
                'age_range': '5.2-6.7 months',
                'milestone_display': 'Sitting Without Support'
            }
        )

        percentile_data = [
            (1, 3.8), (3, 4.1), (5, 4.3), (10, 4.6), (25, 5.2),
            (50, 5.9), (75, 6.7), (90, 7.5), (95, 8.0), (97, 8.4), (99, 9.2)
        ]

        for percentile, age in percentile_data:
            MilestonePercentile.objects.update_or_create(
                milestone=sitting_without_support_milestone,
                percentile=percentile,
                defaults={"age_months": age}
            )
        if created:
            image_path = os.path.join(media_path, 'sittingWithoutSupport.png')
            if os.path.exists(image_path):
                with open(image_path, 'rb') as img_file:
                    sitting_without_support_milestone.image.save('sittingWithoutSupport.png', File(img_file), save=True)












        standing_milestone, created = Milestone.objects.get_or_create(
            name="standing_with_assistance",
            defaults={
                'description': "The child can stand in an upright position on both feet while holding onto a stable object with both hands without leaning on it. While standing, the legs support most of the child's body weight.",
                'age_range': '6.6-8.4 months',
                'milestone_display': 'Standing With Assistance'
            }
        )
        
        standing_percentiles = [
            (1, 4.8), (3, 5.2), (5, 5.5), (10, 5.9), (25, 6.6),
            (50, 7.4), (75, 8.4), (90, 9.4), (95, 10.1), (97, 10.5), (99, 11.4)
        ]
        
        for percentile, age in standing_percentiles:
            MilestonePercentile.objects.update_or_create(
                milestone=standing_milestone,
                percentile=percentile,
                defaults={"age_months": age}
            )

        if created:
            image_path = os.path.join(media_path, 'standingWithAssistance.png')
            if os.path.exists(image_path):
                with open(image_path, 'rb') as img_file:
                    standing_milestone.image.save('standingWithAssistance.png', File(img_file), save=True)









        
        crawl_milestone, created = Milestone.objects.get_or_create(
            name="hands_and_knees_crawling",
            defaults={
                'description': "The child alternately moves forward or backwards on their hands and knees while the stomach does not touch the supporting surface.",
                'age_range': '7.4-9.3 months',
                'milestone_display': 'Hands and knees crawling'
            }
        )

        crawling_percentiles = [
            (1, 5.2), (3, 5.8), (5, 6.1), (10, 6.6), (25, 7.4),
            (50, 8.3), (75, 9.3), (90, 10.5), (95, 11.3), (97, 12.0), (99, 13.5)
        ]
        
        for percentile, age in crawling_percentiles:
            MilestonePercentile.objects.update_or_create(
                milestone=crawl_milestone,
                percentile=percentile,
                defaults={"age_months": age}
            )

        if created:
            image_path = os.path.join(media_path, 'handsAndKneesCrawling.png')
            if os.path.exists(image_path):
                with open(image_path, 'rb') as img_file:
                    crawl_milestone.image.save('handsAndKneesCrawling.png', File(img_file), save=True)







        
        assisted_walking_milestone, created = Milestone.objects.get_or_create(
            name="walking_with_assistance",
            defaults={
                'description': "The child can stand in an upright position with the back straight. The child makes sideways or forward steps by holding onto a stable object (e.g., furniture) with one or both hands. While one leg moves forward, the other leg supports most of the child's body weight.",
                'age_range': '8.2-10.0 months',
                'milestone_display': 'Walking with assistance'
            }
        )
        
        assisted_walk_percentiles = [
            (1, 5.9), (3, 6.6), (5, 6.9), (10, 7.4), (25, 8.2),
            (50, 9.0), (75, 10.0), (90, 11.0), (95, 11.8), (97, 12.4), (99, 13.7)
        ]
        
        for percentile, age in assisted_walk_percentiles:
            MilestonePercentile.objects.update_or_create(
                milestone=assisted_walking_milestone,
                percentile=percentile,
                defaults={"age_months": age}
            )

        if created:
            image_path = os.path.join(media_path, 'walkingWithAssistance.png')
            if os.path.exists(image_path):
                with open(image_path, 'rb') as img_file:
                    assisted_walking_milestone.image.save('walkingWithAssistance.png', File(img_file), save=True)







        stand_alone_milestone, created = Milestone.objects.get_or_create(
            name="standing alone",
            defaults={
                'description': "The child stands in an upright position on both feet and there is no contact with a person or object. While standing, the legs support 100% of the child's weight.",
                'age_range': '9.7-12.0 months',
                'milestone_display': 'Standing alone'
            }
        )

        stand_alone_percentile_data = [
            (1, 6.9), (3, 7.7), (5, 8.1), (10, 8.8), (25, 9.7),
            (50, 10.8), (75, 12.0), (90, 13.4), (95, 14.4), (97, 15.2), (99, 16.9)
        ]

        for percentile, age in stand_alone_percentile_data:
            MilestonePercentile.objects.update_or_create(
                milestone=stand_alone_milestone,
                percentile=percentile,
                defaults={"age_months": age}
            )

        if created:
            image_path = os.path.join(media_path, 'standingWithoutSupport.png')
            if os.path.exists(image_path):
                with open(image_path, 'rb') as img_file:
                    stand_alone_milestone.image.save('standingWithoutSupport.png', File(img_file), save=True)






        walking_alone_milestone, created = Milestone.objects.get_or_create(
            name="walking_without_support",
            defaults={
                'description': "The child can take steps independently without holding onto a person or object. When walking, one leg moves forward while the other supports most of the child's body weight.",
                'age_range': '11.0-13.1 months',
                'milestone_display': 'Walking without support'
            }
        )
        
        walking_alone_percentiles = [
            (1, 8.2), (3, 9.0), (5, 9.4), (10, 10.0), (25, 11.0),
            (50, 12.0), (75, 13.1), (90, 14.4), (95, 15.3), (97, 16.0), (99, 17.6)
        ]
        
        for percentile, age in walking_alone_percentiles:
            MilestonePercentile.objects.update_or_create(
                milestone=walking_alone_milestone,
                percentile=percentile,
                defaults={"age_months": age}
            )
        
        if created:
            image_path = os.path.join(media_path, 'walkingWithoutAssistance.png')
            if os.path.exists(image_path):
                with open(image_path, 'rb') as img_file:
                    walking_alone_milestone.image.save('walkingWithoutAssistance.png', File(img_file), save=True)





        self.stdout.write(self.style.SUCCESS(f'Successfully seeded data'))