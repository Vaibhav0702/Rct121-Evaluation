
import styles from "./CandidateCard.module.css";


function CandidateCard({

  avatar,
  company_name,
  name,
  rating,
  salary,
  title,




}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img  src={avatar} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name: {name}</div>
        <div>Title & Company Name : {company_name}</div>
      </div>
      <div>$ Salary {salary}</div>
    </div>
  );
}

export default CandidateCard;
