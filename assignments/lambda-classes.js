// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${attr.name}, I am from ${attr.location}`;
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    studentGrade(student) {
        let points = Math.floor((Math.random() * 20) + 1);
        let addOrSub = Math.random() < .5 ? -1 : 1;
        points = points * addOrSub;
        student.grade = student.grade + points;
        let officialGrade = `${this.name}'s grade is ${student.grade}.`;
        return officialGrade;
    }
}

class Student extends Instructor {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class projectManager extends Student {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const charlie = new Instructor({
    name: 'Charlie',
    age: 30,
    location: 'Chicago',
    specialty: 'front-end',
    favLanguage: 'JavaScript',
    catchPhrase: '"embrace the suck"'
});

const ken = new Student({
    name: 'Ken',
    age: 25,
    location: 'LA',
    previousBackground: 'accessibility dev',
    className: 'Full Stack Web Development',
    favSubjects: ['history', 'math', 'magic']
});

const sarah = new projectManager({
    name: 'Sarah',
    age: 28,
    location: 'Orlando',
    gradClassName: 'web19',
    favInstructor: 'Charlie'
});

console.log(charlie.specialty);
ken.listsSubjects();
console.log(sarah.age);
console.log(ken.sprintChallenge('magic'));
console.log(charlie.demo('JavaScript'));
console.log(ken.sprintChallenge('JavaScript-IV'));
console.log(sarah.debugsCode('Harry Potter', 'Node.js'));
//stretch
console.log(officialGrade());

