import { MenuItem, SelectField, TextField } from 'material-ui';
import React, { useEffect, useState } from 'react'
import { getImage } from '../api/api';
import { ImageResults } from './ImageResults';

export const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [amount, setAmount] = useState(5);
    const [images, setImages] = useState([]);

    useEffect(() => {
        onGetImage(searchText, amount)
    }, [searchText, amount])

    const onGetImage = async (text, amount) => {
        const res = await getImage(text, amount)
        setImages(res)
    }

    const onTextChange = e => {
        setSearchText(e.target.value)
        // onGetImage(searchText, amount)
    }

    const onAmountChange = (e, index, value) => {
        setAmount(value)
        // onGetImage(searchText, amount)
    }

    return (
        <div>
            <TextField 
                name='searchText' 
                value={searchText} 
                onChange={onTextChange}
                floatingLabelText='Search For Images'
                fullWidth={true} />
            <br />
            <SelectField
                name="amount"
                floatingLabelText="Amount"
                value={amount}
                onChange={onAmountChange}
            >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
            </SelectField>
            <br />
            {
                images.length > 1 ? (<ImageResults images={images} />) : 'No data'
            }
        </div>
    )
}
