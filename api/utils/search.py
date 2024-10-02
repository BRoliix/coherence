# search/utils.py
import pandas as pd
from fuzzywuzzy import fuzz
import heapq

# Sample data (You can fetch this from the database instead)
data = {
    'song': ['Blinding Lights', 'Shape of You', 'Levitating', 'Rockstar'],
    'artist': ['The Weeknd', 'Ed Sheeran', 'Dua Lipa', 'DaBaby'],
    'popularity': [90, 85, 80, 75]  # Popularity score
}

df = pd.DataFrame(data)

# A* search algorithm
def a_star_search(query):
    pq = []
    for idx, row in df.iterrows():
        song_heuristic = fuzz.partial_ratio(query.lower(), row['song'].lower())
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