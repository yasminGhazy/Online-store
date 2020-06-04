import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { IconButton, Tooltip } from '@material-ui/core';

export function TableAddBtn(props) {
    return (
        <Tooltip placement="top" title="Add">
            <IconButton >
                <AddIcon />
            </IconButton>
        </Tooltip>
    )
}

export function TableEditBtn(props) {
    return (
        <Tooltip placement="top" title="Edit">
            <IconButton>
                <EditIcon />
            </IconButton>
        </Tooltip>
    )
}

export function TableDeleteBtn(props) {
    return (
        <Tooltip placement="top" title="Delete">
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}