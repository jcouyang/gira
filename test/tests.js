var should = chai.should();
var stub = sinon.stub;
var Github = function(){
	
};
Github.prototype = {
	getAccessToken: function(){
		return Q();
	},
	getUser:function() {
		return Q();
	},
	getReposUrl:function(owner,repo) {
		return  "/";
	},
	checkLogin: function() {
		return true;
	},
	logout: function() {
	},
	getLabels: function(owner,repo){
		return Q();
	},
	getMilestones: function(owner,repo){
		return Q();
	},
	getIssues: function(owner,repo,milestone, id) {
		return Q();
	},
	getRepos: function(){
		return Q();
	},
	addLabel: function(owner,repo,id,label) {
		return Q();
	},
	createLabel: function(owner,repo,label){
		return Q();
	},
	deleteLabel: function(owner,repo,id,label){
		return Q();
	},
	newIssue: function(owner, repo, issue,id) {
		return Q();
	}
};
var github = new Github();

describe('unit test', function(){
	describe('getIssues',function(){
		beforeEach(function(){
			var github = {
				getIssues: function(){
					return Q([{
						name:'issue1',
						'labels':[
							{name:"1-doing"},
							{name:"haha"}]
					},{
						name:'issue without label',
						'labels':[]
					},{
						name: "issue without number label",
						labels:[
							{name:'wahaha'}
						]
					}]);
				},
				getLabels:function(){
					return Q([{
						name:'1-doing'
					},{
						name:'something else'
					}]);
				}
			};
			gira = new Gira('jcouyang','gira',github);			
		});

		it('group Issues by label', function(done){

			gira.groupIssuesByLabels().should.eventually.deep.equal([
				['0-Backlog',[{
					name:'issue without label',
					'labels':[]
				},{
					name: "issue without number label",
					labels:[
						{name:'wahaha'}
					]
				}]],
				['1-doing',[{name:'issue1','labels':[{name:"1-doing"},{name:"haha"}]}]]
				]).notify(done);	
		});

		it('empty label', function(done){
			var github = {
				getIssues: function(){
					return Q([{
						name:'issue without label',
						'labels':[]
					},{
						name: "issue without number label",
						labels:[
							{name:'wahaha'}
						]
					}]);
				},
				getLabels:function(){
					return Q();
				}
			};
			gira = new Gira('jcouyang','gira',github);
			gira.groupIssuesByLabels().should.eventually.deep.equal([
				['0-Backlog',
				 [{
					 name:'issue without label',
					 'labels':[]
				 },{
					 name: "issue without number label",
					 labels:[
						 {name:'wahaha'}
					 ]
				 }]
				]
				]).notify(done);	
		});

		
	});

	describe("render", function(){
		it("render not  ok", function(done){
			gira = new Gira('jcouyang','gira',github);
			gira.render().catch(function(error){
				throw error;
			}).then(done);
		});

	});

	
});

