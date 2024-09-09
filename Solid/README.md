# ✨ SOLID design principles ✨

This repository contains Coding Exercise that violate the SOLID principles:

1. Single Responsibility Principle: Every class should have a single responsibility. A class should have one, and only one, reason to change.

2. Open/Closed Principle: You should be able to extend a classes behavior, without modifying it. Software entities should be open for extension, but closed for modification.

3. Liskov Substitution Principle: Derived classes must be substitutable for their base classes. Functions that use references to base classes must be able to use objects of derived classes without knowing it.

4. Interface Segregation Principle: Make fine grained interfaces that are client specific. Clients should not be forced to depend on interfaces they do not use.

5. Dependency Inversion Principle: Depend on abstractions, not on concretions. High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

---
# ✨ GOAL ✨

The goal is to modify each example so that it does not violate the corresponding SOLID principle.

You can apply the solution to each problem in a separate branch.

## How to make a solution

### Install Node.js and TypeScript

If you haven't already, install Node.js and TypeScript.

Install Node.js: Download and install the Node.js runtime from Node.js official website. This will also install the Node Package Manager (npm), which is used to install TypeScript.

Install TypeScript: Open a terminal or command prompt and run the following command to install TypeScript globally:

```bash
npm install -g typescript
```
Install and use ts-node for **Run TypeScript Directly**. Install ts-node by running:

```bash
npm install -g ts-node
```
Write solution in folder_name_exercise/main.ts

Then run your TypeScript file directly:

```bash
ts-node folder_name_exercise/main.ts
```
Examples:

```bash
ts-node 1.Srp/main.ts
```