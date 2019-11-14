import React from "react"

class Calendly extends React.Component {
    render() {
        const calendlyStyle = {
            "minWidth":"320px",
            "height":"630px",
        }
        return (
            <>
                <div className="calendly-inline-widget" data-url="https://calendly.com/metricasboss" style={calendlyStyle}></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
            </>
        )
    }
}

export default Calendly