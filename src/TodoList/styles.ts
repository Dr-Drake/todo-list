import styled from 'styled-components';
import { Colors } from '../utils/Colors';
import { device } from '../utils/device';

export const MainContainer = styled.div`
    // width: 80%;
    // background-color: red;
    padding: 5% 10%;
`;

export const Title = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 30px;
    // width: fit-content;
    text-align: center;
    // background-color: blue;
`;

export const InputRow = styled.div`
    // background-color: blue;
    display: flex;
    justify-content center;
    padding: 35px 0;
`;

export const InputGroup = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    // background-color: yellow;
    width: 100%;

    & > svg{
        margin-left: 20px;
        fill: ${Colors.SecondarySiteColor};
        cursor: pointer;

        &:hover{
            fill: ${Colors.SecondaryColorHover};
        }
    }
`;

export const TaskInput = styled.input`
    background-color: ${Colors.SiteColorThree};
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px;
    width: 30%;

    &::placeholder{
        color: ##cacbcf;
    }

    @media ${device.smallDesktop} {
        width: 50%;
    }

    @media ${device.bigMobile} {
        width: 100%;
    }
`;

export const LineSeparator = styled.div`
    height: 3px;
    border-radius: 8px;
    background-color: ${Colors.SecondaryColorHover};
`;

export const TaskListContainer = styled.div`
    // background-color: orange;
    padding: 35px 0;

    & > div:not(:last-child){
        margin-bottom: 20px;
    }
`;