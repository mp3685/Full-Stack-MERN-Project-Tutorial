import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from './styles';
import { useLocation } from 'react-router-dom';


const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    return (
        // <div>
        //     <h1>App</h1>
        // </div>
        // <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} key={location.key}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;