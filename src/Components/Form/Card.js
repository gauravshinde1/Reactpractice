import React from 'react'

const Card = () => {
    return (
        <React.Fragment>
            <div class="card">
                <div class="card-header">Card</div>
                <div class="card-body">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>First Name :</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Last Name :</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Phone No. :</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Email :</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Password :</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card
