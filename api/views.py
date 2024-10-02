# search/views.py
from django.http import JsonResponse
from .search import a_star_search

def search_music(request):
    query = request.GET.get('q', '')
    if query:
        results = a_star_search(query)
        return JsonResponse({'results': results})
    else:
        return JsonResponse({'error': 'No query provided'}, status=400)
