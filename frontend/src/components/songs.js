const songs = [
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    popularity: 98
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    url: "https://www.youtube.com/watch?v=fHI8X4OXluQ",
    popularity: 97
  },
  {
    title: "Uptown Funk",
    artist: "Mark Ronson, Bruno Mars",
    url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
    popularity: 95
  },
  {
    title: "Rolling in the Deep",
    artist: "Adele",
    url: "https://www.youtube.com/watch?v=rYEDA3JcQqw",
    popularity: 96
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
    popularity: 94
  },
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
    popularity: 100
  },
  {
    title: "Havana",
    artist: "Camila Cabello, Pharrell Williams",
    url: "https://www.youtube.com/watch?v=BQ0mxQXmLsk",
    popularity: 93
  },
  {
    title: "Old Town Road",
    artist: "Lil Nas X, Billy Ray Cyrus",
    url: "https://www.youtube.com/watch?v=r7qovpFAGrQ",
    popularity: 92
  },
  {
    title: "Despacito",
    artist: "Luis Fonsi, Daddy Yankee",
    url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    popularity: 99
  },
  {
    title: "Shallow",
    artist: "Lady Gaga, Bradley Cooper",
    url: "https://www.youtube.com/watch?v=bo_efYhYU2A",
    popularity: 96
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    url: "https://www.youtube.com/watch?v=DyDfgMOUjCI",
    popularity: 94
  },
  {
    title: "Sunflower",
    artist: "Post Malone, Swae Lee",
    url: "https://www.youtube.com/watch?v=ApXoWvfEYVU",
    popularity: 95
  },
  {
    title: "Magnolia",
    artist: "Playboi Carti",
    url: "https://www.youtube.com/watch?v=oCveByMXd_0",
    popularity: 90
  },
  {
    title: "Shoota",
    artist: "Playboi Carti, Lil Uzi Vert",
    url: "https://www.youtube.com/watch?v=RNykxc94xlc",
    popularity: 89
  },
  {
    title: "Wokeuplikethis*",
    artist: "Playboi Carti, Lil Uzi Vert",
    url: "https://www.youtube.com/watch?v=-8u9pn8gC5Y",
    popularity: 88
  },
  {
    title: "Long Time",
    artist: "Playboi Carti",
    url: "https://www.youtube.com/watch?v=dgwmwA3FvPQ",
    popularity: 85
  },
  {
    title: "R.I.P.",
    artist: "Playboi Carti",
    url: "https://www.youtube.com/watch?v=7YucfMZsR44",
    popularity: 87
  },
  {
    title: "Fell in Luv",
    artist: "Playboi Carti, Bryson Tiller",
    url: "https://www.youtube.com/watch?v=1WR6PL-1xpE",
    popularity: 83
  },
  {
    title: "Location",
    artist: "Playboi Carti",
    url: "https://www.youtube.com/watch?v=PVwG1t-NVAA",
    popularity: 84
  },
  {
    title: "Sky",
    artist: "Playboi Carti",
    url: "https://www.youtube.com/watch?v=l0U7SxXHkPY",
    popularity: 86
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw",
    popularity: 95
  },
  {
    title: "Don't Start Now",
    artist: "Dua Lipa",
    url: "https://www.youtube.com/watch?v=oygrmJFKYZY",
    popularity: 94
  },
  {
    title: "Circles",
    artist: "Post Malone",
    url: "https://www.youtube.com/watch?v=wXhTHyIgQ_U",
    popularity: 92
  },
  {
    title: "Dynamite",
    artist: "BTS",
    url: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
    popularity: 96
  },
  {
    title: "Peaches",
    artist: "Justin Bieber",
    url: "https://www.youtube.com/watch?v=tQ0yjYUFKAE",
    popularity: 91
  },
  {
    title: "Sicko Mode",
    artist: "Travis Scott",
    url: "https://www.youtube.com/watch?v=6ONRf7h3Mdk",
    popularity: 98
  },
  {
    title: "God's Plan",
    artist: "Drake",
    url: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
    popularity: 97
  },
  {
    title: "Rockstar",
    artist: "Post Malone, 21 Savage",
    url: "https://www.youtube.com/watch?v=UceaB4D0jpo",
    popularity: 96
  },
  {
  title: "Let Her Go",
    artist: "Passenger",
    url: "https://www.youtube.com/watch?v=RBumgq5yV8A",
    popularity: 92
  },
  {
    title: "Fix You",
    artist: "Coldplay",
    url: "https://www.youtube.com/watch?v=k4RgwK3C7Yc",
    popularity: 95
  },
  {
    title: "All I Want",
    artist: "Kodaline",
    url: "https://www.youtube.com/watch?v=8qSg4XgS1mA",
    popularity: 91
  },
  {
    title: "I Will Follow You into the Dark",
    artist: "Death Cab for Cutie",
    url: "https://www.youtube.com/watch?v=FOYb2kFlhco",
    popularity: 89
  },
  {
    title: "Say Something",
    artist: "A Great Big World ft. Christina Aguilera",
    url: "https://www.youtube.com/watch?v=6Ox4c8nL1cA",
    popularity: 90
  },
  {
    title: "Breath Me",
    artist: "Sia",
    url: "https://www.youtube.com/watch?v=ghPcYqnG7yw",
    popularity: 88
  },
  {
    title: "Breathe Me",
    artist: "Sia",
    url: "https://www.youtube.com/watch?v=ghPcYqnG7yw",
    popularity: 88
  },
  {
    title: "The A Team",
    artist: "Ed Sheeran",
    url: "https://www.youtube.com/watch?v=8M-0F6sUGK0",
    popularity: 90
  },
  {
    title: "Need You Now",
    artist: "Lady A",
    url: "https://www.youtube.com/watch?v=1s8F9yI5C_Y",
    popularity: 89
  },
  {
    title: "Goodbye My Lover",
    artist: "James Blunt",
    url: "https://www.youtube.com/watch?v=QW0rV-KHMA0",
    popularity: 92
  },
  {
    title: "Lucid Dreams",
    artist: "Juice WRLD",
    url: "https://www.youtube.com/watch?v=mzB1VGEGcSU",
    popularity: 95
  },
  {
    title: "Goosebumps",
    artist: "Travis Scott, Kendrick Lamar",
    url: "https://www.youtube.com/watch?v=Dst9gZkq1a8",
    popularity: 94
  },
  {
    title: "In My Feelings",
    artist: "Drake",
    url: "https://www.youtube.com/watch?v=DRS_PpOrUZ4",
    popularity: 93
  },
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    url: "https://www.youtube.com/watch?v=tvTRZJ-4EyI",
    popularity: 92
  },
  {
    title: "No Tears Left to Cry",
    artist: "Ariana Grande",
    url: "https://www.youtube.com/watch?v=ffxKSjUwKdU",
    popularity: 91
  },
  {
    title: "Thank U, Next",
    artist: "Ariana Grande",
    url: "https://www.youtube.com/watch?v=gl1aHhXnN1k",
    popularity: 90
  },
  {
    title: "God Is A Woman",
    artist: "Ariana Grande",
    url: "https://www.youtube.com/watch?v=kHLHSlExFis",
    popularity: 89
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    url: "https://www.youtube.com/watch?v=7wtfhZwyrcc",
    popularity: 98
  },
  {
    title: "Thunder",
    artist: "Imagine Dragons",
    url: "https://www.youtube.com/watch?v=fKopy74weus",
    popularity: 97
  },
  {
    title: "Heathens",
    artist: "Twenty One Pilots",
    url: "https://www.youtube.com/watch?v=UprcpdwuwCg",
    popularity: 96
  },
  {
    title: "Stressed Out",
    artist: "Twenty One Pilots",
    url: "https://www.youtube.com/watch?v=pXRviuL6vMY",
    popularity: 95
  },
  {
    title: "Paris",
    artist: "The Chainsmokers",
    url: "https://www.youtube.com/watch?v=RhU9MZ98jxo",
    popularity: 94
  },
  {
    title: "Closer",
    artist: "The Chainsmokers, Halsey",
    url: "https://www.youtube.com/watch?v=PT2_F-1esPk",
    popularity: 93
  },
  {
    title: "Stay",
    artist: "Zedd, Alessia Cara",
    url: "https://www.youtube.com/watch?v=yWEK4v9AVKQ",
    popularity: 92
  },
  {
    title: "The Middle",
    artist: "Zedd, Maren Morris, Grey",
    url: "https://www.youtube.com/watch?v=M3mJkSqZbX4",
    popularity: 91
  },
  {
    title: "Let Me Love You",
    artist: "DJ Snake, Justin Bieber",
    url: "https://www.youtube.com/watch?v=euCqAq6BRa4",
    popularity: 90
  },
  {
    title: "Cold Water",
    artist: "Major Lazer, Justin Bieber, MØ",
    url: "https://www.youtube.com/watch?v=a59gmGkq_pw",
    popularity: 89
  },
  {
    title: "One Dance",
    artist: "Drake, Wizkid, Kyla",
    url: "https://www.youtube.com/watch?v=iAbnEUA0wpA",
    popularity: 88
  },
  {
    title: "Work",
    artist: "Rihanna, Drake",
    url: "https://www.youtube.com/watch?v=HL1UzIK-flA",
    popularity: 87
  },
  {
    title: "Wild Thoughts",
    artist: "DJ Khaled, Rihanna, Bryson Tiller",
    url: "https://www.youtube.com/watch?v=fyaI4-5849w",
    popularity: 86
  },
  {
    title: "Love Yourself",
    artist: "Justin Bieber",
    url: "https://www.youtube.com/watch?v=oyEuk8j8imI",
    popularity: 85
  },
  {
    title: "Sorry",
    artist: "Justin Bieber",
    url: "https://www.youtube.com/watch?v=fRh_vgS2dFE",
    popularity: 84
  },
  {
    title: "Cardigan",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=0KSOMA3QBU0",
    popularity: 95
  },
  {
    title: "All Too Well (10 Minute Version)",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=HgP5aDr7hiE",
    popularity: 97
  },
  {
    title: "You Belong with Me",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=VuNIsY6JdUw",
    popularity: 98
  },
  {
    title: "Bad Blood (Taylor's Version)",
    artist: "Taylor Swift ft. Kendrick Lamar",
    url: "https://www.youtube.com/watch?v=QcIy9NiNbmo",
    popularity: 96
  },
  {
    title: "Money Trees",
    artist: "Kendrick Lamar ft. Jay Rock",
    url: "https://www.youtube.com/watch?v=7F9lDjbM9yM",
    popularity: 92
  },
  {
    title: "Sicko Mode",
    artist: "Travis Scott",
    url: "https://www.youtube.com/watch?v=6ONRfRpX8uE",
    popularity: 94
  },
  {
    title: "Rap God",
    artist: "Eminem",
    url: "https://www.youtube.com/watch?v=XbGs_fZUsxU",
    popularity: 93
  },
  {
    title: "Goosebumps",
    artist: "Travis Scott",
    url: "https://www.youtube.com/watch?v=OwUmj1bhZgI",
    popularity: 91
  },
  {
    title: "Bodak Yellow",
    artist: "Cardi B",
    url: "https://www.youtube.com/watch?v=PT2_FlM8Y0c",
    popularity: 96
  },
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    url: "https://www.youtube.com/watch?v=tvTR-Z8T3Q0",
    popularity: 95
  },
  {
    title: "The Box",
    artist: "Roddy Ricch",
    url: "https://www.youtube.com/watch?v=8YZ5z6gZq9Y",
    popularity: 94
  },
  {
    title: "Shook Ones, Pt. II",
    artist: "Mobb Deep",
    url: "https://www.youtube.com/watch?v=0C8T3zJYp3k",
    popularity: 89
  },
  {
    title: "Dumb It Down",
    artist: "Lupe Fiasco",
    url: "https://www.youtube.com/watch?v=f6WoIYgZyLk",
    popularity: 85
  },
  {
    title: "All the Stars",
    artist: "Kendrick Lamar, SZA",
    url: "https://www.youtube.com/watch?v=G9m3F5QJYzE",
    popularity: 90
  },
  {
    title: "Rockstar",
    artist: "Post Malone ft. 21 Savage",
    url: "https://www.youtube.com/watch?v=UjxPZxwD1rI",
    popularity: 97
  },
  {
    title: "Hotline Bling",
    artist: "Drake",
    url: "https://www.youtube.com/watch?v=uxD7yGJ9hSg",
    popularity: 96
  },
  {
    title: "God's Plan",
    artist: "Drake",
    url: "https://www.youtube.com/watch?v=xpVnGzZp8AI",
    popularity: 98
  },
  {
    title: "N.Y. State of Mind",
    artist: "Nas",
    url: "https://www.youtube.com/watch?v=8qJ62-GZ5Fw",
    popularity: 87
  },
  {
    title: "Electric Relaxation",
    artist: "A Tribe Called Quest",
    url: "https://www.youtube.com/watch?v=xFSvWbQNkYI",
    popularity: 88
  },
  {
    title: "Juicy",
    artist: "The Notorious B.I.G.",
    url: "https://www.youtube.com/watch?v=8aR_Mz2WDo0",
    popularity: 90
  },
  {
    title: "The Real Slim Shady",
    artist: "Eminem",
    url: "https://www.youtube.com/watch?v=YVkx0C5cXg8",
    popularity: 91
  },
  {
    title: "Mo Money Mo Problems",
    artist: "The Notorious B.I.G. ft. Puff Daddy, Mase",
    url: "https://www.youtube.com/watch?v=TV8pF3vK62E",
    popularity: 85
  },
  {
    title: "Crew",
    artist: "GoldLink ft. Brent Faiyaz, Shy Glizzy",
    url: "https://www.youtube.com/watch?v=QpgE6_PAc2s",
    popularity: 84
  },
  {
    title: "Lost",
    artist: "Chance the Rapper",
    url: "https://www.youtube.com/watch?v=Qbzb9dr8n5g",
    popularity: 82
  },
  {
    title: "Feel No Ways",
    artist: "Drake",
    url: "https://www.youtube.com/watch?v=GYCQ3t0Rh8M",
    popularity: 80
  },
  {
    title: "B.M.F. (Blowin' Money Fast)",
    artist: "Rick Ross ft. Styles P",
    url: "https://www.youtube.com/watch?v=7RtvNMRy6fE",
    popularity: 79
  },
  {
    title: "Willow",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=4M0K43w9g3A",
    popularity: 92
  },
  {
    title: "Shake It Off",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=nfWlot6h_30",
    popularity: 96
  },
  {
    title: "Look What You Made Me Do",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=3tmd-ClpJ8M",
    popularity: 94
  },
  {
    title: "The Man",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=G6tYd7B1Sx4",
    popularity: 93
  },
  {
    title: "Loyalty.",
    artist: "Kendrick Lamar ft. Rihanna",
    url: "https://www.youtube.com/watch?v=v8_FZyDznn4",
    popularity: 91
  },
  {
    title: "For What It's Worth",
    artist: "Buffalo Springfield",
    url: "https://www.youtube.com/watch?v=ot8yM3TjVho",
    popularity: 80
  },
  {
    title: "Godzilla",
    artist: "Eminem ft. Juice WRLD",
    url: "https://www.youtube.com/watch?v=0j_78cJKnqc",
    popularity: 97
  },
  {
    title: "I Like It",
    artist: "Cardi B ft. Bad Bunny & J Balvin",
    url: "https://www.youtube.com/watch?v=1CZgk53Z5jI",
    popularity: 95
  },
  {
    title: "Creep",
    artist: "Radiohead",
    url: "https://www.youtube.com/watch?v=6mZ9lH0qF1c",
    popularity: 88
  },
  {
    title: "Empire State of Mind",
    artist: "Jay-Z ft. Alicia Keys",
    url: "https://www.youtube.com/watch?v=0U0L1HfC0D4",
    popularity: 92
  },
  {
    title: "Hot Girl Bummer",
    artist: "Blackbear",
    url: "https://www.youtube.com/watch?v=8ElMoGlC7zA",
    popularity: 87
  },
  {
    title: "Old Town Road",
    artist: "Lil Nas X ft. Billy Ray Cyrus",
    url: "https://www.youtube.com/watch?v=w2Ov5jzm3j8",
    popularity: 99
  },
  {
    title: "Finesse (Remix)",
    artist: "Bruno Mars ft. Cardi B",
    url: "https://www.youtube.com/watch?v=YtH2pH9o8pk",
    popularity: 90
  },
  {
    title: "Lose Yourself",
    artist: "Eminem",
    url: "https://www.youtube.com/watch?v=8D18Vg0N8Q8",
    popularity: 95
  },
  {
    title: "R.I.C.O.",
    artist: "Meek Mill ft. Drake",
    url: "https://www.youtube.com/watch?v=GNe8WQQ_d8A",
    popularity: 87
  },
  {
    title: "Slide",
    artist: "Calvin Harris ft. Frank Ocean & Migos",
    url: "https://www.youtube.com/watch?v=TLF3eqOsmyM",
    popularity: 89
  },
  {
    title: "Runaway",
    artist: "Kanye West ft. Pusha T",
    url: "https://www.youtube.com/watch?v=PlSi1f1P5Nk",
    popularity: 91
  },
  {
    title: "Juicy J",
    artist: "A$AP Rocky",
    url: "https://www.youtube.com/watch?v=4S8z1JssxgA",
    popularity: 84
  },
  {
    title: "Panda",
    artist: "Desiigner",
    url: "https://www.youtube.com/watch?v=Zr5V68j4b5U",
    popularity: 86
  },
  {
    title: "Nights",
    artist: "Frank Ocean",
    url: "https://www.youtube.com/watch?v=KpWwYPS9ebc",
    popularity: 90
  },
  {
    title: "Stay High",
    artist: "Brittany Howard",
    url: "https://www.youtube.com/watch?v=6R_E6k5C9W4",
    popularity: 83
  },
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    url: "https://www.youtube.com/watch?v=tvTR-Z8T3Q0",
    popularity: 96
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
    popularity: 95
  },
  {
    title: "Slow Dancing in a Burning Room",
    artist: "John Mayer",
    url: "https://www.youtube.com/watch?v=JkJgN5nF7IY",
    popularity: 90
  },
  {
    title: "Stay",
    artist: "Rihanna ft. Mikky Ekko",
    url: "https://www.youtube.com/watch?v=J7gKQ1Qe4g0",
    popularity: 92
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    popularity: 98
  },
  {
    title: "The Night We Met",
    artist: "Lord Huron",
    url: "https://www.youtube.com/watch?v=KtlgYxa6BMU",
    popularity: 89
  },
  {
    title: "Gravity",
    artist: "Sara Bareilles",
    url: "https://www.youtube.com/watch?v=8A6KqTe91T0",
    popularity: 87
  },
  {
    title: "Say You Won't Let Go",
    artist: "James Arthur",
    url: "https://www.youtube.com/watch?v=0yRjP0v7mI0",
    popularity: 93
  },
  {
    title: "All of Me",
    artist: "John Legend",
    url: "https://www.youtube.com/watch?v=450p7goxZqg",
    popularity: 96
  },
  {
    title: "Skinny Love",
    artist: "Bon Iver",
    url: "https://www.youtube.com/watch?v=ss1wF9U1hL8",
    popularity: 88
  },
  {
    title: "Let Her Go",
    artist: "Passenger",
    url: "https://www.youtube.com/watch?v=RBumgq5yVrA",
    popularity: 94
  },
  {
    title: "Holocene",
    artist: "Bon Iver",
    url: "https://www.youtube.com/watch?v=6E48kB4O7a4",
    popularity: 85
  },
  {
    title: "I Will Follow You into the Dark",
    artist: "Death Cab for Cutie",
    url: "https://www.youtube.com/watch?v=UqK8d0mp1eE",
    popularity: 91
  },
  {
    title: "Breathe Me",
    artist: "Sia",
    url: "https://www.youtube.com/watch?v=ghPcYqn4Gow",
    popularity: 89
  },
  {
    title: "Tears Dry on Their Own",
    artist: "Amy Winehouse",
    url: "https://www.youtube.com/watch?v=jEy9zICgWAc",
    popularity: 88
  },
  {
    title: "Budapest",
    artist: "George Ezra",
    url: "https://www.youtube.com/watch?v=VZ5q7Hn8G10",
    popularity: 90
  },
  {
    title: "When We Were Young",
    artist: "Adele",
    url: "https://www.youtube.com/watch?v=Y9b0XK8x1qA",
    popularity: 92
  },
  {
    title: "Tears Dry on Their Own",
    artist: "Amy Winehouse",
    url: "https://www.youtube.com/watch?v=jEy9zICgWAc",
    popularity: 88
  },
  {
    title: "The Night We Met",
    artist: "Lord Huron",
    url: "https://www.youtube.com/watch?v=KtlgYxa6BMU",
    popularity: 89
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
    popularity: 95
  },
  {
    title: "Creep",
    artist: "Radiohead",
    url: "https://www.youtube.com/watch?v=XFh7u3zD3eU",
    popularity: 90
  },
  {
    title: "Back to December",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=QUwxV2Dxi2g",
    popularity: 88
  },
  {
    title: "Skinny Love",
    artist: "Bon Iver",
    url: "https://www.youtube.com/watch?v=ss1wF9U1hL8",
    popularity: 88
  },
  {
    title: "I Will Always Remember You",
    artist: "Miley Cyrus",
    url: "https://www.youtube.com/watch?v=sqY03N0VY5I",
    popularity: 85
  },
  {
    title: "Everybody Hurts",
    artist: "R.E.M.",
    url: "https://www.youtube.com/watch?v=2W0n7OQz8a8",
    popularity: 91
  },
  {
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    url: "https://www.youtube.com/watch?v=bC7nRjK1XwE",
    popularity: 94
  },
  {
    title: "Hurt",
    artist: "Nine Inch Nails / Johnny Cash",
    url: "https://www.youtube.com/watch?v=8AHCfZTRGiI",
    popularity: 96
  },
  {
    title: "Aimer - Ref:rain",
    url: "https://www.youtube.com/watch?v=H4S26LJViEg",
    anime: "Your Lie in April",
    popularity: 92
  },
  {
    title: "Yiruma - River Flows in You",
    url: "https://www.youtube.com/watch?v=7maW7c7FYwE",
    anime: "Twilight",
    popularity: 94
  },
  {
    title: "Kenshi Yonezu - Peace Sign",
    url: "https://www.youtube.com/watch?v=0dZy6rbe7s0",
    anime: "My Hero Academia",
    popularity: 95
  },
  {
    title: "LiSA - Gurenge",
    url: "https://www.youtube.com/watch?v=8Z5FlUuEDxE",
    anime: "Demon Slayer",
    popularity: 97
  },
  {
    title: "Hikaru Nara",
    artist: "Goose house",
    url: "https://www.youtube.com/watch?v=xdDZrrw-9aY",
    anime: "Your Lie in April",
    popularity: 90
  },
  {
    title: "Yuki Kajiura - To the Beginning",
    url: "https://www.youtube.com/watch?v=GcrNq7i4-N4",
    anime: "Fate/Zero",
    popularity: 88
  },
  {
    title: "Shinzo wo Sasageyo!",
    artist: "Linked Horizon",
    url: "https://www.youtube.com/watch?v=bcL68lS4-0c",
    anime: "Attack on Titan",
    popularity: 92
  },
  {
    title: "Kono Sekai no Tanoshimi wo Shiru",
    artist: "Kenshi Yonezu",
    url: "https://www.youtube.com/watch?v=sGJ65EAnK94",
    anime: "The Promised Neverland",
    popularity: 91
  },
  {
    title: "Aimer - I beg you",
    url: "https://www.youtube.com/watch?v=n2Ex5GQde3A",
    anime: "Fate/stay night: Heaven's Feel",
    popularity: 93
  },
  {
    title: "Daisuke - Rhapsody in Blue",
    url: "https://www.youtube.com/watch?v=lj1Xi92ywOY",
    anime: "Chihayafuru",
    popularity: 86
  },
  
  {
    title: "Blue Bird",
    artist: "Ikimonogakari",
    url: "https://www.youtube.com/watch?v=U8jWekHtRKE",
    anime: "Naruto Shippuden",
    popularity: 91
  },
  {
    title: "Unravel",
    artist: "TK from Ling Tosite Sigure",
    url: "https://www.youtube.com/watch?v=5Gx0QNL2M48",
    anime: "Tokyo Ghoul",
    popularity: 95
  },
  {
    title: "Lilium",
    artist: "Yuki Kajiura",
    url: "https://www.youtube.com/watch?v=4YH1jDEy8g8",
    anime: "Elfen Lied",
    popularity: 89
  },
  {
    title: "Sakura",
    artist: "Ikimono Gakari",
    url: "https://www.youtube.com/watch?v=wh5pT-O9Y1g",
    anime: "Naruto",
    popularity: 92
  },
  {
    title: "Guren no Yumiya",
    artist: "Linked Horizon",
    url: "https://www.youtube.com/watch?v=TT9ZzI8G8oM",
    anime: "Attack on Titan",
    popularity: 94
  },
  {
    title: "Kimi no Sei",
    artist: "Aimer",
    url: "https://www.youtube.com/watch?v=QgWfxBdnI8U",
    anime: "Your Lie in April",
    popularity: 90
  },
  {
    title: "Silhouette",
    artist: "Kana-Boon",
    url: "https://www.youtube.com/watch?v=Akyd4dNZ1aE",
    anime: "Naruto Shippuden",
    popularity: 91
  },
  {
    title: "Kono Subarashii Sekai ni Shukufuku wo!",
    artist: "Machico",
    url: "https://www.youtube.com/watch?v=td3UccIinCk",
    anime: "KonoSuba",
    popularity: 88
  },
  {
    title: "Kisetsu wa Tsugitsugi Shindeiku",
    artist: "Eir Aoi",
    url: "https://www.youtube.com/watch?v=6ZPHG8pudMg",
    anime: "Tokyo Ghoul",
    popularity: 90
  },
  {
    title: "Lover's End",
    artist: "Hiroyuki Sawano",
    url: "https://www.youtube.com/watch?v=3ZBx9oVv1qE",
    anime: "Attack on Titan",
    popularity: 89
  },
  {
    title: "Circles",
    artist: "Post Malone",
    url: "https://www.youtube.com/watch?v=8pD2Wk0F2aY",
    popularity: 91
  },
  {
    title: "Mood",
    artist: "24kGoldn ft. Iann Dior",
    url: "https://www.youtube.com/watch?v=J76DgCjG6u0",
    popularity: 92
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    url: "https://www.youtube.com/watch?v=LT2lC1u3Rno",
    popularity: 90
  },
  {
    title: "Take My Breath",
    artist: "The Weeknd",
    url: "https://www.youtube.com/watch?v=OkY6BrE22H4",
    popularity: 89
  },
  {
    title: "Bad Habits",
    artist: "Ed Sheeran",
    url: "https://www.youtube.com/watch?v=Jj7TzM4m6M8",
    popularity: 93
  },
  {
    title: "deja vu",
    artist: "Olivia Rodrigo",
    url: "https://www.youtube.com/watch?v=Vjp_d-CdK1A",
    popularity: 94
  },
  {
    title: "Adore You",
    artist: "Harry Styles",
    url: "https://www.youtube.com/watch?v=Yx1yJmmt7Ro",
    popularity: 90
  },
  {
    title: "Sicko Mode",
    artist: "Travis Scott",
    url: "https://www.youtube.com/watch?v=6z2k6dB5rx0",
    popularity: 95
  },
  {
    title: "Dance Monkey",
    artist: "Tones and I",
    url: "https://www.youtube.com/watch?v=q0hyYWKXF0Q",
    popularity: 96
  },
  {
    title: "Stitches",
    artist: "Shawn Mendes",
    url: "https://www.youtube.com/watch?v=V1n8nSYV1g0",
    popularity: 90
  },
  {
    title: "What Do You Mean?",
    artist: "Justin Bieber",
    url: "https://www.youtube.com/watch?v=3A_2Vf0Cw3U",
    popularity: 94
  },
  {
    title: "Numb",
    artist: "Linkin Park",
    url: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    popularity: 97
  },
  {
    title: "Chasing Cars",
    artist: "Snow Patrol",
    url: "https://www.youtube.com/watch?v=GemKq5WkP0A",
    popularity: 89
  },
  {
    title: "Riptide",
    artist: "Vance Joy",
    url: "https://www.youtube.com/watch?v=uZ4tX5J6I8E",
    popularity: 93
  },
  {
    title: "We Are Never Ever Getting Back Together",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=I0w_AlrY4Dg",
    popularity: 92
  },
  {
    title: "Lose Control",
    artist: "Meduza, Becky Hill, Goodboys",
    url: "https://www.youtube.com/watch?v=G_n9ktxzWrg",
    popularity: 90
  },
  {
    title: "Take You Dancing",
    artist: "Jason Derulo",
    url: "https://www.youtube.com/watch?v=oI8QzpbH4xg",
    popularity: 91
  },
  {
    title: "Best Part",
    artist: "Daniel Caesar ft. H.E.R.",
    url: "https://www.youtube.com/watch?v=oiWgY2YfSrg",
    popularity: 88
  },
  {
    title: "Say So",
    artist: "Doja Cat",
    url: "https://www.youtube.com/watch?v=0EVfY5mH2hI",
    popularity: 92
  },
];

export default songs;
