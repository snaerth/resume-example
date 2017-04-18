/**
 * Must have called react-redux/connect with the 'withRef' flag
 * ex:
 * connectWithTransitionGroup(connect(mapStateToProps, null, null, {
 *   withRef: true,
 * }));
 *
 * @param {*} connect - return from react-redux/connect
 * @returns {*} component monkey patched with special lifecycle functions
 */
function connectWrapper(connect) {
  const willFunctions = [
    'componentWillAppear',
    'componentWillEnter',
    'componentWillLeave',
  ];

  const didFunctions = [
    'componentDidAppear',
    'componentDidEnter',
    'componentDidLeave',
  ];

  willFunctions.forEach(function(key) {
    connect.prototype[key] = function(cb) {
      if (this.refs.wrappedInstance[key]) {
        this.refs.wrappedInstance[key](cb);
      } else {
        cb();
      }
    };
  });

  didFunctions.forEach(function(key) {
    connect.prototype[key] = function() {
      if (this.refs.wrappedInstance[key]) {
        this.refs.wrappedInstance[key]();
      }
    };
  });

  return connect;
}

export default connectWrapper;
