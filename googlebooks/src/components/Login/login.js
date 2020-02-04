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
}