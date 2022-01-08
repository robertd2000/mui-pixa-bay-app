import { GridTile, IconButton } from 'material-ui'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import React from 'react'

export const ImageItem = ({tags, user, largeImageURL, handleOpen}) => {
    const onHandleOpen = () => handleOpen(largeImageURL)
    return (
        <GridTile
            title={tags}
            subtitle={
                <span>
                    by <strong>{user}</strong>
                </span>
            }
            actionIcon={
                <IconButton onClick={onHandleOpen}>
                    <ZoomIn color='white' />
                </IconButton>
            }>
                <img src={largeImageURL} alt='' />
        </GridTile>
    )
}
