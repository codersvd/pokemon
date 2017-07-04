/**
 * Created by dima on 04.07.17.
 */
var {User} = require('./../models/User');

module.exports = (app) =>{
    let path = "/auth";
    /**
     * @method POST for creation a new user
     * @description Create a new user
     * @param UserID {String} - is ID of the user
     * @param UserProfile {String} - is information about the user
     * @returns {Object} - if user was created then success or if not inserted then error message.
     */
    app.post(path+'/local', (req, res) => {
        var user = new User({
            UserID: req.body.UserID,
        });

        user.save().then((doc) => {
            res.json({
                status: "success",
                message: "The user was created"
            });
        }).catch( (e) => {
            let message = "The user wasn't created";
            if(e.errors.UserID.message) {
                message = e.errors.UserID.message;
            }

            res.status(400).json({
                status: "error",
                message
            });
        });
    });

    app.get(path+'/facebook', passport.authenticate('facebook', { scope : 'email' }));

    app.get(path+'/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};