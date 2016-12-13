/* eslint-env jasmine */
import * as EVTScan from '../../src/evrythng-scan'

describe('EVTScan', () => {
  it('should contain version', () => {
    expect(EVTScan.version).toBeDefined()
  })

  it('should contain correct version', () => {
    expect(EVTScan.version).toBe('3.0.0')
  })
})
