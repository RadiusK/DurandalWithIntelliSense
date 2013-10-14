DurandalWithIntelliSense
========================

Adaptation of the Durandal SPA Template with improved IntelliSense behaviour.

In order to get IntelliSense to work (for the most part) with the Durandal SPA Template, 
which by default does not provide IntelliSense for the AMD-modules that depend on Require.js, 
I made an adaptation of the template based on the changes that Joseph (LandOfJoe.com) described 
for the HotTowel Template based on an older version of Durandal. Most of the credits go therefore 
to him and his research, though I found some changes be be less applicable on the Durandal Template 
in combination with Durandal 2.0, which uses a renewed architecture.

Changes overview:
- Add require.intellisense.js file. (Based on open source project: https://github.com/jrburke/requirejs-intellisense )
- Explicitly name all modules, including Durandal's standard modules.
- Add _references.js file, and direct it to the correct modules.
- Update the requirejs.config statement in main.js to use '/' as root instead of '/App/'. 
  This removes the relative paths on which the intellisense script breaks.

For a more extensive description of the changes, see 'Durandal IntelliSense Adaptation Guide.rtf'.

Notes:
- main.js and _references.js include an identical requirejs.config statement. This could be moved to a single file, 
referenced by both (as demonstrated in Joseph's version). However I could not get this to work (yet) with the Durandal 2.0 architecture.
- IntelliSense for third party libraries that do not depend on RequireJS module handling does not work. Knockout IntelliSense works in main.js,
but no inside of modules. In Joseph's HotTowel version this does work, however this may be due to Knockout (and JQuery) being rooted differently
within the Durandal architecture, which differences between the two templates.
- Sometimes one needs to 'trigger' the modules to be loaded into IntelliSense by reopening files or retyping the statement that requests auto-completion.
 Set output to JavaScript Language Service in order to observe IntelliSense module loading and possible errors.
- Modules that use relatative require statements may still cause incorrect IntelliSense behaviour (as described by Joseph also), this could be 
avoided by using the introduced explicit names instead.

Links: 
Durandal SPA Template: http://www.asp.net/single-page-application/overview/templates/durandaljs-template

IntelliSense Adaptation of HotTowel Template by Joseph (LandOfJoe.com):
- Blog article: http://landofjoe.com/blog/ill-take-my-durandal-with-intellisense-please
- Related Google Group Discussion: https://groups.google.com/forum/?fromgroups=#!searchin/durandaljs/intellisense/durandaljs/JyA9UT5Xx2U/CH-63ta_VigJ


