import { FormControl, FormControlLabel, InputLabel, NativeSelect, Radio, RadioGroup, TextField, } from '@material-ui/core';
import { Component } from 'react'

export class ToyFitler extends Component {
    state = {
        filterBy: {
            name: '',
            price: 0,
            type: 'All',
            inStock: 'All',
            sortBy: 'name'
        }

    }
    changeHandler = (ev) => {
        const { type } = ev.target;
        const value = type === 'range' ? +ev.target.value : ev.target.value;
        const field = ev.target.name;
        const { filterBy } = this.state;
        filterBy[field] = value;
        this.setState({ filterBy }, () => {
            this.props.onSetFilter(filterBy)
        })
    }

    render() {
        const { name, type, price, inStock, sortBy } = this.state.filterBy
        return (
            <section className="filter flex column ">
                <p>Search</p>
                <div className="flex">
                    <TextField
                        type="text"
                        name="name"
                        id="standard-name"
                        value={name}
                        label="Name"
                        onChange={this.changeHandler}
                        style={{ marginInlineEnd: '1em' }}
                    />
                    <FormControl>
                        <InputLabel>Type</InputLabel>
                        <NativeSelect
                            name='type'
                            onChange={this.changeHandler}
                            value={type}
                            style={{ marginInlineEnd: '1em' }}
                        >
                            <option value="All">All</option>
                            <option value="Funny">Funny</option>
                            <option value="Educational">Educational</option>
                            <option value="Adult">Adult</option>
                        </NativeSelect>
                    </FormControl>
                    <div className="flex column">

                        <span>From {price}$</span>
                        <input
                            type="range"
                            name="price"
                            min="0"
                            max="400"
                            value={price}
                            onChange={this.changeHandler}
                            style={{ marginInlineEnd: '1em' }}
                        />
                    </div>
                    <FormControl>
                        <InputLabel>in Stock</InputLabel>
                        <NativeSelect
                            name='inStock'
                            onChange={this.changeHandler}
                            value={inStock}
                            style={{ marginInlineEnd: '1em' }}
                        >
                            <option value="All">All</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </NativeSelect>
                    </FormControl>
                </div>

                <FormControl >
                    <p>Sort by</p>
                    <RadioGroup value={sortBy} name="sortBy" onChange={this.changeHandler}>
                        <FormControlLabel value="name" control={<Radio />} label="Name" />
                        <FormControlLabel value="price" control={<Radio />} label="Price" />
                    </RadioGroup>
                </FormControl>
            </section>

        )
    }
}
