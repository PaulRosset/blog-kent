import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Favicon from "../images/favicon-fs8.png";
import "./index.css";
import firebase from "firebase/app";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
});

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nbClaps: 0,
      whenCompleted: null,
      nbClapsTotal: null,
      isEditing: false,
    };
    this.timer = setTimeout(() => {});
    this.ref = null;
  }

  componentDidMount() {
    this.ref = app.database().ref("rates/");
    this.ref.on("value", snapshot => {
      this.setState({ nbClapsTotal: snapshot.val().likesGlobal });
    });
  }

  handleClaps = e => {
    this.setState(
      prevState => ({
        nbClaps:
          prevState.nbClaps !== 50 ? prevState.nbClaps + 1 : prevState.nbClaps,
        isEditing: true,
      }),
      () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.ref.set(
            {
              likesGlobal: this.state.nbClapsTotal + this.state.nbClaps,
            },
            err => {
              if (err) {
                console.log(err);
                return;
              }
              this.setState({ nbClaps: 0, isEditing: false });
            }
          );
        }, 2000);
      }
    );
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Blog Kent University - Epitech 🤘</title>
          <meta
            name="description"
            content="Blog Kent University (French). Made by student for student."
          />
          <link rel="icon" type="image/png" href={Favicon} />
        </Helmet>
        <Header />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          <div className="clap" onClick={this.handleClaps}>
            {this.state.nbClaps !== 0 ? (
              <span className="counter_claps">{this.state.nbClaps}</span>
            ) : null}
            <svg
              version="1.1"
              className={
                this.state.isEditing ? "Heart Heart__beat fire" : "Heart"
              }
              x="0px"
              y="0px"
              viewBox="0 0 496.158 496.158"
              xmlSpace="preserve"
            >
              <path
                className={
                  this.state.isEditing ? "heartInside" : "heartOutside"
                }
                d="M0,248.085C0,111.063,111.069,0.003,248.075,0.003c137.013,0,248.083,111.061,248.083,248.082
	c0,137.002-111.07,248.07-248.083,248.07C111.069,496.155,0,385.087,0,248.085z"
              />
              <path
                className={
                  this.state.isEditing ? "heartOutside" : "heartInside"
                }
                d="M374.116,155.145c-34.799-34.8-91.223-34.8-126.022,0h-0.029c-34.801-34.8-91.224-34.8-126.023,0
	c-34.801,34.8-29.783,86.842,0,126.022c31.541,41.491,89.129,109.944,126.023,109.944h0.029c36.895,0,94.481-68.453,126.022-109.944
	C403.9,241.988,408.916,189.946,374.116,155.145z"
              />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
            <span className="counter_global">{this.state.nbClapsTotal}</span>
          </div>
          {this.props.children()}
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
