import PropTypes from 'prop-types';
import { MainTitle, Wrapper } from "./Sections.styled"


const Section = ({title, children}) => {
        return (
          <Wrapper>
              <MainTitle>{title}</MainTitle>
              {children}
          </Wrapper>
        )
      }

      export default Section
      
      Section.propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
      }