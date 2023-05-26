export type ActorProps = {
    profile_path: string;
    biography: string;
    name: string;
};

export type MovieProps = {
    backdrop_path: string
    vote_average: number,
    vote_count: number,
    original_title: string,
    release_date: string,
    overview: string,
    poster_path: string,
    id: number,
    title: string
}

export type MovieCastProps = {
    cast: Array<{
        id: string | number;
        name: string;
    }>;
    crew: Array<{
        job: string;
        name: string;
        id: string | number;
        department: string;
      }>;
}

export type MovieGenresProps = Array<{
    name: string
}>;

export type ActorsProps = Array<{
    profile_path: string
    name: string
    id: number
}>
