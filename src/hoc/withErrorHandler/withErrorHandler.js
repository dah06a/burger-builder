import React, { Component } from 'react';

import Auxi from '../Auxi/Auxi';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            error: false,
            errorWasDismissed: false
        }

        constructor(props) {
            super(props);

            this.reqInterceptor = axios.interceptors.request.use(req => {
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, err => {
                this.props.history.push('/network-error');
            });
        }

        componentDidUpdate () {
            const endPath = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

            if (endPath === 'network-error' && !this.state.error && !this.state.errorWasDismissed) {
                this.setState({error: true});
            }
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: false});
            this.setState({errorWasDismissed: true});
        }

        render () {
            return (
                <Auxi>
                    <Modal 
                        show={this.state.error && !this.state.errorWasDismissed}
                        modalClosed={this.errorConfirmedHandler}
                        >{this.state.error ? <p style={{textAlign: 'center'}}><strong>Network Error</strong></p> : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxi>
            );
        }
    } 
}

export default withErrorHandler;