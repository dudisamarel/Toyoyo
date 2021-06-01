import React from 'react'
import { ToyPreview } from './ToyPreview'

export function ToyList({ toys ,remove}) {
    return (
        <div className="list-grid">
            {toys.map(toy => <ToyPreview key={toy._id} toy={toy} remove={remove}/>)}
        </div>
    )
}
