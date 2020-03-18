import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
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
            padding: '2px',
        },
        add: {
            float: 'left',
            position: 'absolute',
            bottom: '12%',
        }
    }),
);

export default function ContactDetails(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                                <div>
                                    <Link to={{ pathname: 'contact/' + tile.id }}>
                                        <IconButton aria-label={`info about ${tile.first_name} ${tile.last_name}`}
                                            className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    </Link>
                                    <Link to={{ pathname: 'edit/' + tile.id }}>
                                        <IconButton aria-label={`info about ${tile.first_name} ${tile.last_name}`}
                                            className={classes.icon}>
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                </div>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            <div className={classes.add}>
                <button type="button" onClick={handleOpen}>
                    Open Modal
                </button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-title">Add New Contact</h2>
                        <p id="simple-modal-description">
                            Fill the empty fields to add a new contact.
                        </p>
                    </div>
                </Modal>
            </div>
        </div>
    );
}