try{
  Object.assign(process.env, require('./.env.js'));
}
catch(ex){
  console.log('no .env file found');
}
const expect = require('chai').expect;
const  Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);
conn.define('user', {
});


describe('Some Stuff', ()=> {
  describe('a database', ()=> {
    beforeEach(()=> {
      return conn.sync({ force: true });
    });
    it('seeds', ()=> {
    });
  });
  describe('the concat method', ()=> {
    it('does not mutate', ()=> {
      const a = [1, 2];
      const b = [3, 4];
      expect(a.concat(b)).to.not.equal(a);
    });
    it('creates a new array', ()=> {
      const a = [1, 2];
      const b = [3, 4];
      expect(a.concat(b)).to.eql([1, 2, 3, 4 ]);
    });
  });
  describe('an environment variable', ()=> {
    it('FOO is BAR', ()=> {
      expect(process.env.FOO).to.equal('BAR');
    });
  });
});
