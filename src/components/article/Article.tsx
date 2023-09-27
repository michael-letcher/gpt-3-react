import './article.scss';

interface ArticleProps {
  image: string;
  title: string;
  date?: Date;
}

export default function Article({ image, title, date }: ArticleProps) {
  function formatDate(date?: Date): string {
    if (!date) {
      return 'Unknown';
    }

    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
      date
    );
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(
      date
    );
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

    return `${month} ${day}, ${year}`;
  }

  return (
    <article className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={image} alt={title} />
      </div>

      <div className="gpt3__article-content">
        <div>
          <div className="gpt3__article-content-date">{formatDate(date)}</div>
          <h3>{title}</h3>
        </div>

        <div className="gpt3__article-link">
          <a href="#">Read full article</a>
        </div>
      </div>
    </article>
  );
}
