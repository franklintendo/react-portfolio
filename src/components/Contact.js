import React from 'react';

function Contact() {
    return (
        <div className="container-fluid body-content">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8 my-3">
                <div className="content-container border rounded py-3 px-3 mx-3">
                        <h1 className="content-title border-bottom">Contact Me</h1>
                        <form>
                                <div className="form-group">
                                        <label for="name">Name</label>
                                        <input type="name" className="form-control" id="name" placeholder="Enter your name" />
                                    </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="form-group">
                                    <label for="comments">Comments</label>
                                    <textarea className="form-control" id="comments" rows="3" placeholder="Enter your message"></textarea>
                                </div>
                                <button className="btn btn-lg">Submit</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;