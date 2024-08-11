import { useState, useEffect } from "react";
import {
  fetchRequestPopular,
  fetchRequestTopRated,
  fetchRequestUpcoming,
  fetchRequestNowPlaying,
  fetchRequestHorror,
  fetchRequestComedy,
  fetchRequestAction,
  fetchRequestDrama,
  fetchRequestSciFi,
  fetchRequestTrailer
} from "../../function/api/fetchPost";

const useMoviesData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popular, setPopular] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [horror, setHorror] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [action, setAction] = useState([]);
  const [drama, setDrama] = useState([]);
  const [sciFi, setSciFi] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const popularData = await fetchRequestPopular();
        const trailerData = await fetchRequestTrailer();
        const topRatedData = await fetchRequestTopRated();
        const upcomingData = await fetchRequestUpcoming();
        const nowPlayingData = await fetchRequestNowPlaying();
        const horrorData = await fetchRequestHorror();
        const comedyData = await fetchRequestComedy();
        const actionData = await fetchRequestAction();
        const dramaData = await fetchRequestDrama();
        const sciFiData = await fetchRequestSciFi();

        if (popularData && popularData.results) setPopular(popularData.results);
        if (trailerData && trailerData.results) setTrailer(trailerData.results);
        if (topRatedData && topRatedData.results)
          setTopRated(topRatedData.results);
        if (upcomingData && upcomingData.results)
          setUpcoming(upcomingData.results);
        if (nowPlayingData && nowPlayingData.results)
          setNowPlaying(nowPlayingData.results);
        if (horrorData && horrorData.results) setHorror(horrorData.results);
        if (comedyData && comedyData.results) setComedy(comedyData.results);
        if (actionData && actionData.results) setAction(actionData.results);
        if (dramaData && dramaData.results) setDrama(dramaData.results);
        if (sciFiData && sciFiData.results) setSciFi(sciFiData.results);
      } catch (error) {
        console.error("Error fetching movie data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesData();
  }, []);

  return {
    isLoading,
    popular,
    trailer,
    topRated,
    upcoming,
    nowPlaying,
    horror,
    comedy,
    action,
    drama,
    sciFi
  };
};

export default useMoviesData;
