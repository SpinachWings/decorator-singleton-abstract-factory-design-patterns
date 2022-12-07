class Singleton {
  private static instance: Singleton;
  private data: string;

  private constructor(data: string) {
    this.data = data;
  }

  public static getInstance(data: string): Singleton {

    if (this.instance == null) {
      this.instance = new Singleton(data);
    }

    return this.instance;
  }
}

const instanceOne = Singleton.getInstance("data");
const instanceTwo = Singleton.getInstance("updated data");

console.log(instanceOne === instanceTwo);