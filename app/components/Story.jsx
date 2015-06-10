import React from 'react';
import ParseLib from 'parse';
import ParseReact from 'parse-react';
import ParseComponent from 'parse-react/class';

var Parse = ParseLib.Parse;

export default class Story extends ParseComponent {
  observe() {
    return {
      stories: new Parse.Query('Story'),
      user: ParseReact.currentUser
    };
  }
  render() {
    var content = (
      <div>No Stories</div>
    );
    if (this.data.stories.length) {
      content = (
        <div className="story">
          <div>Some stories</div>
          {this.data.stories.map(function(s) {
            return (
              <div key={s.objectId} className='storyRow'>
                <div>{s.content}</div>
              </div>
            );
          }, this)}
        </div>
      );
    } else if (this.pendingQueries().length) {
      content = <div className='loading'>Loading</div>;
    }
    return (
      <div className="container">
        <h1>Webpack ParseReact</h1>
        {content}
      </div>
    );
  }
}
