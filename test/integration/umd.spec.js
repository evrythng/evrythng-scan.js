(function (root, factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    define(['evrythng', 'evrythng-scan'], factory)
  } else if (typeof module === 'object' && module.exports) {
    factory(require('evrythng'), require('../../dist/evrythng-scan'))
  } else {
    factory(root.EVT, root.EVTScan)
  }
}(this, function factory (EVT, EVTScan) {
  /* eslint-env jasmine */

  describe('EVTScan Distribution', () => {
    it('should exist', () => {
      expect(EVTScan).toBeDefined()
      expect(EVT.Operator.scan).toBeDefined()
    })
  })
}))
