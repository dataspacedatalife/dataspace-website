import SurveyForm from './SurveyForm';
import './survey.css';

export default function Page() {
  return (
    <main className="survey-page">
      <div className="survey-container">
        <SurveyForm />
      </div>
    </main>
  );
}