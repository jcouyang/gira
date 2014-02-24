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
			github.getIssues= function(){
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
			};
			github.getLabels = function(){
				return Q([{
					name:'1-doing'
				},{
					name:'something else'
				}]);
			};
			mynunjucks.render = sinon.spy();
		});

		it('group Issues by label', function(done){

			KanbanView.prototype.afterRender = function(){
				mynunjucks.render.args[0][1].should.be.deep.equal({"issuesWithLabel":[["0-Backlog",[{"name":"issue without label","labels":[]},{"name":"issue without number label","labels":[{"name":"wahaha"}]}]],["1-doing",[{"name":"issue1","labels":[{"name":"1-doing"},{"name":"haha"}]}]]],"last_label":"1-doing"});
				done();
			};
			var kanban = new KanbanView;
		});

		it('empty label', function(done){
			github.getIssues= function(){
				return Q([{
					name:'issue without label',
					'labels':[]
				},{
					name: "issue without number label",
					labels:[
						{name:'wahaha'}
					]
				}]);
			};
			github.getLabels=function(){
				return Q();
			};
			
			KanbanView.prototype.afterRender = function(){
				mynunjucks.render.args[0][1].should.be.deep.equal({"issuesWithLabel":[
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
				],"last_label":"0-Backlog"});
				done();
			};
			var kanban = new KanbanView;
		});

	});
});

