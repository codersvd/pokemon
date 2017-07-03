const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {User} = require('./../models/User');

const users = [{
    UserID: 'FirstUserId'
}, {
    UserID: 'SecondUserId'
}];

beforeEach((done) => {
    User.remove({}).then(() => {
        return User.insertMany(users);
    }).then(() => done());
});

describe('POST /user/newUser', () => {
    let path = '/user/newUser';
    it('should create a new user', (done) => {
        var id = 'ThirdUserId';

        request(app)
            .post(path)
            .send({"UserID": id})
            .expect(200)
            .expect((res) => {
                expect(res.body.status).toBe("success");
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                User.find({UserID: id}).then((users) => {
                    expect(users.length).toBe(1);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not create user with invalid UserID', (done) => {
        request(app)
            .post(path)
            .send({UserID: ""})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                User.find().then((users) => {
                    expect(users.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('POST /user/profileUpdate/:id', () => {
    let id = users[0].UserID;
    let path = '/user/profileUpdate/' + id;

    it('should update the user', (done) => {

        request(app)
            .post(path)
            .send({UserProfile: "update field"})
            .expect(200)
            .expect((res) => {
                expect(res.body.status).toBe("success");
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                User.findOne({UserID: id}).then((user) => {
                    expect(user.UserID).toBe(id);
                    done();
                }).catch((e) => done(e));

            });
    });

    it('should not update the user', (done) => {
        request(app)
            .post(path)
            .send({})
            .expect(400)
            .expect((res) => {
                expect(res.body.status).toBe("error");
            })
            .end(done);
    });
});

describe('GET /user', () => {
    it('should get user by UserID', (done) => {
        let id = users[0].UserID;
        request(app)
            .get('/user/'+id)
            .expect(200)
            .expect((res) => {
                expect(res.body.status).toBe("success");
            })
            .end(done);
    });
});