import React, { Component } from "react";
import { connect } from "react-redux";

import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about ">
        <div className="section-about-header">
          Truyền thông nói về Booking Care
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/ArFiDG9fhgI?list=RDArFiDG9fhgI"
              title="Frankie Valli - Can&#39;t Take My Eyes Off You ( Video Lyrics )"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Ngày mình còn là sinh viên đi học tại giảng đường đại học , có rất
              nhiều câu hỏi mà các thầy cô không giúp mình trả lời được
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
