import useSWR from "swr";

import fetcher from "../lib/fetcher";
import { Track } from "./Track";

type TopTracks = {
  tracks: Song[];
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export function Tracks() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  console.log(data)
  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
