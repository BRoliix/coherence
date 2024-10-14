import json
import pandas as pd
from fuzzywuzzy import fuzz
import heapq
from datetime import datetime

# Load the songs from songs.json
with open('./api/utils/songs.json') as f:
    data = json.load(f)

df = pd.DataFrame(data)

def calculate_heuristic(query, song):
    title_similarity = fuzz.partial_ratio(query.lower(), song['title'].lower())
    artist_similarity = fuzz.partial_ratio(query.lower(), song['artist'].lower())
    
    genre_similarity = 0
    if 'genre' in song and song['genre']:
        if isinstance(song['genre'], list):
            genre_similarity = max(fuzz.partial_ratio(query.lower(), genre.lower()) for genre in song['genre'])
        else:
            genre_similarity = fuzz.partial_ratio(query.lower(), song['genre'].lower())
    
    return max(title_similarity, artist_similarity, genre_similarity)

def calculate_cost(song):
    popularity_factor = 1 - (song['popularity'] / 100)
    
    year_factor = 0
    if 'year' in song and song['year']:
        current_year = datetime.now().year
        years_old = current_year - int(song['year'])
        year_factor = min(years_old / 10, 1)  # Cap at 10 years for normalization
    
    return (0.6 * popularity_factor) + (0.4 * year_factor)

def format_song(song):
    return {
        'title': song['title'],
        'artist': song['artist'],
        'url': song.get('url', ''),
        'popularity': song['popularity'],
        'genre': song.get('genre', ''),
        'year': song.get('year', None)
    }

def preprocess_query(query):
    return query.strip().lower()

def a_star_search(query):
    try:
        processed_query = preprocess_query(query)
        if not processed_query:
            return []  # Return empty list for empty queries

        pq = []
        visited = set()
        
        for idx, row in df.iterrows():
            h = calculate_heuristic(processed_query, row)
            g = calculate_cost(row)
            f = g + (100 - h)  # Lower f-score is better
            heapq.heappush(pq, (f, idx))
        
        ranked_results = []
        while pq:
            f, idx = heapq.heappop(pq)
            
            if idx in visited:
                continue
            
            visited.add(idx)
            current_song = df.iloc[idx].to_dict()
            ranked_results.append(format_song(current_song))
            
            # Explore "neighbors" (similar songs)
            for neighbor_idx, neighbor_row in df.iterrows():
                if neighbor_idx not in visited:
                    h = calculate_heuristic(processed_query, neighbor_row)
                    g = calculate_cost(neighbor_row)
                    f = g + (100 - h)
                    heapq.heappush(pq, (f, neighbor_idx))
            
            # Limit results to top 100 for performance
            if len(ranked_results) >= 100:
                break
        
        return ranked_results

    except Exception as e:
        print(f"Error in a_star_search: {e}")
        return []
