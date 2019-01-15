//@flow
import type { Variable } from '../Types/summary'

const columnData = [
    { colName: 'age', readableName: 'Age' },
    { colName: 'class of worker', readableName: 'Class of Worker' },
    { colName: 'industry code', readableName: 'Industry Code' },
    { colName: 'occupation code', readableName: 'Occupation Code' },
    { colName: 'education', readableName: 'Education' },
    { colName: 'wage per hour', readableName: 'Wage per Hour' },
    { colName: 'last education', readableName: 'Last Education' },
    { colName: 'marital status', readableName: 'Marital Status' },
    { colName: 'major industry code', readableName: 'Major Industry' },
    { colName: 'major occupation code', readableName: 'Major Occupation Code' },
    { colName: 'mace', readableName: 'Mace' },
    { colName: 'hispanice', readableName: 'Hispanice' },
    { colName: 'sex', readableName: 'Sex' },
    { colName: 'member of labor', readableName: 'Member of Labor' },
    { colName: 'reason for unemployment', readableName: 'Reason for Unemployment' },
    { colName: 'fulltime', readableName: 'Fulltime' },
    { colName: 'capital gain', readableName: 'Capital Gain' },
    { colName: 'capital loss', readableName: 'Capital Loss' },
    { colName: 'dividends', readableName: 'Dividends' },
    { colName: 'income tax liability', readableName: 'Income Tax Liability' },
    { colName: 'previous residence region', readableName: 'Previous Residence Region' },
    { colName: 'previous residence state', readableName: 'Previous Residence State' },
    { colName: 'household-with-family', readableName: 'Household with Family' },
    { colName: 'household-simple', readableName: 'Household' },
    { colName: 'weight', readableName: 'Weight' },
    { colName: 'msa-change', readableName: 'MSA Change' },
    { colName: 'reg-change', readableName: 'REG Change' },
    { colName: 'within-reg-change', readableName: 'Within REG Change' },
    { colName: 'lived-here', readableName: 'Lived Here' },
    {
        colName: 'migration prev res in sunbelt',
        readableName: 'Migration previous residence in Sunbelt'
    },
    { colName: 'w', readableName: 'W' },
    { colName: 'family members under 118', readableName: 'Family Members under 118' },
    { colName: 'father birth country', readableName: 'Father Birth Country' },
    { colName: 'mother birth country', readableName: 'Mother Birth Country' },
    { colName: 'birth country', readableName: 'Birth Country' },
    { colName: 'citizenship', readableName: 'Citizenship' },
    { colName: 'own business or self employed', readableName: 'Self Employed or has own business' },
    {
        colName: 'fill questionnaire for veteran s admin',
        readableName: 'Fill Questionnaire for Veteran'
    },
    { colName: 'veterans benefits', readableName: 'Veteran Benefits' },
    { colName: 'weeks worked in year', readableName: 'Weeks worked in a year' },
    { colName: 'year', readableName: 'Year' },
    { colName: 'salary range', readableName: 'Salary Range' }
]

export const colNameToHumanFriendly = (variable: Variable): ?string => {
    const column = columnData.find(obj => obj.colName === variable)
    if (column) {
        return column.readableName
    } else {
        return null
    }
}

export default columnData
