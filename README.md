Fork of [Prism](http://github.com/LeaVerou/prism) that has a *master* branch
and can be used with [rails-assets](http://www.rails-assets.org)

## Summary of Original Project Readme

You can learn more on [Prism](http://prismjs.com/).

Why another syntax highlighter?:
http://lea.verou.me/2012/07/introducing-prism-an-awesome-new-syntax-highlighter/#more-1841

## Reason for the Fork

The service [rails-assets](http://www.rails-assets.org) looks for a master
branch to create the wrapping gem of a bower package.  The [original
repo](http://github.com/LeaVerou/prism) has only one branch available
**gh-pages**, therefore it is not possible to use
[rails-assets](http://www.rails-assets.org) to generate a gem from the bower
package defined in the project.

Since there were several issues open with no further action in the direction
of providing a **master** branch:

LeaVerou/prism/#342
LeaVerou/prism/#276
LeaVerou/prism/#180

This fork provides a master branch and bower with css for plugins.

## Locate at rails-assets

In rails-assets the component name is **asquera--prism**.

## Changes

1. Created a **master** branch
2. Added plugins' css files (not included in the original bower package
   definition)
2. Removed unused themes css, using the default.
