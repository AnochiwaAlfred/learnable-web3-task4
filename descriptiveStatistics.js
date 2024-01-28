




// 1. Create a class that has class/static properties and methods. Show how to use/access them.



class MathUtility{
    static pi = 3.14159265358979323846264338327950288;  // PI
    static R = 8.314;                                   // Gas Constant
    static F = 96485;                                   // Faradays Constant
    static h = eval(6.626 * (10 ** -34));               // Planks Constant
    static e = eval(1.602 * (10 ** -19));               // elesctron charge

    static add(a,b){
        return a + b;
    }

    static subtract(a,b){
        return a-b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b !== 0) {
          return a / b;
        } else {
            console.error("Division by zero is not allowed.");
            return undefined;
        }
    }
}


// Use Case
console.log('-----------------------Question 1------------------------ \n ')
console.log(`PI: ${MathUtility.pi}`);
console.log(`Gas Constant: ${MathUtility.R}`);
console.log(`Faradays Constant: ${MathUtility.F}`);
console.log(`Planks Constant: ${MathUtility.h}`);
console.log(`elesctron charge: ${MathUtility.e}`);

console.log(`Addition: ${MathUtility.add(5, 3)}`);
console.log(`Subtraction: ${MathUtility.subtract(8, 3)}`);
console.log(`Multiplication: ${MathUtility.multiply(4, 7)}`);
console.log(`Division: ${MathUtility.divide(10, 2)}`);
console.log('\n-----------------------End of Question 1------------------------ \n \n \n \n \n ')






// 2. Using ES6+ classes, prepare code that computes descriptive statistics. Use the refreshment below to refresh your memory.
// i. The measures of central tendency: 3 of them 
// ii. The measures of dispersion: 5 of them
// Refreshment: https://www.cuemath.com/data/descriptive-statistics/


class Statistically{

    static checkDataSet(dataset){
        if (typeof dataset != "object"){
            return 'Error --> Argument must be an array of numbers';
        }else if(dataset.length < 2){
            return 'Error --> Array must be populated with numbers';
        } else if(dataset.every(item => typeof item !== 'number')){
            return 'Error --> Array must be populated with numbers only';
        }else{
            return true;
        }
    }


    static mean(dataset){
        let sum = 0;
        let count=0;
        const check = Statistically.checkDataSet(dataset)

        if (check!==true){
            return check
        }else{
            dataset.forEach(item => {
                sum+=item;
            });
            count = dataset.length
            return sum/count;
        }
    }

    static median(dataset){
        const check = Statistically.checkDataSet(dataset)
        let median = 0

        if (check!==true){
            return check
        }else{
            let dataSorted = dataset.sort((a, b) => a - b);
            if (dataSorted.length%2!=0){
                const middleIndex = Math.floor(dataSorted.length / 2);
                median = dataSorted[middleIndex]
            }else{
                const middleIndex1 = dataSorted.length / 2 - 1;
                const middleIndex2 = dataSorted.length / 2;
                median = (middleIndex1+middleIndex2)/2
            }
            return median
        }
    }

    static mode(dataset){
        const check = Statistically.checkDataSet(dataset)
        let mode;
        let modes = []

        if (check!==true){
            return check
        }else{
            const frequencyMap = {};
            let maxFrequency = 0;

            dataset.forEach(item => {
                if (frequencyMap.hasOwnProperty(item)) {
                    let currentCount = frequencyMap[item];
                    let countToIncrement = currentCount || 0;
                    countToIncrement += 1;
                    frequencyMap[item] = countToIncrement;
                } else {
                    frequencyMap[item] = 1;
                };
            });

            for (const key in frequencyMap) {
                if (frequencyMap[key] > maxFrequency) {
                maxFrequency = frequencyMap[key];
                }
            }
            
            for (const key in frequencyMap) {
                if (frequencyMap[key] === maxFrequency) {
                modes.push(key)
                }
            }

            if (modes.length === 1) {
                mode = modes[0]
            }else if(modes.length===dataset.length){
                mode = "No Mode"
            }else if(modes.length>1 && modes.length!==dataset.length){
                mode=modes;
            }
            
            return mode
        }
    }


    static variance(dataset){
        const check = Statistically.checkDataSet(dataset)

        if (check!==true){
            return check
        }else{
            const mean = Statistically.mean(dataset);
            let sum = 0;
            const num = dataset.length;
            dataset.forEach(item => {
                let diff = item - mean;
                sum += eval(diff**2)
            })
            const variance = sum/num
            return variance
        }
    }

    static stanDev(dataset){
        const check = Statistically.checkDataSet(dataset)

        if (check!==true){
            return check
        }else{
            const variance = Statistically.variance(dataset);
            const stanDev = Math.sqrt(variance)
            return stanDev
        }
    }

    static range(dataset){
        const check = Statistically.checkDataSet(dataset)

        if (check!==true){
            return check
        }else{
            let dataSorted = dataset.sort((a, b) => a - b);
            const max = dataSorted[dataSorted.length-1];
            const min = dataSorted[0];
            const range = max-min
            return range
        }
    }


    static coefVar(dataset){
        const check = Statistically.checkDataSet(dataset)

        if (check!==true){
            return check
        }else{
            const stanDev = Statistically.stanDev(dataset)
            const mean = Statistically.mean(dataset)
            const coefVar = (stanDev/mean)*100
            return coefVar
        }
    }



    static iqr(dataset){
        const check = Statistically.checkDataSet(dataset)

        if (check!==true){
            return check
        }else{
            const n = dataset.length
            const Q1 = (n+1)/4;
            const Q3 = (n+1)*(3/4);
            const IQR = (Q3-Q1)/2;
            // const IQR = (n+1)/4;
            return IQR
        }
    }

}

console.log('-----------------------Question 2------------------------ \n ')

dataset = [2, 14, 20, 92, 92, 14, 45, 93, 61, 23, 4]
console.log(`Mean -- ${Statistically.mean(dataset)}`)
console.log(`Median -- ${Statistically.median(dataset)}`)
console.log(`Mode -- ${Statistically.mode(dataset)}`)
console.log(`Variance -- ${Statistically.variance(dataset)}`)
console.log(`Standard Deviation -- ${Statistically.stanDev(dataset)}`)
console.log(`Range -- ${Statistically.range(dataset)}`)
console.log(`Coefficient of Variation -- ${Statistically.coefVar(dataset)}`)
console.log(`InterQuartile Range -- ${Statistically.iqr(dataset)}`)
console.log('\n-----------------------End of Question 2------------------------ \n \n \n \n \n ')

