import { getTopTracks } from "../../lib/spotify";

const defaultHeader = {
  'Content-Type': 'application/json',
  'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
};

export const get = async ({ _, request }) => {
    if (request.method !== 'GET') {
      return new Response(undefined, { status: 400 });
    }

    const response = await getTopTracks();
    const { items } = await response.json();
  
    const tracks = items.slice(0, 10).map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name
    }));

    return new Response(JSON.stringify(tracks), {
      status: 200,
      headers: defaultHeader,
    });
  };