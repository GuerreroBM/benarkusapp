import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

interface MyProps {
    match: any
}

interface MyState {
    isLoaded: boolean,
    items?: {
        data: {
            id: number,
            email: string,
            first_name: string,
            last_name: string,
            avatar: string
        },
        ad: {
            company: string,
            url: string,
            text: string
        }
    },
    error?: any
}

class EditContact extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true
        };
    }

    componentDidMount() {
        this.fetchContactDetails();
    }

    fetchContactDetails(id?: number) {
        if (!id) id = this.props.match.params.id;
        fetch("https://reqres.in/api/users/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("FETCH: ", result);
                    this.setState({
                        isLoaded: true,
                        items: result
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
            var contact = this.state.items.data;
            var ad = this.state.items.ad;
            return (
                <Container>
                    <Paper>
                        <h2>{contact.id}.- {contact.first_name} {contact.last_name}</h2>
                        <img src={contact.avatar} alt={contact.email} />
                        <h2>{contact.email}</h2>
                    </Paper >
                    <Paper>
                        <h2>{ad.company}</h2>
                        <a href={ad.url}>{ad.url}</a>
                        <h2>{ad.text}</h2>
                    </Paper >
                </Container>
            );
        }
        return (
            <Container>
                <h2></h2>
            </Container>
        );
    }
}

export default EditContact;