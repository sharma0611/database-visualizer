import React from 'react'
import SummaryTable from './SummaryTable'
import renderer from 'react-test-renderer'

it('renders correctly for no variable', () => {
    const props = {
        readableVariable: null,
        isLoading: false,
        hasErrored: false,
        rows: []
    }
    const component = renderer.create(<SummaryTable {...props} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders correctly for a variable', () => {
    const props = {
        readableVariable: 'education',
        isLoading: false,
        hasErrored: false,
        rows: [
            { value: 'high school', count: 10, age: 19.3 },
            { value: 'college', count: 70, age: 25.3 }
        ]
    }
    const component = renderer.create(<SummaryTable {...props} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders correctly for error state', () => {
    const props = {
        readableVariable: 'education',
        isLoading: false,
        hasErrored: true,
        rows: []
    }
    const component = renderer.create(<SummaryTable {...props} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders correctly for loading state', () => {
    const props = {
        readableVariable: 'education',
        isLoading: true,
        hasErrored: false,
        rows: []
    }
    const component = renderer.create(<SummaryTable {...props} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
