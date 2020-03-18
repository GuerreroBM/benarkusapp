import React from 'react';
import Container from '@material-ui/core/Container';
import ContactDetails from './ContactDetails.tsx';

interface MyProps { }

interface MyState {
    isLoaded: boolean,
    page?: number,
    items?: any,
    error?: any
}

class ContactList extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            page: 0,
            items: null
        };
    }

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
        if (this.state.items) {
            return (
                <ContactDetails details={this.state.items.data} />
            )
        }

        return (
            <Container>
                <h2>No Contacts to Show</h2>
            </Container>
        );
    }
}

export default ContactList;