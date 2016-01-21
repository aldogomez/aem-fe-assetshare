var gulp            = require( 'gulp' );
var assemble        = require( 'assemble' );
var extname         = require( 'gulp-extname' );
var gulpAssemble    = require( 'gulp-assemble' );

function assemblePrototype() {

    console.log('assemblePrototypeTask');

    assemble.option('layout', 'base');
    assemble.partials(['components/**/*.hbs']);
    assemble.layouts('prototype/src/layouts/*.hbs');
    assemble.data(['prototype/src/hbs/pages/data/*.json', 'prototype/src/hbs/docs/data/*.json']);
    //assemble.helpers('prototype/src/helpers/*.js');


    assemble.pages(['prototype/src/hbs/**/*.hbs']);
    //assemble.pages(['prototype/src/pages/']);

    // console.log(assemble.views.pages);

    var pagesHtmlDist = 'prototype/dist/pages/';
    var docsHtmlDist = 'prototype/dist/docs/';
    var templateCollection = assemble.views.pages;

    assemble.helper('listTemplates', function(templateType, templateLayout, context) {
        var resultList = '';

        // console.log('templateType', templateType);
        // console.log('templateLayout', templateLayout);

        for(var prop in templateCollection){
            if (templateCollection[prop].data.pagetype === templateType && templateCollection[prop].data.layout === templateLayout) {

                var template = templateCollection[prop].data,
                    templateLink,
                    templateBase;

                if (templateLayout === 'doc') {
                    templateBase = docsHtmlDist;
                } else {
                    templateBase = pagesHtmlDist;
                }

                templateLink = prop + '.html';
                // templateLink = templateBase + prop + '.html';

                resultList+= '<tr>';
                resultList+= '<td class="item-title"><h5><a href ="' + templateLink + '">' + template.pagetitle + '</a></h5></td>';
                resultList+= '<td class="small">' + prop + '.html</td>';
                resultList+= '<td>';
                if (template.pagedescription !== undefined){
                    resultList+= template.pagedescription;
                }
                resultList+= '</td>';
                resultList+= '<td>';
                if (template.jiralink !== undefined){
                    resultList+= 'JIRA ticket: <a href="https://herodigital.atlassian.net/browse/' + template.jiralink + '" target="_blank">' + template.jiralink + '</a>';
                }
                resultList+= '</td>';
                resultList+= '</tr>';
            };  
        }
        // console.log(resultList);
        return resultList;
    });

    return assemble.src(['prototype/src/hbs/**/*.hbs'])
        .pipe(gulpAssemble(assemble, {
            options: {
                //layoutdir: 'prototype/src/layouts',
                // layouts: 'prototype/src/layouts/*.hbs',
                //partials: ['components/**/*.hbs', 'prototype/src/partials/*.hbs'],
                // assets: 'public',
                // public_assets: '../..',
                //public_assets: 'http://52.8.16.106/pure',
                //flatten: true,
                //helpers: 'prototype/src/helpers/*.js',
                collections: [{
                        name: 'pages',
                        sortby: 'order',
                        sortorder: 'asc'
                    },
                    {
                        name: 'docs',
                        sortby: 'order',
                        sortorder: 'asc'
                    }
                ]
            },
            pages: {
                files: 'prototype/src/hbs/pages/*.hbs',
                options: {
                    data: ['prototype/src/data/*.json'],
                    layout: 'prototype/src/layouts/page.hbs',
                },
                src: 'prototype/src/hbs/pages/*.hbs',
                dest: 'prototype/dist/pages/',
                list: 'prototype/dist/pages/*.html'
            },
            docs: {
                files: 'prototype/src/hbs/docs/*.hbs',
                options: {
                    data: ['prototype/src/data/*.json'],
                    layout: 'prototype/src/layouts/doc.hbs'
                },
                src: 'prototype/src/hbs/docs/*.hbs',
                dest: 'prototype/dist/docs/',
                list: 'prototype/dist/docs/*.html'
            }
        }))
        .pipe(extname())
        .pipe(assemble.dest('prototype/dist/'));
}

module.exports = assemblePrototype;
