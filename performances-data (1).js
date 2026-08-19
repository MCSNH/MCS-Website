// MCS "Past Performances" data
// Each entry: season (e.g. "Fall 2025"), title (concert name), date (e.g. "December 2025"), image, youtubeId
//
// "image" is the primary content for each tile — a concert photo (path/filename). This should be set
// for every performance, since Dan wants all past concert images preserved and shown here.
//
// "youtubeId" is OPTIONAL — only set it if a public YouTube video exists for that performance. It's the
// part after "v=" in a YouTube URL (e.g. for youtube.com/watch?v=dQw4w9WgXcQ, youtubeId is "dQw4w9WgXcQ").
// When present, a small "Watch on YouTube" link appears on the tile alongside the image. When left as "",
// no video link shows — just the image.
//
// To add a performance, just add a new object to the array below, most recent first.

const PAST_PERFORMANCES = [
  { season: "Fall 2025", title: "Fall 2025 Concert", date: "December 2025", image: "photos/Fall%202025.jpg", youtubeId: "" },
  { season: "Spring 2025", title: "Spring 2025 Concert", date: "Spring 2025", image: "photos/Spring%202025.jpg", youtubeId: "" },
  { season: "Fall 2024", title: "Fall 2024 Concert", date: "December 2024", image: "photos/Fall%202024.jpg", youtubeId: "" },
  { season: "Spring 2024", title: "Spring 2024 Concert", date: "Spring 2024", image: "photos/Spring%202024.jpg", youtubeId: "" },
  { season: "Fall 2023", title: "Fall 2023 Concert", date: "Fall 2023", image: "photos/Fall%202023.jpg", youtubeId: "" },
  { season: "Spring 2023", title: "Spring 2023 Concert", date: "Spring 2023", image: "photos/Spring%202023.jpg", youtubeId: "" },
  { season: "Fall 2022", title: "Fall 2022 Concert", date: "Fall 2022", image: "photos/Fall%202022.jpg", youtubeId: "" },
  { season: "Spring 2022", title: "Spring 2022 Concert", date: "Spring 2022", image: "photos/Spring%202022.jpg", youtubeId: "" },
  { season: "Fall 2021", title: "Fall 2021 Concert", date: "Fall 2021", image: "photos/November%202021.jpg", youtubeId: "" },
  { season: "Spring 2021", title: "Spring 2021 Concert", date: "Spring 2021", image: "photos/Spring%202021.jpg", youtubeId: "" },
];
