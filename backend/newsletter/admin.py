from django.contrib import admin

from newsletter.models import Newsletter, Subscriber, MailingRequest

admin.site.register(Newsletter, admin.ModelAdmin)
admin.site.register(Subscriber, admin.ModelAdmin)
admin.site.register(MailingRequest, admin.ModelAdmin)
