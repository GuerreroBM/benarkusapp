import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 500,
            height: 640,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);

export default function ContactDetails(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Contact List</ListSubheader>
                </GridListTile>
                {props.details.map(tile => (
                    <GridListTile key={tile.avatar}>
                        <img src={tile.avatar} alt={tile.title} />
                        <GridListTileBar
                            title={<span>{tile.first_name} {tile.last_name}</span>}
                            subtitle={tile.email}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.first_name} ${tile.last_name}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}