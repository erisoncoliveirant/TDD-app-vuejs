import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import VUserSearchForm from '@/components/VUserSearchForm'
import ElementUI from 'element-ui'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('VUserSearchForm', () => {
  const build = () => {
    const options = { localVue }
    const wrapper = shallowMount(VUserSearchForm, options)
    const wrapperMounted = mount(VUserSearchForm, options)

    return {
      wrapper,
      wrapperMounted,
      input: () => wrapper.find('.search-form__input'),
      inputMounted: () => wrapperMounted.find('input'),
      button: () => wrapperMounted.find('.search-form__button')
    }
  }

  it('renders the components', () => {
    // arrange
    const { wrapper } = build()

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    // arrange
    const { input, button } = build()

    // assert
    expect(input().exists()).toBe(true)
    expect(button().exists()).toBe(true)
  })

  it('calls "submited" event when submitting form', () => {
    // arrange
    const expectedUser = 'kuroski'
    const { wrapperMounted, button, inputMounted } = build()
    inputMounted().element.value = expectedUser

    // act
    inputMounted().trigger('input')
    button().trigger('click')
    button().trigger('submit')

    // assert
    expect(wrapperMounted.emitted().submitted[0]).toEqual([expectedUser])
  })
})