import styled from "styled-components";

export const StDetailsContainerDiv = styled.div`
  border: 2px solid rgba(191, 193, 191, 0.5);
  margin: 5px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;
export const StDetailDiv = styled.div`
  border: 1px solid rgba(191, 193, 191, 0.5);
  width: 40%;
  height: 60vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding: 20px;
`;
export const StDetailHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StDetailHeaderP = styled.p``;

export const StDetailHeaderButton = styled.button`
  border: 1px solid #bfc1bf;
  border-radius: 10px;
  width: 110px;
  padding: 10px;
`;

export const StDetailBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StDetailTitleh2 = styled.h2`
  margin-top: 10px;
`;

export const StDetailDescriptionP = styled.p`
  margin-top: 20px;
`;
