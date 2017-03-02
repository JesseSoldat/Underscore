//base class
var Job = function(){
	this.pays = true;
};

//proto
Job.prototype.print = function(){
	console.log(this.pays ? 'Please hire me' : 'This job is an unpaid internship');
}

//subclass
var TechJob = function(title, pays){
	Job.call(this) //give access to Job but not protype print()
	
	this.title = title;
	this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype); //inherit Job prototype
TechJob.prototype.constructor = TechJob; //construtor for TechJob

TechJob.prototype.print = function(){
	console.log(this.pays ? this.title + ' job is great, please hire me' : 'sorry it will not work out');
}

var job1 = new TechJob('React', true);
var job2 = new TechJob('HTML', false);

// job1.print()
// job2.print()

var TeachingJob = function(title, pays){
	Job.call(this);

	this.title = title;
	this.pays = pays
}

TeachingJob.prototype = Object.create(Job.prototype);
TeachingJob.prototype.constructor = TeachingJob;

var job3 = new TeachingJob('English', true);
var job4 = new TeachingJob('Math', false);


job3.print();
job4.print();