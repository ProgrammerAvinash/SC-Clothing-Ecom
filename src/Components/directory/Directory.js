import React from "react";
import MenuItem from "../MenuItem";
import "./Directory.scss";
class Directory extends React.Component {
  state = {
    sections: [
      {
        title: "T-shirts",
        imageURL:
          "https://i.ibb.co/tL9zbpt/keagan-henman-x-PJYL0l5-Ii8-unsplash.jpg",
        id: "1",
        linkURL: "T-shirts",
      },
      {
        title: "Shorts",
        imageURL: "https://i.ibb.co/GJzZY1s/pexels-fauxels-3228855.jpg",
        id: "2",
        linkURL: "",
      },
      {
        title: "Shirts",
        imageURL: "https://i.ibb.co/KGDjgcp/shirts.jpg",
        id: "3",
        linkURL: "",
      },
      {
        title: "Jeans",
        imageURL:
          "https://i.ibb.co/cbd0GVf/waldemar-brandt-UP9-Dt-Tj-RYp-I-unsplash.jpg",
        id: "4",
        linkURL: "",
      },
      {
        title: "Jackets",
        imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
        id: "5",
        linkURL: "",
      },
    ],
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
