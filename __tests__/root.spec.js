/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */
import reducer, { ACTIONS } from 'redux/reducer';

const initialState = {
  attributes: {},
  walkthrough: {
    firstRun: true,
    showTooltip: {
      dummy: 'refresh',
      dummyNext: 'crash',
    },
  },
  dummy: {
    total: '---',
    loading: false,
    date: '---',
  },
};

const differentState = {
  attributes: {},
  walkthrough: {
    firstRun: false,
    showTooltip: {
      dummy: 'none',
      dummyNext: 'none',
    },
  },
  dummy: {
    total: 245,
    loading: true,
    date: '---',
  },
};

describe('Root reducer tests', () => {
  test('Default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  test('Reset all data', () => {
    expect(reducer(differentState, {
      type: ACTIONS.RESET,
    })).toEqual(initialState);
  });
  test('Any unknown action does not change state', () => {
    expect(reducer(differentState, {
      type: 'ANY_ACTION',
    })).toEqual(differentState);
  });
});
