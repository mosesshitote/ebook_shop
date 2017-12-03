from django.contrib import admin

from library.models import Author, Ebook, Loan

admin.site.register(Author, admin.ModelAdmin)
admin.site.register(Ebook, admin.ModelAdmin)
admin.site.register(Loan, admin.ModelAdmin)
