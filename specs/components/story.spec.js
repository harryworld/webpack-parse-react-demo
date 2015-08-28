import { Parse } from 'parse';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Story from '../../app/components/Story';

import StubRouterContext  from '../support/stub_router_context';

Parse.initialize('testid', 'testkey');

describe('story', function() {
  before(function() {

  });

  it('renders without problems', function() {
    var props = {
      params: {
        id: '1'
      }
    }
    let Subject = StubRouterContext(Story, props);
    var story = TestUtils.renderIntoDocument(<Subject />);
    expect(story).toExist();
  });
});