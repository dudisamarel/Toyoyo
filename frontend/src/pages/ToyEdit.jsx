
import { toyService } from '../services/toyService';
import { Component } from 'react'
import { addToy, editToy } from '../store/Actions/toyActions'
import { Button } from '@material-ui/core';

import { connect } from 'react-redux'

class _ToyEdit extends Component {
    state = {
        toy: {
            name: '',
            price: 0,
            type: 'Funny'
        }
    }
    componentDidMount() {
        const toyId = this.props.match.params.id;
        if (toyId) {
            toyService.getById(toyId)
                .then(toy => {
                    this.setState({ toy })
                })
        }
    }

    onSave = (ev, toy) => {
        ev.preventDefault()
        if (toy._id) {
            this.props.editToy(toy)
        } else {
            this.props.addToy(toy)
        }

    }

    handleInput = ({ target }) => {
        const value = target.value;
        const field = target.name;
        const copy = { ...this.state.toy };
        copy[field] = value;
        this.setState({ toy: copy });
    };
    changeHandler = (ev) => {
        const { value } = ev.target;
        const { checked } = ev.target;
        const targetName = ev.target.name;
        const toy = { ...this.state.toy };
        switch (targetName) {
            case 'price':
                toy[targetName] = +value;
                this.setState({ toy })
                break;
            case 'inStock':
                toy.inStock = checked;
                this.setState({ toy })
                break;
            case 'name':
            case 'type':
                toy[targetName] = value;
                this.setState({ toy })
                break;
            default:
                break;
        }
    }

    render() {
        const { toy } = this.state
        return (
            <div className="flex column align-center">
                <section className='add-toy-layout flex align-center column'>
                    <form className='add-toy flex align-center column' onSubmit={(ev) => {
                        this.onSave(ev, toy)
                        this.props.history.push('/toy');
                    }}>
                        <h1>{toy._id ? "Edit" : "Create A Toy"}</h1>
                        <div className="flex column">

                            <label>
                                Name <input type="text" name="name" value={toy.name} placeholder="name" onChange={this.changeHandler} required></input>
                            </label>
                            <label>
                                Price <input type="number" name="price" value={toy.price} placeholder="price" onChange={this.changeHandler} required></input>
                            </label>
                            <label>
                        Type   
                        <select  name="type" onChange={this.changeHandler} value={toy.type}>
                                    <option value="Educational">Educational</option>
                                    <option value="Funny">Funny</option>
                                    <option value="Adult">Adult</option>
                                </select>
                            </label>
                            <label>
                                In Stock:
                        <input
                                    type="checkbox"
                                    name="inStock"
                                    checked={toy.inStock}
                                    onChange={this.changeHandler}
                                />
                            </label>

                        </div>
                        <Button type="submit" variant="contained" color="primary">
                            Save
                </Button>
                    </form>
                </section>
            </div>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    addToy,
    editToy,
}

export const ToyEdit = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_ToyEdit);
