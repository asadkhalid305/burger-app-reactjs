import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../ReactAux'

const ErrorHandler = (WrapperComponent, axios) => {
    return (
        class extends Component {
            state = {
                error: null
            }

            componentDidMount() {
                this.reqInterceptor = axios.interceptors.request.use(req => {
                    this.setState({ error: null })
                    return req
                })

                this.resInterceptor = axios.interceptors.response.use(req => req, error => {
                    this.setState({ error: error })
                })
            }

            componentWillUnmount() {
                console.log("will unmount", this.reqInterceptor, this.resInterceptor)
                axios.interceptors.request.eject(this.reqInterceptor)
                axios.interceptors.response.eject(this.resInterceptor)
            }

            errorConfirmedHandler = () => {
                this.setState({ error: null })
            }

            render() {
                return (
                    <Aux>
                        <Modal
                            show={this.state.error}
                            cancel={this.errorConfirmedHandler}>
                            {this.state.error ? this.state.error.message : null}
                        </Modal>

                        <WrapperComponent {...this.props} />
                    </Aux>
                )
            }
        }
    );
};

export default ErrorHandler;