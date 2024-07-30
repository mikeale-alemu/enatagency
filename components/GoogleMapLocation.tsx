

const GoogleMapLocation = () => {

  return (
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15762.106136683258!2d38.787704!3d9.0156384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a7e4fbf351%3A0x4e646b1d1b8b1bb2!2sENAT%20FOREIGN%20EMPLOYMENT%20AGENT%20PLC!5e0!3m2!1sen!2set!4v1722324590943!5m2!1sen!2set"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ENAT Foreign Employment Agent PLC Location"
      ></iframe>
  )
}

export default GoogleMapLocation;