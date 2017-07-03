import Peer from 'peerjs-client';

/**
 * @class AudioVideoService
 * @description Service for video and audio communication
 */
export default class AudioVideoService {

    /**
     * @method constructor
     * @description Setup new Peer instance
     * @param {Object} config - connection configuration
     * @param {String} config.host - PeerServer host
     * @param {String} config.port - PeerServer port
     * @param {String} config.path - path where PeerServer is running
     * @param {String} id - your identifier
     */
    constructor(config, id) {
        let {host, port, path} = config;
        this.peer = new Peer(id, {host, port, path});
    }

    /**
     * @method makeLocalStream
     * @description Access to local media devices
     * @param {Boolean} video - access to camera
     * @param {Boolean} audio - access to microphone
     * @returns {Promise} - promise with localStream
     */
    makeLocalStream(video = true, audio = true) {
        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia;
        return new Promise((resolve, reject) => {
            navigator.getUserMedia({video, audio}, resolve, reject);
        });
    }

    /**
     * @method makeCall
     * @description Create remote stream
     * @param {String} targetId - remote user's identifier
     * @param {Boolean} video - access to camera
     * @param {Boolean} audio - access to microphone
     * @returns {Promise} - promise with remoteStream
     */
    async makeCall(targetId, video = true, audio = true) {
        let localStream = await this.makeLocalStream(video, audio);
        let call = this.peer.call(targetId, localStream);
        return await new Promise((resolve, reject) => {
            call.on('stream', resolve);
            call.on('error', reject);
        });
    }

    /**
     * @method answerCall
     * @description Create remote stream
     * @param {Object} call - call object
     * @param {Boolean} video - access to camera
     * @param {Boolean} audio - access to microphone
     * @returns {Promise} - promise with remoteStream
     */
    async answerCall(call, video = true, audio = true) {
        let localStream = await this.makeLocalStream(video, audio);
        return await new Promise((resolve, reject) => {
            call.answer(localStream);
            call.on('stream', resolve);
            call.on('error', reject);
        });
    }

    /**
     * @method onCall
     * @description Waiting for an incoming call
     * @param {Function} cb - run if incomming call
     */
    onCall(cb) {
        this.peer.on('call', cb);
    }

}
