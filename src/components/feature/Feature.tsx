import './feature.scss';

interface FeatureProps {
  title: string;
  text: string;
}

export default function Feature({ title, text }: FeatureProps) {
  return (
    <div className="gpt3__feature-container">
      <div className="gpt3__feature-container-title">
        <div className="gpt3__feature-container-title__decorator"></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__feature-container-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
