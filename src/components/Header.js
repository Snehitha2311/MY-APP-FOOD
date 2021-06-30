import React from 'react';
import { Jumbotron, InputGroup, FormControl, Button } from 'react-bootstrap';

const Header = (props) => {
    const { search, onInputChange, onSearchClick } = props;
    return (
        <div>
            <Jumbotron style={{ backgroundColor: 'skyblue', textAlign: 'center', color: 'white', padding: '' }}>
                <h1 className="display-1">
                    <i class="material-icons brand-icon">fastfood</i>Food Recipe</h1>

                <InputGroup>
                    <FormControl className="" style={{ marginLeft: '300px', margin: 'center' }}
                        placeholder="Search Your Recipe..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={props.search}
                        onChange={props.onInputChange}
                    />
                    <InputGroup.Append>
                        <Button variant="dark" onClick={onSearchClick}>Search Recipe</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
        </div>
    )
}
export default Header;