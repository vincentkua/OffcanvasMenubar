import styled from "styled-components";
import TopBannerPng from "./bluebanner.png";

export const TopMenuArea = styled.div`
  height: 150px;
  padding: 16px;
  background-color: #dddddd;
  color: #ffffff;
  margin: 0;
  font-weight: bold;
  background-image: url(${TopBannerPng});
  background-size: cover;
  background-position: center;

  > div > div:nth-child(1) {
    color: white;
    margin-top: 2px;
  }
  > div > div:nth-child(2) {
    color: #ffffff;
    font-weight: normal;
    font-size: 14px;
    margin-top: 24px;
  }
  > div > div:nth-child(3) {
    color: #ffffff;
    font-weight: normal;
    font-size: 10px;
  }
`;

export const BodyContentArea = styled.div`
  padding: 16px;
  font-size: 14px;
`;

export const SideMenuBarArea = styled.div`
  background-color: #111111;
  height: 100%;
`;

export const SideMenuLogo = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 12px;
  color: lightgray;
  font-weight: bold;

  > p {
    margin: 0;
  }
`;

export const SideMenubarDivBox = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  padding: 12px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#707070")};

  > p {
    margin: 0;
  }

  &:hover {
    background-color: #2b2b2b;
    color: #e6e6e6;
  }
`;
