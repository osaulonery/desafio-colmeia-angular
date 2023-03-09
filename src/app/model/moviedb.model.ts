export interface MovieDB {
  adult: boolean;
  backdrop_path?: null;
  belongs_to_collection?: null;
  budget: number;
  genres?: GenresEntity[] | null;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: null[] | null;
  production_countries?: null[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: null[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenresEntity {
  id: number;
  name: string;
}

export interface Page {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}
