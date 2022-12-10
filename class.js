class MedicineBuildings {
  numberOfHospital;
  numberOfStuff;
  isOpened;

  constructor(params) {
    this.numberOfHospital = params.numberOfHospital;
    this.numberOfStuff = params.numberOfStuff;
    this.isOpened = params.isOpened;
  }
  get getInfo() {
    return `${this.numberOfHospital},${this.numberOfStuff},${this.isOpened}`;
  }
}

class Labrotory extends MedicineBuildings {
  labStatus;
  constructor({ labStatus, ...params }) {
    super({ ...params });
    this.labStatus = labStatus;
  }
  set directorOfLab(value) {
    this.directorOfLabKKK = value;
  }
}
const MyLabrotory = new Labrotory({
  numberOfHospital: 54,
  numberOfStuff: 34,
  isOpened: true,
  labStatus: "clear",
});
MyLabrotory.directorOfLab = "wjnvfd n";
console.log(MyLabrotory);
