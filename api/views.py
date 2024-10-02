# search/views.py
from django.http import JsonResponse
from .utils.search import a_star_search
import json
import pandas as pd

with open('./api/utils/songs.json') as f:
    data = json.load(f)

df = pd.DataFrame(data)

def search_music(request):
    query = request.GET.get('q', '')
    if query:
        results = a_star_search(query)
        return JsonResponse({'results': results})
    else:
        return JsonResponse({'results': df.to_dict(orient='records')})


    
