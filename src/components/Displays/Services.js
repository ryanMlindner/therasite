export default function Displays() {
  const services = ["Anxiety", "Depression", "Trauma", "PTSD", "Abuse Survivors",
                    "Adjustment Disorder", "Agoraphobia", "Attachment Issues",
                    "Bipolar Disorder", "Borderline Personality", "Chronic Illness",
                    "Chronic Pain", "Couples Counseling", "Dissociation",
                    "Dissociative Identity Disorder (DID)", "Domestic Violence",
                    "Suicidal Ideation", "Spirituality and Religion",
                    "Social Anxiety"]
  return (
    <div className="dark-background">
      <div className="title">
        <h5>Services</h5>
      </div>
      <div className="overflow-columns">
        {services.map(service => {
          return <div className="list-item">{service}</div>
        })}
      </div>
    </div>
  )
}