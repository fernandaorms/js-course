# Prototypes

- JavaScript is based in on prototypes to pass properties and methods
from one object to another.

- Prototype: first creation; model or template for future productions.

- All objects have an internal reference to Prototype (__proto__).

- When we try to access a member of an object, first the JS engine will try to find this member in the object itself and then the chain of prototypes is used until the top (null) finds (or does not) such a member.