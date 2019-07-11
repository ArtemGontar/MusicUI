import { Artwork } from "./artwork";
import { Resource } from "./resource";

export class Song extends Resource {
    albumName: string;
    artistName: string;
    artwork: Artwork;
    durationInMillis: number;
    genreNames: string[];
    name: string;
    trackNumber: number;
    url: string;
    releaseDate: Date;
    type: string;
  }