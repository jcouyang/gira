var should = chai.should();
var stub = sinon.stub;
var gira;

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

});

