import chai, {expect} from 'chai';
import dirtyChai      from 'dirty-chai';
import moment         from 'moment';
import {
  enterHome,
  leaveHome,
  enterComponents,
  leaveComponents
}                       from '../../../src/app/redux/modules/views';

const dateFormat = 'DD/MM/YYYY HH:mm';

chai.use(dirtyChai);


describe('redux - action creator "views"', () => {
  const  now = moment().format(dateFormat);

  it('should return enterHome action object', () => {
    const enterHomeACTION = {
      type:         'ENTER_HOME_VIEW',
      currentView:  'home',
      enterTime:    now,
      leaveTime:    null
    };
    expect(enterHome(now)).to.deep.equal(enterHomeACTION);
  });

  it('should return leaveHome action object', () => {
    const leaveHomeACTION = {
      type:         'LEAVE_HOME_VIEW',
      currentView:  'home',
      enterTime:    null,
      leaveTime:    now
    };
    expect(leaveHome(now)).to.deep.equal(leaveHomeACTION);
  });

  it('should return enterComponents action object', () => {
    const enterComponentsACTION = {
      type:         'ENTER_COMPONENTS_VIEW',
      currentView:  'components',
      enterTime:    now,
      leaveTime:    null
    };
    expect(enterComponents(now)).to.deep.equal(enterComponentsACTION);
  });

  it('should return leaveComponents action object', () => {
    const leaveComponentsACTION = {
      type:         'LEAVE_COMPONENTS_VIEW',
      currentView:  'components',
      enterTime:    null,
      leaveTime:    now
    };
    expect(leaveComponents(now)).to.deep.equal(leaveComponentsACTION);
  });
});
