export default function About({textStyle}) {
  //TODO pics and css
  textStyle = textStyle
  return (
    <div className="no-background">
      <div className="title">
        <h5>ABOUT</h5>
      </div>
      <div className="text">
        <h3>You deserve healing</h3>
        <h5>
        I became a therapist because I saw firsthand how miraculous 
        therapy can be and decided to help others find long lasting 
        happiness. I believe the mind and body are designed to heal 
        themselves. Our healing only stops when something stands in 
        its way. This is why I specialize in Trauma and use a combination 
        of EMDR and mindfulness and somatic based approaches.
        </h5>
      </div>
      <div className="picture">
        totally a picture
      </div>
      <div className="text">
        <h5>Maggie Freeland</h5>
        <h5 style={textStyle}>Prelicensed Professional</h5>
      </div>
    </div>
  )
}