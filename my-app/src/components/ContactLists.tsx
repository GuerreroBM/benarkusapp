import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import ContactDetails from './ContactDetails.tsx';
import Pagination from '@material-ui/lab/Pagination';

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
            page: 1,
            items: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.page != nextState.page) this.fetchContacts(nextState.page);
        return true;
    }

    componentDidMount() {
        this.fetchContacts();
    }

    handleChange(event, value) {
        this.setState({
            page: value
        });
    }

    fetchContacts(page?: number) {
        if (!page) page = this.state.page;
        fetch("https://reqres.in/api/users?page=" + page)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("=== fetchContacts", result);
                    console.log("https://reqres.in/api/users?page=" + this.state.page);
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
                <Container>
                    <ContactDetails details={this.state.items.data} />
                    <Pagination count={2} color="primary" page={this.state.page} onChange={this.handleChange} />
                </Container>
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