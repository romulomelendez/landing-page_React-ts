import { useEffect, useContext } from "react";

import { Top } from "../../components/Top";
import { Benefits } from "../../components/Benefits";
import { Responsibilities } from "../../components/Responsibilities";
import { UserForm } from "../../components/UserForm";

import { PageContext } from "../../contexts/PageContext";

import { Container } from "./styles";

export const LandingPage = () => {
  type ApiDataProps = [
    {
      title: string;
      body: string;
      url: string;
      thumbnailUrl: string;
    }
  ];

  const {
    titles,
    setTitles,
    body,
    setBody,
    photos,
    setPhotos,
    mainImage,
    setMainImage,
  } = useContext(PageContext);

  useEffect(() => {
    const handleData = (data: ApiDataProps, endpoint: string) => {
      if (endpoint === "posts") {
        for (var i = 0; i < 7; i++) {
          body[0] === "" && body.shift();
          // @ts-ignore
          setBody((prevState) => [...prevState, data[i].body]);
        }
      } else if (endpoint === "todos") {
        for (var i = 0; i < 7; i++) {
          titles[0] === "" && titles.shift();
          // @ts-ignore
          setTitles((prevState) => [...prevState, data[i].title]);
        }
      } else {
        for (var i = 0; i < 7; i++) {
          photos[0] === "" && photos.shift();
          // @ts-ignore
          setPhotos((prevState) => [...prevState, data[i].url]);
          setMainImage(data[0].thumbnailUrl);
        }
      }
    };

    const handleApiCall = (endpoint: string) => {
      fetch(import.meta.env.VITE_BASE_API_URL + endpoint)
        .then((response) => response.json())
        .then((data) => handleData(data.slice(0, 10), endpoint));
    };

    handleApiCall("posts");
    handleApiCall("todos");
    handleApiCall("photos");
  }, []);

  return (
    <Container>
      <Top />
      <Benefits />
      <Responsibilities />
      <UserForm />
    </Container>
  );
};
