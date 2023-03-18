import styled from 'styled-components'

const SuccessStyle = styled.div`
	background: white;
	color: green;
  `;

const SuccessMessage = () => {
    return <SuccessStyle><h1>Data is correct</h1></SuccessStyle>;
};
  
export default SuccessMessage;