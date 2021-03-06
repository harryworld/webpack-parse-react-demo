import React from 'react';
import ParseLib from 'parse';
import ParseReact from 'parse-react';
import ParseComponent from 'parse-react/class';
import { Link } from 'react-router';

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
            console.log(s.objectId);
            return (
              <div key={s.objectId} className='storyRow'>
                <div><Link to={'/stories/' + s.objectId} className='btn btn-default'>{s.content}</Link></div>
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
