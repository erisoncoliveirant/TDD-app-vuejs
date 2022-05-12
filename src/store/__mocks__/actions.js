import userFixture from '../../../tests/unit/fixtures/user'

export default {
  SEARCH_USER: jest.fn().mockRejectedValue(userFixture)
}
