module.exports = function(grunt){
	var gc = {
		imageNotyfy: __dirname+'\\src\\notify.png',
		minifyHtml: false,
		minifyCss: false
	};
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
				browsers: ['> 1%', 'last 2 versions', 'Firefox 16.0', 'Opera 12.1', "Chrome 26.0"],
				cascade: false
			},
			css: {
				expand: true,
				flatten: true,
				src: [
					'test/css/main.css'
				],
				dest: 'assets/templates/skat_<%= pkg.version%>/css/'
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
								"slider.js",
							],
					out: "test/js/jquery.slider.js",
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
					'assets/templates/skat_<%= pkg.version%>/js/app.js' : [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/jquery-mousewheel/jquery.mousewheel.js',
						'bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.js',
						'bower_components/jquery.maskedinput/dist/jquery.maskedinput.js',
						'bower_components/slick-carousel/slick/slick.js',
						'bower_components/parallax.js/parallax.js',
						'bower_components/arcticModal/arcticmodal/jquery.arcticmodal.js',
						'bower_components/jquery_lazyload/jquery.lazyload.js',
						'bower_components/bootstrap/dist/js/bootstrap.js',
					]
				}
			},
			hypher: {
				files: {
					'assets/templates/skat_<%= pkg.version%>/js/hypher.js' : [
						'bower_components/hyphernationRUru/dist/jquery.hypher.js',
						'bower_components/hyphernationRUru/dist/ru-ru.js',
					]
				}
			},
			main: {
				files: {
					'assets/templates/skat_<%= pkg.version%>/js/main.js': [
						'src/js/main.js',
					]
				}
			}
		},
		imagemin: {
			base: {
				options: {
					optimizationLevel: 5,
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
						dest: 'assets/templates/skat_<%= pkg.version%>/images/',
						filter: 'isFile'
					}
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
				dest: 'assets/templates/skat_<%= pkg.version%>/fonts/',
			},
			bootstrap: {
				expand: true,
				cwd: 'bower_components/bootstrap/dist/fonts',
				src: '**',
				dest: 'assets/templates/skat_<%= pkg.version%>/fonts/',
			},
			slick: {
				expand: true,
				cwd: 'bower_components/slick-carousel/slick/fonts',
				src: '**',
				dest: 'assets/templates/skat_<%= pkg.version%>/fonts/',
			},
			tpl: {
				expand: true,
				cwd: 'src/html/chunk',
				src: '**',
				dest: 'install/assets/chunks/',
			}
		},
		jade: {
			files: {
				options: {
					pretty: !gc.minifyHtml,
					data: {
						debug: false
					}
				},
				files: {
					"index.html": [
						"src/jade/index.jade"
					],
				}
			},
			templates: {
				options: {
					pretty: !gc.minifyHtml,
					data: {
						debug: false
					}
				},
				files: [
					{
						expand: true,
						cwd: 'src/jade/includes',
						src: ['*.jade'],
						dest: 'install/assets/chunks/',
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
							"/** \n"+
							" * <%= filename %>\n"+
							" * \n"+
							" * <%= template %> Templates SKAT_<%= pkg.version%>\n"+
							" * \n"+
							" * @category	chunk\n"+
							" * @version		1.0\n"+
							" * @license		http://www.gnu.org/copyleft/gpl.html GNU Public License (GPL)\n"+
							" * @internal	@modx_category Templates SKAT_<%= pkg.version%>\n"+
							" * @internal	@installset base\n"+
							" * @internal	@overwrite false\n"+
							" */\n",
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
					src: ['install/assets/chunks/*.tpl']
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: [
					'src/jade/**/*.jade',
					'src/jade/**/*.tpl',
				],
				tasks: ["jade","copy:tpl","usebanner","notify:done"]
			},
			js: {
				files: [
					'src/js/**/*.js'
				],
				tasks: ['notify:watch', 'requirejs', 'uglify:main',"jade","copy:tpl","usebanner",'notify:done']
			},
			css: {
				files: [
					'src/less/**/*.{css,less}',
				],
				tasks: ['notify:watch', 'less', 'autoprefixer',"jade","copy:tpl","usebanner",'notify:done']//
			},
			images: {
				files: [
					'src/images/*.{png,jpg,gif,svg}',
					'src/images/css/*.{png,jpg,gif,svg}'
				],
				tasks: ['notify:watch', 'newer:imagemin', 'less', 'autoprefixer', 'notify:done']//
			}
		},
		notify: {
			watch: {
				options: {
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: 'Запуск',
					image: '<%= globalConfig.imageNotyfy %>'
				}
			},
			done: {
				options: { 
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: "Успешно Завершено",
					image: '<%= globalConfig.imageNotyfy %>'
				}
			}
		}
	});
	grunt.registerTask('default', 	['notify:watch', 'imagemin', 'less', 'autoprefixer', 'requirejs', 'uglify', 'jade', 'copy', 'usebanner', 'notify:done']);
	grunt.registerTask('dev', 		['watch']);
}