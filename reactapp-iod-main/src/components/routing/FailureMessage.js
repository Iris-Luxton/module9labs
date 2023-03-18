import styled from 'styled-components'

const FailureStyle = styled.div`
	background: white;
	color: red;
`;
  
export  const FailureMessage = () => {
    return <FailureStyle><h1>Data is correct</h1></FailureStyle>;
};

export default FailureMessage;