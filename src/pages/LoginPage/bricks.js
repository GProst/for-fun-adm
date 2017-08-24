import styled from 'styled-components'
import Paper from 'material-ui/Paper'

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.background.default};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
Wrapper.displayName = 'Wrapper'

const Form = styled(Paper)`
  width: 32rem;
  display: flex;
  flex-direction: column;
`
Form.displayName = 'Form'

const Header = styled.div`
  background-color: ${props => props.theme.palette.primary['500']};
  padding: 1.5rem 3rem;
`
Header.displayName = 'Header'

const MainContent = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-grow: 1;
`
MainContent.displayName = 'MainContent'

const Inputs = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`
Inputs.displayName = 'Inputs'

export {
  Wrapper,
  Form,
  Header,
  MainContent,
  Inputs
}
