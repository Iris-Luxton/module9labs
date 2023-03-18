import React from 'react'

function Reservation() {
    const [formState, setFromState] = React.useState({isGoing: true, numberOfGuests: 2});

    const handleInputChanges = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        setFromState ((pre) => ({...pre, [target.name]: value}))
    };

    return (
        
        <form>
            <div>
                <label>
                    is going: <input name='isGoing' type='checkbox' checked={formState.isGoing} onChange={handleInputChanges} />
                </label>
            </div>
            
            <div>
                <label>
                    Number of guests: <input name="numberOfGuests" type='number' value={formState.numberOfGuests} onChange={handleInputChanges} />
                </label>
            </div>
        </form>
    )
}

export default Reservation;