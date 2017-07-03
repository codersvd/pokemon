var {User} = require('./../models/User');

module.exports = (app) =>{
    let path = "/user";
    /**
     * @method POST for creation a new user
     * @description Create a new user
     * @param UserID {String} - is ID of the user
     * @param UserProfile {String} - is information about the user
     * @returns {Object} - if user was created then success or if not inserted then error message.
     */
    app.post(path+'/newUser', (req, res) => {
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

    /**
     * @method POST for updating UserProfile of the user
     * @description Update UserProfile of users who found by UserID(:id)
     * @param UserID = :id {String} - is ID of the user
     * @param UserProfile {String} - is information about the user
     * @returns {Object} - if user was updated then success or if not updated then error.
     */
    app.post(path+'/profileUpdate/:id', (req, res) => {
        let id = req.params.id;
        let info = req.body.UserProfile;

        if(info) {
            User.findOneAndUpdate({UserID: id}, {UserProfile: info}, {new: true}).then((user) => {
                if (!user) {
                    return res.status(404).json({
                        status: "error",
                        message: "User is not found"
                    });
                }
                return res.json({
                    status: "success",
                    message: "User was updated"
                });
            }).catch((e) => {
                res.status(400).json({
                    status: "error",
                    message: e.errors.UserProfile.message
                });
            });
        }
        else {
            return res.status(400).json({
                status: "error",
                message: "UserProfile is null"
            });
        }
    });

    /**
     * @method GET for choice the user
     * @description Get UserProfile by UserID
     * @param UserID = :id {String} - is ID of the user
     * @returns {Object} - if user was chosen then success or if not chosen then error.
     */
    app.get(path+'/:id', (req, res) => {
        let id = req.params.id;

        User.findOne({UserID: id}).then((user) => {
            if (!user) {
                return res.status(404).json({
                    status: "error",
                    message: "User is not found"
                });
            }
            return res.json({
                status: "success",
                UserProfile: user.UserProfile ? user.UserProfile : ""
            });
        }).catch((e) => {
            res.status(400).json({
                status: "error",
                message: "Some errors, please ask support administrator"
            });
        });
    });

};