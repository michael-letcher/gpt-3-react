import { Feature } from '../../components';
import './whatGPT.scss';

export default function WhatGPT() {
  const features = [
    {
      title: 'What is GPT-3',
      description:
        'GPT-3, which stands for "Generative Pre-trained Transformer 3," is a highly advanced artificial intelligence language model developed by OpenAI. It is designed to understand and generate human-like text, making it capable of performing a wide range of natural language processing tasks, such as language translation, content generation, and answering questions, at an impressive scale and with high levels of accuracy.',
    },
    {
      title: 'Chatbots',
      description:
        'We can enhance their natural language understanding and generation capabilities, making conversations with users more contextually relevant and human-like. By integrating GPT-3 into chatbot systems, developers can create more sophisticated and versatile bots that can handle a wider range of user queries and tasks.',
    },
    {
      title: 'Knowledgebase',
      description:
        'GPT-3 can enhance knowledge bases by automatically generating, updating, or expanding content within them, making them more comprehensive and up-to-date. Its natural language processing capabilities can also enable more intuitive and conversational user interactions with the knowledge base, improving user engagement and accessibility.',
    },
    {
      title: 'Education',
      description:
        'GPT-3 can enhance education by providing personalized and interactive learning experiences through intelligent tutoring systems, virtual teaching assistants, and automated content generation, adapting to individual student needs. It can also help bridge language barriers by providing real-time translation and language learning support, expanding educational opportunities globally.',
    },
  ];

  return (
    <section className="gpt3__whatgpt3 section__margin" id="whatgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={features[0].title}
          text={features[0].description}
        ></Feature>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>

        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {features.map(
          (feature, index) =>
            index !== 0 && (
              <Feature
                key={index}
                title={feature.title}
                text={feature.description}
              ></Feature>
            )
        )}
      </div>
    </section>
  );
}
