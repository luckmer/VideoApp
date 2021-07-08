const ApiDataCreator = () => {
  const VimeoCreator = (resp, Likes, id) => {
    const {
      created_time,
      embed: { html: embedHtml },
      name,
      pictures: { sizes: pictures },
      link,
    } = resp;

    const dataResult = {
      id,
      published: created_time,
      likes: Likes.total,
      name,
      pictures: pictures[3].link,
      embedHtml,
      link,
    };
    return dataResult;
  };

  const YoutubeCreator = (resp) => {
    const {
      items: [
        {
          id,
          snippet: { publishedAt, title, thumbnails },
          statistics: { likeCount, viewCount },
          player: { embedHtml },
        },
      ],
    } = resp;

    const dataResult = {
      id: id,
      published: publishedAt,
      title,
      pictures: thumbnails.high.url,
      likes: likeCount,
      viewCount: viewCount,
      embedHtml,
      link: `https://www.youtube.com/watch?v=${id}`,
    };
    return dataResult;
  };
  return { VimeoCreator, YoutubeCreator };
};

export default ApiDataCreator;
