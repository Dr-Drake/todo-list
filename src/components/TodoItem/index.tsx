import React from 'react';
import { ItemActionGroup, ItemContainer, TodoCheckbox, TodoInput, TodoItemSaveButton, TodoText } from './styles';
import { BiCheck, BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Colors } from '../../utils/Colors';
import ClickAwayListener from 'react-click-away-listener';

export interface TodoItemProps{
    complete?: boolean;
    onCheck?: (id: any)=> void;
    onDelete?: (id: any)=> void;
    onUpdate?: (id: any, value?: string)=> void;
    task?: string;
    id: any;
}

const TodoItem: React.FC<TodoItemProps> = ({
    complete = false, onCheck, id, task = '', onUpdate, onDelete
})=>{

    // State
    const [checked, setChecked] = React.useState<boolean>(complete);
    const [isEditing, setIsEditing] = React.useState<boolean>(false);
    const [updatedValue, setUpdatedValue] = React.useState<string>(task);

    // Handlers
    const handleCheck = ()=>{
        setChecked(!checked);
        onCheck && onCheck(id)
    }
    const handleEdit = ()=> {
        if (!complete) {
            setIsEditing(true);
        }
    };
    const handleClickaway = ()=>{
        setIsEditing(false);
    }
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        setUpdatedValue(e.target.value);
    }
    const handleSave = ()=>{
        onUpdate && onUpdate(id, updatedValue);
        setIsEditing(false);
    }
    const handleDelete = ()=>{
        onDelete && onDelete(id);
    }

    return(
        <ClickAwayListener onClickAway={handleClickaway}>
            <ItemContainer>
                <TodoCheckbox checked={checked} onClick={handleCheck}>
                    <BiCheck size={22} color={Colors.SiteColorThree}/>
                </TodoCheckbox>
                { !isEditing && <TodoText complete={checked}>{task}</TodoText> }
                { isEditing && <TodoInput value={updatedValue} onChange={handleInputChange} autoFocus />}
                <ItemActionGroup>
                    {
                        !isEditing &&
                        <>
                            <div className="edit" onClick={handleEdit}>
                                <BiEdit size={18}/>
                            </div>
                            <div className="delete" onClick={handleDelete}>
                                <RiDeleteBin6Line size={18} />
                            </div>
                        </>
                    }
                    {  
                        isEditing && 
                        <TodoItemSaveButton onClick={handleSave}>
                            Save
                        </TodoItemSaveButton> 
                    }
                </ItemActionGroup>
            </ItemContainer>
        </ClickAwayListener>
    )
}

export default TodoItem;