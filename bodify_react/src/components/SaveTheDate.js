import React from 'react';
import Player from '@vimeo/player';

class SaveTheDate extends React.Component{
  render(){
    return (
      <div id="save_the_date">
        <div className="white_body">
          <iframe src="https://player.vimeo.com/video/225665857"
            frameborder="0"
            allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

export default SaveTheDate;
