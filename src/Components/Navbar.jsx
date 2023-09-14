import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <span>User: {this.props.userName}</span>
                <button>
                    <NavLink to="/home" style={({ isActive }) => isActive ? { color: "coral" } : null} >
                        Home
                    </NavLink>
                </button>
                <button>
                    <NavLink to="/favorites" style={({ isActive }) => isActive ? { color: "coral" } : null} >
                        Favorites
                    </NavLink>
                </button>
                <hr />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.user.name
    }
}

//export default Navbar
export default connect(mapStateToProps)(Navbar)