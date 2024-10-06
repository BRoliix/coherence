# search/utils.py
import json as js
import pandas as pd
from fuzzywuzzy import fuzz
import heapq

# Load the songs from songs.json
with open('./api/utils/songs.json') as f:
    data = js.load(f)


df = pd.DataFrame(data)

# print(df.head())
# A* search algorithm
def a_star_search(query):
    pq = []
    for idx, row in df.iterrows():
        song_heuristic = fuzz.partial_ratio(query.lower(), row['title'].lower())
        artist_heuristic = fuzz.partial_ratio(query.lower(), row['artist'].lower())
        h = max(song_heuristic, artist_heuristic)
        g = 100 - row['popularity']
        f = g + (100 - h)
        heapq.heappush(pq, (f, idx))
    
    ranked_results = []
    while pq:
        f, idx = heapq.heappop(pq)
        ranked_results.append(df.iloc[idx].to_dict())
    
    return ranked_results
