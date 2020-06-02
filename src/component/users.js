import React, { Component } from 'react';
import Layout from './../component/Layout';
import Table from './Table';
import Http from './../endpoints';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class User extends Component {
    constructor(props) {
        super(props);
        
    this.init();
    }
    state = {
        isLoading: true,
        renderRecords:null,
        paginationInfo:null,
    };
    table = {
        columns: [
            {
                heading: '#',
                key: 'id',
            },
            {
                heading: 'name',
                key: 'name',
            },
            {
                heading: 'group',
                key: 'group.name',
            },
            {
                heading: 'email',
                key: 'email',
            },
            {
                heading: 'actions',
                key: [],
            },
        ],
    };

    async init() {
        // request all users from API
        try {
            let { data } = await Http.get('/users');

            let { records, paginationInfo } = data;

            this.setState({ isLoading: false,
                renderRecords : records,
                paginationInfo : paginationInfo,
            });

        } catch (error) {
            let errors = error.response.data.errors;
            console.log(errors);
        }
    }

    render() {
        return (
            <div>
                <Layout />

                {this.state.isLoading ? <LinearProgress /> : <Table options={this.table} records={this.state.renderRecords}/>}

            </div>
        );
    }
}
