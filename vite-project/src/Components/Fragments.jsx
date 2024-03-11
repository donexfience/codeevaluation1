import React from 'react';

const Fragments = () => {
    const items = ['item1', 'item2']; // Example array of items

    return (
        <React.Fragment>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <p>{item}</p>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

export default Fragments;
