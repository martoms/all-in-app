import React, { ChangeEvent } from 'react'

// Get input value
const handleInput = (e: ChangeEvent<HTMLInputElement>, setSearchInput: React.Dispatch<React.SetStateAction<string>>) => {
    setSearchInput(e.target.value);
};

// Get filter value
const handleSelect = (e: ChangeEvent<HTMLSelectElement>, setFilter: React.Dispatch<React.SetStateAction<string>>) => {
    setFilter(e.target.value);
};

export {
    handleInput,
    handleSelect
}