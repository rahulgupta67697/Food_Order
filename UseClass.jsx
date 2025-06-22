import React from 'react';


class UseClass extends React.Component{
    constructor(props)
{
    super(props);
}
    render()
    {
        return(
            <div className='Aboutdesi'>
                <div className='About-txt'>
                    <h1>About Me</h1>
                    <h3>{this.props.name}</h3>
                    
                    <h3>{this.props.para}</h3>
                </div>
            </div>
        )
    }
}
export default UseClass;