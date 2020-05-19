import React, { Component } from "react";
import PropTypes from "prop-types";
import MyButton from "../../utils/MyButton";

// mui
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, DialogActions, Dialog, DialogTitle } from "@material-ui/core";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

import { connect } from "react-redux";
import { deleteScream } from "../../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.spreadThis,
  deleteButton: {
    position: "absolute",
    left: "90%",
    top: "10%",
  },
});

export class DeleteScream extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  deleteScream = () => {
    this.props.deleteScream(this.props.screamId);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <MyButton
          tip="Delete Scream"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="secondary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            <span>Are You Sure Wanna Delete this Scream</span>
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              <span>Cancel</span>
            </Button>
            <Button onClick={this.deleteScream} color="secondary">
              <span>Delete</span>
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

DeleteScream.propTypes = {
  deleteScream: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
};

export default connect(null, { deleteScream })(
  withStyles(styles)(DeleteScream)
);
