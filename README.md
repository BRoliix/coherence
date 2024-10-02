<h1 align=center> Coherence </h2>  

## Note(For Developers):  

1) Pull the repository to your local machine and then create a new branch   
2) In the new branch, enter the client folder and run `npm install` or `yarn install` to install all the dependencies in the terminal.  
4) Read the updated frontend code written by @Broliix and try to understand the algorithm code written by @Wanderer0074348  
5) Make changes to the frontend code and test it by running `npm run start` or `yarn start` in the terminal.
 
<b>Please make changes only to your branch, to merge to main, perform a pull request. Do not change the main branch. Thanks</b>



# A* Search Algorithm for Song Ranking - Documentation

This section explains the A* search algorithm for ranking songs based on a query. The algorithm is implemented in Python and uses heuristics to determine the similarity between the query and both the song title and artist.

## Function Definition

```python
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
```

### Line-by-Line Explanation:

#### 1. **`def a_star_search(query):`**
- Defines the function `a_star_search` which takes a query (user's search term) as input.

#### 2. **`pq = []`**
- Initializes an empty list `pq` that will act as a **priority queue** for storing the songs and their computed scores.

#### 3. **`for idx, row in df.iterrows():`**
- Iterates over each row in the dataset `df` which contains the songs. It returns both the **index** (`idx`) and **row** (song data).

#### 4. **`song_heuristic = fuzz.partial_ratio(query.lower(), row['title'].lower())`**
- Calculates a **heuristic** that measures the similarity between the query and the song's title. The `fuzz.partial_ratio` function (from the `fuzzywuzzy` library) returns a score between 0 and 100.

#### 5. **`artist_heuristic = fuzz.partial_ratio(query.lower(), row['artist'].lower())`**
- Similarly, this calculates the heuristic for how similar the query is to the artist's name. The same fuzzy matching is applied.

#### 6. **`h = max(song_heuristic, artist_heuristic)`**
- Chooses the maximum value between the song title heuristic and the artist heuristic. The final **heuristic** (`h`) is the best match for either the title or the artist.

#### 7. **`g = 100 - row['popularity']`**
- Calculates a score `g` based on the song's popularity. Less popular songs have higher `g` scores, meaning they are prioritized.

#### 8. **`f = g + (100 - h)`**
- The final score `f` is the sum of the **popularity score** (`g`) and the **heuristic penalty** (`100 - h`). Songs that are less popular and have a higher match get a lower `f` score.

#### 9. **`heapq.heappush(pq, (f, idx))`**
- Adds the song's score `(f, idx)` to the priority queue `pq`. The heap structure ensures that songs with the lowest `f` score can be retrieved first.

#### 10. **`ranked_results = []`**
- Initializes an empty list `ranked_results` to store the final sorted list of songs.

#### 11. **`while pq:`**
- This loop continues as long as there are items in the priority queue `pq`.

#### 12. **`f, idx = heapq.heappop(pq)`**
- Pops (removes) the song with the lowest score `f` from the priority queue. This gives the best-matching song first.

#### 13. **`ranked_results.append(df.iloc[idx].to_dict())`**
- Converts the song at index `idx` to a dictionary and adds it to the `ranked_results` list.

#### 14. **`return ranked_results`**
- Returns the list of ranked results based on the user's query.

### Key Concepts:

1. **Heuristic (`h`)**:
   - The heuristic measures how similar the query is to both the song's title and artist name. The higher the score (closer to 100), the better the match.

2. **Popularity Score (`g`)**:
   - Less popular songs are given a higher `g` score. This helps prioritize songs that might be less well-known but still relevant to the query.

3. **Final Score (`f`)**:
   - The total score `f` is a combination of the popularity score and the heuristic penalty. Lower `f` values indicate better matches.

### Summary:

The A* search algorithm in this implementation ranks songs based on their similarity to the user's query and adjusts for popularity. It prioritizes songs that match well with the query while giving a slight edge to lesser-known songs.
