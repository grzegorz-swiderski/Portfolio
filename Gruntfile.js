module.exports = function(grunt) {

  // Project configuration.
  
  grunt.initConfig({
	watch: {
    		scripts: {
        		files: ['sass/*.sass'],
        		tasks: ['sass'],
        		options: {
            			spawn: false,
        		},
    		} 
	},

	sass: {
      		options: {
        		sourceMap: false
      		},
      		dist: {
        		files: {
          			'css/style.css':'sass/style.sass'
        		}
      		}
    	},
		

	browserSync: {
            	bsFiles: {
        		src : 'assets/css/*.css'
    		},
    		options: {
			watchTask: true,
        		server: {
            			baseDir: "./"
       			 }	
    		}
        }
  
  });
  // Load the plugins tasks 

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
  
  // Default task(s).
  grunt.registerTask("default", ["sass", "browserSync", "watch"]);
};
