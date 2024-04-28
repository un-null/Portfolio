type Zenn = {
  id: number;
  title: string;
  emoji: string;
  published_at: "2022-10-31T16:30:39.247+09:00";
  path: string;
};

export const getZennBlogs = async () => {
  const res = await fetch(
    "https://zenn.dev/api/articles?username=nu_______ll&order=latest",
  );

  const data = await res.json();

  return {
    data: data.articles as Zenn[],
  };
};
