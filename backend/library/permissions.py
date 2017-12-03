from rest_framework import permissions


class LoanPermission(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user == obj.client and request.user.is_staff

