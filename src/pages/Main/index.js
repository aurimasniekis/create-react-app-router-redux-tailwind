import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {mainActions} from "../../redux/modules/main";

class MainPage extends Component {
    static propTypes = {
        click: PropTypes.func.isRequired,
        count: PropTypes.number.isRequired,
    };

    static defaultProps = {
        click: () => {},
        count: -1,
    };


    render() {
        return <div className="mt-20 mx-auto text-center">
            <h1 className="text-3xl">Count: {this.props.count}</h1>

            <button className="mt-10 bg-blue-500 hover:bg-blue-700 focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={this.props.click}>Increase</button>

        </div>
    }
}

const mapStateToProps = (state) => ({
    count: state.main.count,
});

const mapDispatchToProps = {
    click: mainActions.mainClick
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
