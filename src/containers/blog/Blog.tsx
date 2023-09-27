import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './asset-imports';
import './blog.scss';

export default function Blog() {
  const heroBlog = {
    title:
      'Unlocking the Power of GPT-3: A Deep Dive into the AI Language Model',
    date: new Date(),
    image: blog01,
  };

  const articles = [
    {
      title:
        'Revolutionizing Content Creation: How GPT-3 is Changing the Writing Game',
      date: new Date(),
      image: blog02,
    },
    {
      title: 'GPT-3 in Healthcare: Transforming Diagnostics and Patient Care',
      date: new Date(),
      image: blog03,
    },
    {
      title: "The Ethical Implications of GPT-3: Navigating AI's New Frontier",
      date: new Date(),
      image: blog04,
    },
    {
      title:
        'GPT-3 and the Future of Customer Service: Chatbots, Conversational AI, and Beyond',
      date: new Date(),
      image: blog05,
    },
  ];

  return (
    <section className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading gradient__text">
        <h1>
          A lot is happening,
          <br />
          We are blogging about it.
        </h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-hero">
          <Article
            image={heroBlog.image}
            title={heroBlog.title}
            date={heroBlog.date}
          ></Article>
        </div>
        <div className="gpt3__blog-container-articles">
          {articles.map((article) => (
            <Article
              image={article.image}
              title={article.title}
              date={article.date}
            ></Article>
          ))}
        </div>
      </div>
    </section>
  );
}
