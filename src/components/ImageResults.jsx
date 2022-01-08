import { GridList } from 'material-ui'
import React, { useState } from 'react'
import { DialogItem } from './Dialog'
import { ImageItem } from './ImageItem'

export const ImageResults = ({ images }) => {
    const [currentImg, setCurrentImage] = useState('')
    const [open, setOpen] = useState(false);


    const handleOpen = (img) => {
        setOpen(true)
        setCurrentImage(img)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            {
                images &&
                <GridList cols={3}>
                {
                    images.map(img => {
                        const {tags, user, largeImageURL} = img
                        return <ImageItem 
                            tags={tags} 
                            user={user} 
                            largeImageURL={largeImageURL}
                            handleOpen={handleOpen} />
                    })
                }
                </GridList>
            }
            <DialogItem open={open} currentImg={currentImg} handleClose={handleClose} />
        </div>
    )
}
