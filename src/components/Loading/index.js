import styled from 'styled-components';

const Loading = styled.div`
  animation: is-rotating 1s infinite;
  border: 6px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.secondary};
  height: 50px;
  width: 50px;

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`;

Loading.Container = styled.div`
    text-align: center; 
    font-size: 2rem;
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default Loading;