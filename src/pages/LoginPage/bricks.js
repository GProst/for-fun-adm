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
  height: 25rem;
`
Form.displayName = 'Form'

const Header = styled.div`
  background-color: ${props => props.theme.palette.primary['500']};
  padding: 1.5rem 3rem;
`
Header.displayName = 'Header'

const MainContent = styled.div`
  padding: 1.5rem 3rem;
`
MainContent.displayName = 'MainContent'

export {
  Wrapper,
  Form,
  Header,
  MainContent
}
