import styled from "styled-components";
import { Colors } from "../../utils/Colors";

// Interfaces
export interface TodoCheckboxProps{
    checked?: boolean;
}

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-radius: 8px;
    border: 3px solid ${Colors.SiteColorThree};
`;

export const ItemActionGroup = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;

    .edit{
        background-color: ${Colors.SecondarySiteColor};
        cursor: pointer;
        padding: 5px;
        border-radius: 2px;

        &:hover{
            background-color: ${Colors.SecondaryColorHover};
        }

        display: flex;
        align-items: center;
    }

    .delete{
        margin-left: 10px;
        background-color: ${Colors.Orange};
        cursor: pointer;
        padding: 5px;
        border-radius: 2px;

        &:hover{
            background-color: ${Colors.OrangeHover};
        }

        display: flex;
        align-items: center;
    }
`;

export const TodoCheckbox = styled.div<TodoCheckboxProps>`
    border: 1px solid ${Colors.SecondarySiteColor};;
    border-radius: 2px;
    width: 16px;
    height: 16px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    cursor: pointer;
    position: relative;
    background-color: ${ props => props.checked ? Colors.SecondarySiteColor : Colors.SiteColorThree };

    & > svg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const TodoText = styled.p<{ complete?: boolean; }>`
    color: white;
    font-size: 16px;
    margin-left: 10px;
    text-decoration: ${ props => props.complete ? 'line-through' : 'none' };
    transition: text-decoration 0.3s;
`;

export const TodoInput = styled.input`
    margin: 0 10px;
    background-color: ${Colors.SiteColorThree};
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px;
    width: 100%;

    &::placeholder{
        color: ##cacbcf;
    }
`;

export const TodoItemSaveButton = styled.button`
    background-color: ${Colors.SecondarySiteColor};
    padding: 7px 20px;
    border: none;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: ${Colors.SecondaryColorHover};
    }
`;