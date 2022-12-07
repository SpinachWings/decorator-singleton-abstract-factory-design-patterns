interface NotifierInterface {
  send(message: string): void;
}

class Notifier implements NotifierInterface {

  send(message: string) {
    console.log("Sending: " + message);
  }
}

class BaseNotifierDecorator implements NotifierInterface {

  notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  send(message: string) {
    this.notifier.send(message);
  }
}

class EmailNotifierDecorator extends BaseNotifierDecorator implements NotifierInterface {

  constructor(notifier: Notifier) {
    super(notifier);
  }

  send(message: string) {
    console.log("Sending: " + message + " Via Email");
  }
}

class TextNotifierDecorator extends BaseNotifierDecorator implements NotifierInterface {

  constructor(notifier: Notifier) {
    super(notifier);
  }

  send(message: string) {
    console.log("Sending: " + message + " Via Text");
  }
}

class SmokeSignalNotifierDecorator extends BaseNotifierDecorator implements NotifierInterface {

  constructor(notifier: Notifier) {
    super(notifier);
  }

  send(message: string) {
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