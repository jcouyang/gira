var should = chai.should();
var stub = sinon.stub;
var gira;

describe('unit test', function(){
	beforeEach(function(){
		gira = new Gira('jcouyang','gira');
	});

	describe('getIssues',function(){
		var	mockQ = Q([{
				'labels':[
				{name:"1+doing"},
				{name:"haha"}]
			},
			{
				'labels':[
				{name:"1+doing"},
				{name:"haha"}]
			},
		  {
				'haha':[
				{name:"1+doing"},
				{name:"haha"}]
			}
			]);

		it('group Issues by label', function(done){
			stub(gira, 'getIssues').returns(mockQ);
			gira.groupIssuesByLabels().should.eventually.deep.equal(
				{'doing':[
					{
						'labels':[
							{name:"haha"}]
					},
					{
						'labels':[
							{name:"haha"}]
					}
				],
				 'backlog':[
					 {
						 'haha':[
							{name:"1+doing"},
							{name:"haha"}
						 ]
					 }
				 ]}).notify(done);	
		});
	});
});

describe('e2e test', function(){
	beforeEach(function(){
		gira = new Gira('jcouyang','gira');
	});

	describe('login', function(){
		it('already login', function(){
			localStorage.setItem("access_token", "some token");
			gira.checkLogin().should.be.true;
		});
	});
	
	describe('getLabels', function(){
    it('get all label of use', function(done){
			gira.getLabels().should.eventually.have.deep.property('[0].url').notify(done);
    });
	});

	describe('getRepos', function(){
		it('get user repos', function(done){
			localStorage.setItem("access_token", "701759f2b2ab2994445e1fc6946841744db8a147");
			gira = new Gira("jcouyang", 'gira');
			gira.getRepos().should.eventually.have.deep.property('[0].full_name').notify(done);	
		});
	});
});
