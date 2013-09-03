(function(){

  'use strict';

  describe('The data platform', function(){

    it('should provide an object called PDP', function(){

        expect( PDP ).not.toBeUndefined();

    });

    describe('The app\'s URL', function(){

      it('should know its values', function(){

        var originalHash = '#!/as_of_year=2011&state_abbr=OR',
            expectedArray = [ { name : 'as_of_year', values : [ '2011' ], comparator : '=' }, { name : 'state_abbr', values : [ 'OR' ], comparator : '=' } ];

        window.location.hash = originalHash;

        expect( PDP.app.getUrlValues() ).toEqual( expectedArray );

      });

    });

  });

})();
