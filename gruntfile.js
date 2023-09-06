module.exports = function(grunt){
	var gc = {
		imageNotyfy: __dirname+'\\src\\notify.png',
		minifyHtml: false,
		minifyCss: false
	},
	jsn = grunt.file.readJSON('package.json');
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	grunt.initConfig({
		globalConfig : gc,
		pkg : grunt.file.readJSON('package.json'),
		less: {
			css: {
				files : {
					'test/css/main.css' : [
						'src/less/main.less'
					]
				},
				options : {
					compress: gc.minifyCss,
					ieCompat: false
				}
			}
		},
		autoprefixer:{
			options: {
				browsers: ['last 2 versions', 'Android 4', 'ie 8', 'ie 9', 'Firefox >= 27', 'Opera >= 12.0', 'Safari >= 6'],
				cascade: false
			},
			css: {
				expand: true,
				flatten: true,
				src: [
					'test/css/main.css'
				],
				dest: 'test/css/main_pref/'//'assets/templates/skat_<%= pkg.version%>/css/'
			}
		},
		cssmin: {
			target: {
				files: {
					'site/assets/templates/skat_<%= pkg.version%>/css/main.css': [
						'test/css/main_pref/main.css'
					]
				}
			}
		},
		modernizr: {
			dist: {
				"crawl": false,
				"customTests": [],
				"dest": "site/assets/templates/skat_<%= pkg.version%>/js/modernizr.js",
				"tests": [
					"flexbox",
					"svg",
					"smil",
					"objectfit",
					"cssvhunit",
					"cssvwunit",
				],
				"options": [
					"setClasses"
				],
				"uglify": true
			}
		},
		requirejs: {
			ui: {
				options: {
					baseUrl: __dirname+"/bower_components/jquery-ui/ui/widgets/",//"./",
					paths: {
						jquery: __dirname+'/bower_components/jquery/dist/jquery'
					},
					preserveLicenseComments: false,
					optimize: "none",
					findNestedDependencies: true,
					skipModuleInsertion: true,
					exclude: [ "jquery" ],
					include: [ 
								"../disable-selection.js",
								"mouse.js",
								"slider.js",
							],
					out: "test/js/jquery.custom.ui.js",
					done: function(done, output) {
						grunt.log.writeln(output.magenta);
						grunt.log.writeln("jQueryUI Custom Build ".cyan + "done!\n");
						grunt.log.writeln("File " + (__dirname +"/test/js/jquery.slider.js").cyan + " created.\n");
						done();
					},
					error: function(done, err) {
						grunt.log.warn(err);
						done();
					}
				}
			}
		},
		uglify : {
			options: {
				ASCIIOnly: true,
				//beautify: true
			},
			app: {
				files: {
					'site/assets/templates/skat_<%= pkg.version%>/js/app.js' : [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/jquery.cookie/jquery.cookie.js',
						'test/js/jquery.custom.ui.js',
						'bower_components/jquery.easing/jquery.easing.js',
						'bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.js',
						'bower_components/jquery-mousewheel/jquery.mousewheel.js',
						'bower_components/jquery.maskedinput/dist/jquery.maskedinput.js',
						'bower_components/slick-carousel/slick/slick.js',
						'bower_components/mixitup/dist/mixitup.js',
						//'bower_components/parallax.js/parallax.js',
						'bower_components/jarallax/dist/jarallax.js',
						'bower_components/fancybox/dist/jquery.fancybox.js',
						'bower_components/arcticModal/arcticmodal/jquery.arcticmodal.js',
						'bower_components/jquery_lazyload/jquery.lazyload.js',
						'bower_components/bootstrap/dist/js/bootstrap.js',
					]
				}
			},
			hypher: {
				files: {
					'site/assets/templates/skat_<%= pkg.version%>/js/hypher.js' : [
						'bower_components/hyphernationRUru/dist/jquery.hypher.js',
						'bower_components/hyphernationRUru/dist/ru-ru.js',
					]
				}
			},
			main: {
				files: {
					'site/assets/templates/skat_<%= pkg.version%>/js/main.js': [
						'src/js/main.js',
					]
				}
			}
		},
		imagemin: {
			base: {
				options: {
					optimizationLevel: 7,
					//progressive: true,
					//interlaced: true,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/*.{png,jpg,gif,svg}'
						],
						dest: 'site/assets/templates/skat_<%= pkg.version%>/images/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/partners/*.{png,jpg,gif,svg}'
						],
						dest: 'site/assets/templates/skat_<%= pkg.version%>/images/partners/',
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'src/images/serificats/',
						src: ["**/*.{png,jpg,gif,svg}"],
						dest: 'site/assets/images/serificats/'
					},
				]
			},
			img: {
				options: {
					optimizationLevel: 5,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						cwd: 'src/images/images/',
						src: [
							"**/*.{png,jpg,gif,svg}"
						],
						dest: 'site/assets/images/'
					},
				]
			},
			css: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/css/*.{png,jpg,gif,svg}'
						],
						dest: 'src/images/bin/',
						filter: 'isFile'
					}
				]
			}
		},
		copy: {
			main: {
				expand: true,
				cwd: 'src/fonts',
				src: '**',
				dest: 'site/assets/templates/skat_<%= pkg.version%>/fonts/',
			},
			bootstrap: {
				expand: true,
				cwd: 'bower_components/bootstrap/dist/fonts',
				src: '**',
				dest: 'site/assets/templates/skat_<%= pkg.version%>/fonts/',
			},
			slick: {
				expand: true,
				cwd: 'bower_components/slick-carousel/slick/fonts',
				src: '**',
				dest: 'site/assets/templates/skat_<%= pkg.version%>/fonts/',
			},
			tpl: {
				expand: true,
				cwd: 'src/html/chunk',
				src: '**',
				dest: 'site/install/assets/chunks/',
			}
		},
		pug: {
			files: {
				options: {
					pretty: "\t",
					data: {
						debug: false
					}
				},
				files: {
					"index.php": [
						"src/pug/index.pug"
					],
				}
			},
			templates: {
				options: {
					pretty: "\t",
					data: {
						debug: false
					}
				},
				files: [
					{
						expand: true,
						cwd: 'src/pug/include',
						src: ['*.pug'],
						dest: 'site/install/assets/chunks/',
						ext: '.tpl'
					}
				]
			}
		},
		usebanner: {
			chunk: {
				options: {
					position: 'top',
					replace: /\s+/,
					process: function (filepath, f1, f2, f3, f4) {
						var arr = [].slice.call(arguments, 0);
						grunt.log.oklns(arr[0]);
						return grunt.template.process(
`/**
 * <%= filename %>
 * 
 * <%= template %> Templates SKAT_${jsn.version}
 * 
 * @category	chunk
 * @version		1.0
 * @license		http://www.gnu.org/copyleft/gpl.html GNU Public License (GPL)
 * @internal	@modx_category Templates SKAT_${jsn.version}
 * @internal	@installset base
 * @internal	@overwrite false
 */`,
							{
								data: {
									filename: filepath.match(/\/([^/]*)\.tpl$/)[1],
									template: String(filepath.match(/\/([^/]*)\.tpl$/)[1]).toUpperCase(filepath.match(/\/([^/]*)\.tpl$/)[1])
								}
							}
						);
					}
				},
				files: {
					src: ['site/install/assets/chunks/*.tpl']
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: [
					'src/pug/**/*.php',
					'src/pug/**/*.pug',
					'src/pug/**/*.tpl',
				],
				tasks: ["pug","copy","usebanner"]
			},
			js: {
				files: [
					'src/js/**/*.js'
				],
				tasks: ['requirejs', 'uglify',"pug","copy","usebanner"]
			},
			css: {
				files: [
					'src/less/**/*.{css,less}',
				],
				tasks: ['less', 'autoprefixer','cssmin', "pug","copy","usebanner"]
			},
			fonts: {
				files: [
					'src/fonts/**/*.*',
				],
				tasks: ['less', 'autoprefixer','cssmin', "copy"]
			},
			images: {
				files: [
					'src/images/*.{png,jpg,gif,svg}',
					'src/images/images/**/*.{png,jpg,gif,svg}',
					'src/images/partners/*.{png,jpg,gif,svg}',
					'src/images/css/*.{png,jpg,gif,svg}'
				],
				tasks: ['newer:imagemin', 'less', 'autoprefixer', 'cssmin', "copy"]//
			}
		}
	});
	grunt.registerTask('default', 	['imagemin', 'less', 'autoprefixer', 'cssmin', 'modernizr', 'requirejs', 'uglify', 'pug', 'usebanner', 'copy']);
	grunt.registerTask('dev', 		['watch']);
}