import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MyButton from "../../utils/MyButton";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import { withStyles, Typography, Grid } from "@material-ui/core";

const styles = (theme) => ({
  ...theme.spreadThis,
  commentImage: {
    maxWidth: "100%",
    height: 100,
    objectFit: "cover",
    borderRadius: "50%",
  },
  commentData: {
    marginLeft: 20,
  },
});

class Comments extends Component {
  render() {
    const { comments, classes } = this.props;
    return (
      <Grid container>
        {comments.map((comment, index) => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt}>
              <Grid item sm={12}>
                <Grid container>
                  <Grid item sm={2}>
                    <img
                      src={userImage}
                      alt="Comment"
                      className={classes.commentImage}
                    />
                  </Grid>
                  <Grid item sm={9}>
                    <div className={classes.commentData}>
                      <Typography
                        variant="h5"
                        component={Link}
                        to={`/user/${userHandle}`}
                        color="primary"
                      >
                        <span>{userHandle}</span>
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <span>
                          {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
                        </span>
                      </Typography>
                      <hr className={classes.invisibleSeparator} />
                      <Typography variant="body1">
                        <span>{body}</span>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {index !== comments.length - 1 && (
                <hr className={classes.visibleSeparator} />
              )}
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}
Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};
export default withStyles(styles)(Comments);
