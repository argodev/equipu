'use strict';

angular.module('equipuApp')
  .controller('ResourcesCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.data = [];

    $scope.data.push(
      {
        'id': '1234',
        'name': 'Lesson 01 (0101)',
        'fileName': 'TTLP-0101.pdf',
        'entryType': 'file',
        'mimeType': '',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This is the teacher plan for Theme 1 - God\'s Word: The Bible - Lesson 1. This lesson plan covers all four levels of the program.',
        'downloads': '13304',
        'fileSize': '121.8kB',
        'dateAdded': '09-06-2006',
        'tags': ['Lesson Plans', 'Theme 01']
      },
      {
        'id': '1235',
        'name': 'Lesson 01 (0801)',
        'fileName': 'TTLP-0801.pdf',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This is the teacher plan for Theme 8 - Jesus Christ - Lesson 1. This lesson plan covers all four levels of the program. LAST REVISION UPLOADED BY JOY (26 September 2007)',
        'downloads': '6796',
        'fileSize': '123kB',
        'dateAdded': '09-11-2006',
        'tags': ['Lesson Plans', 'Theme 08']
      },
      {
        'id': '1236',
        'name': 'Theme 1: God\'s Word-The Bible Hymns PowerPoint Show',
        'fileName': '01_GodsWordTheBible_Hymns_ppt2003.pps',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'Songs included in this PowerPoint Show include: HolyBible, Book Divine; Thy Word Is Like a Garden, Lord',
        'downloads': '1,765',
        'fileSize': '939kB',
        'dateAdded': '03-03-2010',
        'tags': ['powerpoint', 'music']
      },
      {
        'id': '1237',
        'name': 'Theme 12: God\'s Plan for the Future Hymn PowerPoint Show',
        'fileName': '12_GodsPlan_Hymns_ppt2003.pps',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'Songs included in this PowerPoint Show include: Jesus Shall Reign; Immanuel\'s Land',
        'downloads': '656',
        'fileSize': '948kB',
        'dateAdded': '03-03-2010',
        'tags': ['powerpoint', 'music']
      },
      {
        'id': '1238',
        'name': 'Detailed Attendance and Award Record Sheet - Generic by Theme',
        'fileName': 'Detailed Attendance and Record-TC-no names.pdf',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This Attendance and Award Record Sheet allows one to record detailed records on each Q&A for each child for two doctrinal themes. The worker should add the theme name and dates in each column. Mark each Q&A recited by circling or \'x\' out the number. We recommend that you date when each memory component is recited.',
        'downloads': '563',
        'fileSize': '44.3kB',
        'dateAdded': '10-03-2012',
        'tags': ['discoverers', 'level 1', 'record', 'communication', 'defenders', 'developers', 'level 4', 'level 3', 'awards', 'detectives', 'records', 'Progress Chart']
      },
      {
        'id': '1239',
        'name': 'Discoverers Book A Individual Progress Chart',
        'fileName': 'Discoverers Book A.pdf',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This is a comprehensive chart to mark the progress for each individual part of Book A for individual use. ',
        'downloads': '1,308',
        'fileSize': '104.3kB',
        'dateAdded': '09-02-2008',
        'tags': ['discoverers', 'level 1', 'record', 'records', 'Progress Chart']
      },
      {
        'id': '1240',
        'name': 'Theme12-Discoverers Craft Display Sheets - NKJV',
        'fileName': 'Theme12-CraftPage-NKJV.zip',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This downloads as a zip file containing 10 Discoverer Craft pages (one for each Discoverers Teacher TruthTime Lesson Plan) for Theme 12. NKJV Version uploaded by Marrena 10-17-14 ',
        'downloads': '35',
        'fileSize': '1MB',
        'dateAdded': '10-17-2014',
        'tags': ['coloring sheets', 'discoverers', 'level 1', 'theme 12', 'nkjv', 'crafts']
      },
      {
        'id': '1241',
        'name': 'Theme11-Discoverers Craft Display Sheets - ESV',
        'fileName': 'Theme11-CraftPage-ESV.zip',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This downloads as a zip file containing 10 Discoverer Craft pages (one for each Discoverers Teacher TruthTime Lesson Plan) for Theme 11. ESV Version uploaded by Marrena 10-17-14 ',
        'downloads': '38',
        'fileSize': '1.2MB',
        'dateAdded': '10-17-2014',
        'tags': ['coloring sheets', 'discoverers', 'level 1', 'theme 11', 'esv', 'crafts']
      },
      {
        'id': '1242',
        'name': 'Session 1: Philosophy',
        'fileName': 'K4TClubsTraining_01.wmv',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'Bob Roberts discusses the general philosophy of the Kids 4 Truth Clubs - the \'why we do what we do\' of the program.',
        'downloads': '1,655',
        'fileSize': '59.9Mb',
        'dateAdded': '09-09-2006',
        'tags': ['training']
      },
      {
        'id': '1243',
        'name': 'Session 5: Promoting Your Club',
        'fileName': 'K4TClubsTraining_05.wmv',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'Marrena Ralph introduces the various tools and materials currently provided to assist you in promoting your club.',
        'downloads': '946',
        'fileSize': '39.3 Mb',
        'dateAdded': '09-09-2006',
        'tags': ['training']
      },
      {
        'id': '1244',
        'name': 'Director\'s StartUp Manual: Focused Group Study',
        'fileName': '2011-DirectorsStartUpManual-FocusedGroup.pdf',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This is our new Director\'s StartUp Manual - Focused Group Study. Use this manual if you want to keep all your children learning on the exact same Questions/Answer (unit).  Those using this method will cover either 1 or 2 units per week. Revised: 6-2011 by Marrena new file: 1-26-15 Marrena IMPORTANT NOTE: We are currently editing this manual to reflect the 2014 curriculum changes for level 1 Discoverers. This level is now set up the same as levels 2-4. Please contact our office via email, phone, or chat if you have questions.',
        'downloads': '4,580',
        'fileSize': '1.2MB',
        'dateAdded': '07-07-2008',
        'tags': ['StartUp', 'organization', 'training', 'manuals', 'pace', 'group']
      },
      {
        'id': '1245',
        'name': 'Director\'s StartUp Manual: Traditional Club - Individual Study',
        'fileName': '2011-DirectorsStartUpManual.pdf',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This is our new Director\'s StartUp Manual for a Traditional Club/Individual Study. This manual walks you through setting up a club that allows children to work on their own pace through the TruthBooks. Revised: 6-2011 by Marrena new file: 1-26-15 Marrena IMPORTANT NOTE: We are currently editing this manual to reflect the 2014 curriculum changes for level 1 Discoverers. This level is now set up the same as levels 2-4. Please contact our office via email, phone, or chat if you have questions.',
        'downloads': '3,655',
        'fileSize': '583.8kB',
        'dateAdded': '01-04-2008',
        'tags': ['StartUp', 'organization', 'training', 'manuals', 'individual', 'pace']
      },
      {
        'id': '1246',
        'name': 'Curriculum Explanation Flyer - Level 1',
        'fileName': '2014-CurriculumExplanation-Level1-Discoverers-form.pdf',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This flyer is a one-page explanation of the Level 2 books and awards.  This is good to use to instruct both workers and parents about the Kids 4 Truth Curriculum.  It is recommended that you print copies and send home with the children at the beginning of the curriculum year. New file uploaded 8/13/14 - this file is now editable. Use your own content or for those who want optional award scenarios or ideas on wording for how awards are earned, check out our new Awards Scenario Document (http://equipu.kids4truth.com/files/folders/generaldocuments/entry98.aspx).  This zip file includes both a text file and a table file.  The table file will allow you to copy/paste into the Award Record sheet.  To use this file: Highlight the text you would like to use. Right click and choose copy. Go to the Curriculum Explanation Sheet. Highlight the text you want to replace. Right click and choose paste. Note: this form replaces the Curriculum Explanation Pages for Discoverers TruthBooks A, B, and C. This is for the 2014 curriculum books. 8-13-14 by Marrena ',
        'downloads': '122',
        'fileSize': '1.1MB',
        'dateAdded': '08-13-2014',
        'tags': ['information', 'training', 'discoverers', 'level 1']
      },
      {
        'id': '1247',
        'name': 'Curriculum Explanation Flyer - Level 4',
        'fileName': 'CurriculumExplanation-4-form.pdf',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This flyer is a one-page explanation of the Level 4 books and awards.  This is good to use to instruct both workers and parents about the Kids 4 Truth Curriculum.  It is recommended that you print copies and send home with the children at the beginning of the curriculum year. New file uploaded July 09 - this file is now editable. Use your own content or for those who want optional award scenarios or ideas on wording for how awards are earned, check out our new Awards Scenario Document (http://equipu.kids4truth.com/files/folders/generaldocuments/entry98.aspx).  This zip file includes both a text file and a table file.  The table file will allow you to copy/paste into the Award Record sheet.  To use this file: Highlight the text you would like to use. Right click and choose copy. Go to the Curriculum Explanation Sheet. Highlight the text you want to replace. Right click and choose paste. ',
        'downloads': '1,443',
        'fileSize': '3.9MB',
        'dateAdded': '12-01-2006',
        'tags': ['information', 'defenders', 'start up', 'training', 'tutorial', 'level 4']
      },
      {
        'id': '1248',
        'name': 'Discoverers A Communication Card',
        'fileName': '1Aweekly.pdf',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'This card helps with communication between the Kids 4 Truth Worker and Parent.  It tells what the child studied this week at Kids 4 Truth and at home.  It allows the parent to inform the worker when the child is ready to recite. Note: this card also shows award patches earned and can be used as an award coupon card between the worker and the person ironing on awards during the night before sending it home with the parent.',
        'downloads': '1,794',
        'fileSize': '239.8kB',
        'dateAdded': '10-02-2006',
        'tags': ['schedule', 'discoverers', 'cards', 'level 1', 'awards', 'communication']
      },
      {
        'id': '1249',
        'name': 'Template: Year End Awards Certificate',
        'fileName': 'YearEndCertificatesNameForm.pdf',
        'type': 'download',
        'path': 'http://equipu.kids4truth.com/files/folders/theme01/entry1.aspx',
        'description': 'Use this pdf form template to type in the names of your children directly onto the year end certificates that you can purchase on the online store at: http://kids4truth.com/Store/Award-Certificates-Pack-of-10-P416.aspx. Be sure to set your printer margin settings at none, print a sample on a blank sheet of plain paper, and hold up to actual certificate to ensure everything lines up properly. If it doesn\'t align, adjust your printer margin settings as needed. ',
        'downloads': '159',
        'fileSize': '348.2kB',
        'dateAdded': '05-15-2014',
        'tags': ['challenge', 'awards', 'normal scenario', 'certificates', 'bronze', 'year-end awards', 'diamond', 'silver']
      },
      {
        'id': '1250',
        'name': 'KidsTruth Philosophy',
        'fileName': '',
        'type': 'link',
        'path': 'https://vimeo.com/70735721',
        'description': 'The following video is a quick introduction to the philosophy of both the Kids 4 Truth clubs and ministry in general.',
        'downloads': '12',
        'fileSize': '0',
        'dateAdded': '01-01-2014',
        'tags': ['philosophy', 'training']
      }
    );

    $scope.facets = [];
    $scope.facets.push(
      { 'id': 1, 'title': 'Lesson Plans', 'results': 132},
      { 'id': 2, 'title': 'Organization', 'results': 35},
      { 'id': 3, 'title': 'Music', 'results': 12},
      { 'id': 4, 'title': 'Training', 'results': 27},
      { 'id': 5, 'title': 'Discoverers (Level 1)', 'results': 70},
      { 'id': 6, 'title': 'Developers (Level 2)', 'results': 56},
      { 'id': 7, 'title': 'Detectives (Level 3)', 'results': 29},
      { 'id': 8, 'title': 'Defenders (Level 4)', 'results': 32},
      { 'id': 9, 'title': 'Theme 1', 'results': 5},
      { 'id': 10, 'title': 'Theme 2', 'results': 7},
      { 'id': 11, 'title': 'Theme 3', 'results': 8},
      { 'id': 12, 'title': 'Theme 4', 'results': 6},
      { 'id': 13, 'title': 'Theme 5', 'results': 10},
      { 'id': 14, 'title': 'Theme 6', 'results': 13},
      { 'id': 15, 'title': 'Theme 7', 'results': 12},
      { 'id': 16, 'title': 'Theme 8', 'results': 8},
      { 'id': 17, 'title': 'Theme 9', 'results': 9},
      { 'id': 18, 'title': 'Theme 10', 'results': 11},
      { 'id': 19, 'title': 'Theme 11', 'results': 15},
      { 'id': 20, 'title': 'Theme 12', 'results': 7}
    );

    $scope.toggleActive = function(facet){
      facet.isActive = !facet.isActive;
    }

  });
