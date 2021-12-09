---
title: Create your own auto-completion for JSON and YAML files on VSCode with JSON Schema
slug: how-to-create-your-own-auto-completion-for-json-and-yaml-files-on-vs-code-with-the-help-of-json-schema
date: 2020-04-27
summary: In this article, I demonstrate how to create a JSON Schema, to provide auto-completion to Hadolint configuration files on VS Code editor.
tags: vscode,json-schema,productivity
published: true
devto_url: https://dev.to/brpaz/how-to-create-your-own-auto-completion-for-json-and-yaml-files-on-vs-code-with-the-help-of-json-schema-k1i
layout: ../../layouts/Post.astro
---

[Visual Studio Code](https://code.visualstudio.com/) has the ability to display autocomplete suggestions for popular configuration files in JSON and YAML format out of the box.

For example, If you have a `package.json` file opened in VS Code, you can tap `CTRL + Space` and a pop-up will appear, displaying suggestions for all the available fields for that file type.

![VS Code autocomplete example](https://dev-to-uploads.s3.amazonaws.com/i/8f9dityz4vsc2uf9hesi.gif)

This is very practical and provides a quick way of knowing all the available options without having to look at Documentation.

To be able to do this, VS Code uses [JSON Schema](https://json-schema.org/) under the hood.

**Note:** other editors like the ones from the Jetbrains family, also use the same strategy to provide the same functionality, so, while in this article VS Code is used as an example, the concepts should be applicable to any of these IDEs. Be sure to check their respective documentation.

## What is JSON Schema?

JSON Schema is a specification that allows you to describe the structure of a JSON document and validate documents against that schema.

For example, the following schema could be used to describe a "Person" entity:

```json
{
  "$id": "https://example.com/person.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Person",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "The person's first name."
    },
    "lastName": {
      "type": "string",
      "description": "The person's last name."
    },
    "age": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "integer",
      "minimum": 0
    }
  }
}
```

As you can see, a JSON Schema is simply a JSON document with a specific set of tags that are used to describe the document structure.

This is a very basic example. You can check the [JSON Schema](https://json-schema.org/specification.html) website for a complete view of the specification.

While JSON Schema is designed to work with JSON files, it can be used to with any other file that can be converted to JSON, like YAML.

VS Code uses the JSON Schema, to infer the document structure of a particular file type and to display the appropriate suggestions as well as validations.

To provide the autocomplete capability to a big range of popular file types, VS Code leverages the [JSON Schema Store](http://schemastore.org/json/) project, which hosts JSON Schema specifications for more than 200 file types.

The JSON Schema Store provides a very good set of schemas. Still, with so many different file types, of course, it can´t have schemas for everything.

The good news is that you can easily create your own and make it available for your editor to use.

And while you are at it, JSON Schema Store is [Open source](https://github.com/schemastore/schemastore/), so why not contribute to their repository, so that everyone can benefit from it?

To demonstrate this, we will create a schema for [Hadolint](https://github.com/hadolint/hadolint), a popular Dockerfile linter.

Hadolint supports configuration with a `.hadolint.yaml` file.

It only allows two configurations to be defined:

* ignored - which defines a list of lint rules to ignore
* trustedRegistries - which as the name indicates, it´s a list of valid Docker Registries to allow.

Example file:

```yaml
ignored:
  - DL3008

trustedRegistries:
  - docker.io
```

It´s a really simple structure, so a good example to start.

## Creating our schema

So we need to create the JSON Schema specification for this file type.

First, we need to understand the structure, and to find out all the possible options for that particular file type. This task can be easier or not, depending on the available documentation.

Probably the best way to start is to look at the project documentation or for example files. Some projects provide example files with all the possible values and you can infer the schema from there.

In the case of Hadolint we can get everything needed from the [project Readme](https://github.com/hadolint/hadolint#configure).

Next, we will create an `hadolint.json` file with the schema specification.

The shcema will be very similar to this:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "JSON Schema for Hadolint, a Dockerfile linter tool",
  "description": "Dockerfile linter, validate inline bash, written in Haskell",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "ignored": {
      "type": "array",
      "description": "A list of rules to be ignored",
      "items": {
        "type": "string",
        "oneOf": [
          {
            "const": "DL3000",
            "description": "Use absolute WORKDIR.",
          },
          {
            "const": "DL3001",
            "description": "For some bash commands it makes no sense running them in a Docker container like ssh, vim, shutdown, service, ps, free, top, kill, mount, ifconfig.",
          },
          {
            "const": "DL3002",
            "description": "Last user should not be root."
          },
          {
            "const": "DL3003",
            "description": "Use WORKDIR to switch to a directory.",
          },
          {
            "const": "DL3004",
            "description": "Do not use sudo as it leads to unpredictable behavior. Use a tool like gosu to enforce root.",
          },
          {
            "const": "DL3005",
            "description": "Do not use apt-get upgrade or dist-upgrade.",
          }
        ],
        "title": "Rule",
      }
    },
    "trustedRegistries": {
      "type": "array",
      "description": "A list of trusted registries. Ex: docker.io",
      "items": {
        "type": "string"
      }
    }
  }
}
```

Note that I have omitted some options on the "ignored" field for readability.

Let´s break down our schema:

```json
 "$schema": "http://json-schema.org/draft-07/schema#"
```

This first line describes which version of the schema we are using. We use the "Draft-07", which is the latest version at the time of this article.

We then define a "title" and a "description" for the schema.

```json
 "title": "JSON Schema for Hadolint, a Dockerfile linter tool",
 "description": "Dockerfile linter, validate inline bash, written in Haskell",
```

The root "type" property will have the value "object" most of the time, and we also define "additionalProperties" property with value "false", to indicate that the file can´t have extra properties that are not listed in the schema.

The "properties" field is where we start defining all the properties of our object.

As we saw, `hadolint.yaml` has two properties: "ignored" and "trustedRegistries" which are both a list of strings.

For the "trustedRegistries" it´s an open list, while for the "ignored" each option must be one of the rules available in Hadolint.

"trustedRegistries", can be defined as this:

```json
"trustedRegistries": {
   "type": "array",
   "description": "A list of trusted registries. Ex: docker.io",
   "items": {
      "type": "string"
   }
}
```

We define the "type" as an "array" whose items are of type "string".

For the "ignored" property, it´s similar but has a fixed list of options.

It could be defined as this:

```json
"ignored": {
   "type": "array",
   "description": "A list of rules to be ignored",
   "items": {
      "type": "string",
      "oneOf": [
          {
            "const": "DL3000",
            "description": "Use absolute WORKDIR.",
          },
          {
            "const": "DL3001",
            "description": "For some bash commands it makes no sense running them in a Docker container like ssh, vim, shutdown, service, ps, free, top, kill, mount, ifconfig.",
          }]
     }
}
```

JSON Schema also has "enum" type. We could have used it instead of type "string" together with "oneOf" field, but as we want to add a description to each value, Enum type doesn't support that.

With this, we have the basic structure of our schema ready.

This example just shows the surface of what you can do with JSON Schema. You can see more complex schemas in Schema Store. for example [gitlab-ci](http://json.schemastore.org/gitlab-ci).

Depending on the complexity of the file whose schema you are creating, it can be a little boring to specify every available option, but if you work with that file a lot, It can save you valuable time in the future.

Now that we have created the schema, let´s see how we can make it available on VS Code.

## Enabling the Schema on VS Code

Since the new schema is not in the Schema Store, you must register it on VS Code. This can be done on the VS Code Settings page.

As we are creating a Schema for a YAML file, make sure you have the [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) Extension installed before continuing.

Then, go to File -> Preferences -> Settings (or use the Command Pallete) to open the settings page and search for `yaml`.

Open the settings for the YAML extension and search for "Yaml: Schemas" and click "Edit in settings.json".

![VS Code settings](https://dev-to-uploads.s3.amazonaws.com/i/cjyo0kkogh1dnf8s3y1y.png)

The "settings.json" file will open. you need to search again for the "yaml.schemas" object. If it doesn´t exist yet, you will have to create it.

This property represents a key-value, where the key is the absolute path to the schema file on our system and the value is a glob expression that specifies the files that the schema will be applied. In my case it looks like this:

```json
"yaml.schemas": {
  "/home/bruno/Code/Personal/other/schemastore/src/schemas/json/hadolint.json": ".hadolint.yaml",
},
```

Save the file and reload VS Code to finish the process.

If everything worked as expected, when we create a new `.hadolint.yaml` file and press `CTRL + Space`, VS Code should then display the suggestions based on the schema we created for this file type.

![Hadolint Autocomplete](https://dev-to-uploads.s3.amazonaws.com/i/jqgnscgmhbf6go2r7r5x.gif)

Note that, it could take some seconds for VS Code to index the schema in the first time.

And that´s it. We have just built an autocomplete feature for `hadolint.yaml` files.

## Conclusion

JSON Schema provides a simple way to implement auto-completion for JSON and YAML files and is supported out of the box, by many popular editors like Visual Studio, Visual Studio Code, and the Jetbrains family IDEs.

JSON Schema Store hosts schemas for many popular file formats, but you can also create your own as demonstrated in this article.

It´s a matter of creating a schema describing your file following the JSON schema specification, and import it in your editor.

The process of creating a schema for a complex file can be a little painful and boring but in the end, I think the gains in productivity if you work a lot with that file type can pay off.

I will finish the Hadolint schema and do a PR for the Schema Store, I hope this week.

Thanks for reading and if you have any questions, feel free to use the Comment Section.

Also, if you like my content, you can [Buy me a coffee](https://www.buymeacoffee.com/Z1Bu6asGV) ;)
