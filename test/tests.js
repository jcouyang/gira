var should = chai.should();
var stub = sinon.stub;
var Github = function(){
};
var kanban;
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
		return Q([{
			name:'1-doing'
		},{
			name:'something else'
		}]);
	},
	getMilestones: function(owner,repo){
		return Q();
	},
	getIssues: function(owner,repo,milestone, id) {
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
	describe('KanbanView',function(){
		beforeEach(function(){
			mynunjucks.render = sinon.spy();
		});
		it('group Issues by label', function(done){

			KanbanView.prototype.afterRender = function(){
				mynunjucks.render.args[0][1].should.be.deep.equal({"issuesWithLabel":[["0-Backlog",[{"name":"issue without label","labels":[]},{"name":"issue without number label","labels":[{"name":"wahaha"}]}]],["1-doing",[{"name":"issue1","labels":[{"name":"1-doing"},{"name":"haha"}]}]]],"last_label":"1-doing"});
				done();
			};
			kanban = new KanbanView;
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
			kanban = new KanbanView;
		});

		it("remove lane", function(){
			github.deleteLane = sinon.spy();
			window.location.reload = function(){};
			kanban.removeLane({currentTarget:'<div data="1-done"></div>'
												 ,preventDefault:function(){return false}
												});
			github.deleteLane.calledWith("1-done").should.be.true;
		});

		it("close issue", function(){
			github.newIssue = sinon.spy();
			github.getIssues = sinon.spy();
			kanban.milestone = "";
			kanban.closeIssue({currentTarget:"<div data-issue=wahaha></div>"});
			github.getIssues.calledWith("","wahaha").should.be.true;
		});
	});
});

