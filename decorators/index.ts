// TODO inspiration: https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/

// ! PART 1 class decorators

function submitIntoOrdersSystem(deliverable: any){
  console.log(`Deliverable ${deliverable} submitted into orders system`);
}

function Deliverable<T extends { new (...args: any[]): {} }>(parentConstructor: T) {
  return class extends parentConstructor {
    constructor(...args: any[]) {
      super(args);
      submitIntoOrdersSystem(this);
    }
  };
}


@Deliverable
class Food {
  type = "report";
  description: string;

  constructor(t: string) {
    this.description = t;
  }
}

const food = new Food("kebab");

@Deliverable
class Menu {
  soup!: number;
  mainCourse!: string;
}

// ! PART 2 property decorators

const Spicy = (scovilleValue: number) => (target: Object, propertyKey: string) => {
  Object.defineProperty(target, 'warning', {
    value: `WARNING: This food is spicy: ${scovilleValue} scoville units`,
    writable: false
  })
}

@Deliverable
class Menu2 {
  soup!: number;
  @Spicy(10000)
  mainCourse!: string;
}

const menu = new Menu2()
console.log((menu as any).warning);

// ! PART 3 method decorators

// TODO could be used for delivery, or meal preparation
const Measure = (processName: string) => (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
  const targetMethod = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    const processBegin = Date.now();
    console.log(`Started ${processName}`);
    const result = targetMethod.apply(this, args);
    if (result instanceof Promise) {
      await result;
    }
    console.log(`Ended ${processName}`)
    const processEnd = Date.now();
    console.log(`Overall time = ${processEnd - processBegin} ms`);
  }
};

@Deliverable
class Menu3 {
  soup!: number;
  @Spicy(10000)
  mainCourse!: string;
  
  @Measure('deliver')
  deliver() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done');
      }, 3000);
    })
  }
}

const menu3 = new Menu3();
menu3.deliver();
