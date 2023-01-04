import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import requests from "../api/requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(undefined);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response);

    const movieId =
      response.data.results[
        // 랜덤으로 영화를 출력하기 위한 메서드(0~19 까지의 아이템 id정보를 랜덤으로 가져옴)
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: {
        append_to_response: "videos",
      },
    });
    setMovie(movieDetail);
  };

  //100글자 이상일때 잘라주는 함수
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  //undefined 처리
  if (!movie) {
    return <div>Loading...</div>;
  }

  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner__buttons">
            {/* 무비랑 비디오가 있을때만 출력할 수 있는 옵셔널 방식 ?  */}
            {movie.videos?.results[0]?.key ? (
              <button
                className="banner__button paly"
                onClick={() => setIsClicked(true)}
              >
                play
              </button>
            ) : null}
          </div>
          <h5 className="banner__description">
            {truncate(movie.overview, 100)}
          </h5>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else {
    return (
      <>
        {/* 비디오 삽입, 임베디드, 아이프레임 사용 */}
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1`}
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>x</button>
      </>
    );
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Banner;
