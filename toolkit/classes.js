export class Vec {

    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    /**
     * Sum vector to the initial vector
     * @param {number} x 
     * @param {number} y 
     */
    plus(x, y) {
        return (this.x + x, this.y + y)
    }

    /**
     * Minus the vector to the initial vector
     * @param {number} x 
     * @param {number} y 
     */
    minus(x, y) {
        return (this.x - x, this.y - y)
    }

    /**
     * Return the length from (0, 0) to the initial vector
     * @return {number}
     */
    get length() {
        return Number(Math.sqrt(this.x ** 2 + this.y ** 2).toFixed(2))
    }
}

export class Group {
    constructor(){
        this.group = []
    }

    [Symbol.iterator](){
        let index = 0
        const members = this.group
        return {
            next() {
                if (index < members.length) {
                    return { value: members[index++], done: false }
                }
                return { done: true }
            }
        }
    }

    add(x){
        if (!this.has(x))
            this.group.push(x)
    }

    delete(x) {
        this.group = this.group.filter((item) => item !== x)
    }

    has(x) {
        return this.group.includes(x)
    }

    static from(array){
        const group = new Group()
        for (let value of array) {
            group.add(value)
        }
        return group
    }
}
