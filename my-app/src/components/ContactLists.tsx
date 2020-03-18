import React from 'react';
import Container from '@material-ui/core/Container';



class ContactList extends React.Component {

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result,
                        page: result.page
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <Container>
                <h2>Contact List</h2>
            </Container>
        );
    }
}

export default ContactList;