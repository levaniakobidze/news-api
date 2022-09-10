import React, { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

interface INews {
  data: {
    author: string;
    content: string;
    date: string;
    id: string;
    imageUrl: string;
    readMoreUrl: string;
    time: string;
    title: string;
    url: string;
  }[];
}

export interface NewsTypes {
  activeNewsLink: string;
  changeActiveNewsLink: (e: React.MouseEvent<HTMLElement>) => void;
  data: INews["data"];
  isLoading: boolean;
}

type IProps = {
  children: JSX.Element;
};

export const NewsContext = createContext<NewsTypes | null>(null);

export const NewsContextProvider = (props: IProps) => {
  const [activeNewsLink, setActiveNewsLink] = useState<string>("science");
  const [url, setUrl] = useState("science");

  const changeActiveNewsLink = (e: React.MouseEvent<HTMLElement>) => {
    switch (e.currentTarget.innerText) {
      case "Sports":
        setActiveNewsLink("sports");
        setUrl("sports");
        break;
      case "Science":
        setActiveNewsLink("science");
        setUrl("science");
        break;
      case "Movies":
        setActiveNewsLink("movies");
        setUrl("movies");
        break;

      case "Education":
        setActiveNewsLink("education");
        setUrl("education");
        break;
      case "Politics":
        setActiveNewsLink("politics");
        setUrl("politics");
        break;
      case "Technology":
        setActiveNewsLink("technology");
        setUrl("technology");
        break;
      case "World":
        setActiveNewsLink("world");
        setUrl("world");
        break;
      case "Business":
        setActiveNewsLink("business");
        setUrl("business");
        break;
      default:
        setActiveNewsLink("science");
        break;
    }
  };
  const [apiData, isLoading] = useFetch(
    `https://inshorts.deta.dev/news?category=${url}`
  );
  return (
    <NewsContext.Provider
      value={{
        activeNewsLink,
        changeActiveNewsLink,
        data: apiData.data,
        isLoading,
      }}>
      {props.children}
    </NewsContext.Provider>
  );
};
