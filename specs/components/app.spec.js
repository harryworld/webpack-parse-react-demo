import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import App from '../../app/components/App';

import StubRouterContext  from '../support/stub_router_context';

describe('app', function() {
  it('renders app', function(done) {
    let Subject = StubRouterContext(App)
    var app = TestUtils.renderIntoDocument(<Subject />);

    expect(app).toExist();
    done();
  });
});