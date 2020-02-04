import React, { Component } from 'react';

class Login extends Component {
    confirmation(e) {
        e.preventDefault()
        const data = {
            'name': this.loginName.value,
            'password': this.loginPassword.value,
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/confirmUser',
            data: data,
            crossDomain: true,
            success: function (result) {
                console.log('result', result)
            },
            error: function (err) {
                alert('invalid information')
            }
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.confirmation.bind(this)}>
                    <label>
                        Name:
                        <input type="text" ref={node => this.loginName = node} />
                    </label>
                    <label>
                        Password:
                        <input type="text" ref={node => this.loginPassword = node} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.PaymentResponse.nextStep}>Create New User</button>
            </div>
        )
    }
}

