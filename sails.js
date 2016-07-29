1：约定优于配置（convention over configuration）[1]，也称作按约定编程[2]，是一种软件设计范式，旨在减少软件开发人员需做决定的数量，
获得简单的好处，而又不失灵活性。本质是说，开发人员仅需规定应用中不符约定的部分。
例如，如果模型中有个名为Sale的类，那么数据库中对应的表就会默认命名为sales。
只有在偏离这一约定时，例如将该表命名为"products_sold"，才需写有关这个名字的配置。
如果您所用工具的约定与你的期待相符，便可省去配置；反之，你可以配置来达到你所期待的方式。

这段有待好好翻译一下
Loose Coupling
#
The days of forcing a one-size-fits-all approach to development are over. 
We need tools that allow us to pick and choose the components that fit our requirements.
In fact, it’s just plain lazy to create things any other way. 
Sails’s approach is to loosely couple components so that they can be added or subtracted from your app at will.
Node at its core has created a “can do” culture eager to experiment and make things work. 
Sails embraces this attitude and strives to deliver tools that work around you. 
The level of automation or magic you want in Sails is directly tied to the time you have for a project and your experience working with Node. 
Sails is flexible enough to allow you to explore and create when you have the time but also provides automation when you don’t.
Sails accomplishes this loose coupling using plain-old require.
No magic, other than the time to craft components that can be part of the whole but don’t need to be present in order for the whole to work. 
For example, controllers, models, and configuration files are just Node modules. 
Sails uses some convention to help. 
Sails picks up on the name UserController.js in the Controllers folder to deduce that this is indeed a user controller. 
Another example involves policies. 
So policies allow you to have a bit of code that executes on controller or specific controller action. 
The cool part is that the configuration file that connects the policy with the controller/action are separate. 
That means you can write a bunch of different policies and they are completely portable between Sails apps.
You can decide later which controller/actions you want to apply them to.
Sails core consists of twenty different hooks: 
modules that modify the server runtime, adding middleware, binding route listeners, or otherwise attaching additional capabilities to the framework. 
This gives you access to override or disable every component and configuration parameter in Sails.
These hooks are loaded at run-time when Sails starts. 
You even have the ability to have one-time configuration for your hook itself. 
This is actually one of the key differentiators between hooks and services.
Another example of loose coupling is configuration files. 
Need some configuration to be available for your project? No problem. 
Create a file in the config folder that uses the common module.exports pattern and everything in that module is available for you from the sails global object.
Almost every component of Sails can either be omitted, overwritten, or extended. For example, 
Sails has a group of tools called blueprints. 
These blueprints make it really easy to get a project up and running with regard to routes and CRUD operations. 
But suppose you want to use the read, update, and delete operations but the create action needs some tender loving care.
No problem, just build a create action and the other CRUD operations keep working. 
Your custom action subs in for the blueprint action. It’s just that simple.
Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Status Help
