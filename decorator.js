"use strict";
class Notifier {
    send(message) {
        console.log("Sending: " + message);
    }
}
class BaseNotifierDecorator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    send(message) {
        this.notifier.send(message);
    }
}
class EmailNotifierDecorator extends BaseNotifierDecorator {
    constructor(notifier) {
        super(notifier);
    }
    send(message) {
        console.log("Sending: " + message + " Via Email");
    }
}
class TextNotifierDecorator extends BaseNotifierDecorator {
    constructor(notifier) {
        super(notifier);
    }
    send(message) {
        console.log("Sending: " + message + " Via Text");
    }
}
class SmokeSignalNotifierDecorator extends BaseNotifierDecorator {
    constructor(notifier) {
        super(notifier);
    }
    send(message) {
        console.log("Sending: " + message + " Via Smoke Signal");
    }
}
const notifier = new EmailNotifierDecorator(new Notifier());
notifier.send("oi oi");
const notifier2 = new TextNotifierDecorator(new Notifier());
notifier2.send("sup");
const notifier3 = new SmokeSignalNotifierDecorator(new Notifier());
notifier3.send("oh hi there");
const notifier4 = new Notifier();
notifier4.send("plain old base class");
