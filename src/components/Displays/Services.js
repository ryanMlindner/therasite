export default function Services() {
  //TODO CSS
  const services = ["Anxiety", "Depression", "Trauma", "PTSD", "Abuse Survivors",
    "Adjustment Disorder", "Agoraphobia", "Attachment Issues", "Bipolar Disorder", 
    "Borderline Personality", "Chronic Illness", "Chronic Pain", 
    "Couples Counseling", "Dissociation", "Dissociative Identity Disorder (DID)",
    "Domestic Violence", "Suicidal Ideation", "Spirituality and Religion",
     "Social Anxiety"]
  const approaches = ["Eye Movement Desensitization & Reprocessing Therapy (EMDR)",
    "Trauma Focused", "Somatic", "Acceptance and Commitment (ACT)", "Breathwork",
    "Reiki"]
  const insurance = ["Aetna", "Cigna", "Medicaid"]
  const fees = ["Individual Counseling: $100", "Couples Counseling: $200"]

  return (
    <div className="dark-background">
      <div className="title">
        <h5>SERVICES</h5>
      </div>
      <div className="overflow-columns">
        {services.map(service => {
          return <div className="list-item">{service}</div>
        })}
      </div>
      <div className="three-columns">
        <div className="column">
          <h4>APPROACHES</h4>
          {approaches.map(approach => {
            return <div className="text">{approach}</div>
          })}
        </div>
        <div className="column">
          <h4>INSURANCE ACCEPTED</h4>
          {insurance.map(company => {
            return <div className="text">{company}</div>
          })}
        </div>
        <div className="column">
          <h4>FEES</h4>
          {fees.map(fee => {
            return <div className="text">{fee}</div>
          })}
        </div>
      </div>
    </div>
  )
}