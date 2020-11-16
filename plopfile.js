module.exports = (plop) => {
    plop.setGenerator('component', {
      description: 'React Function Component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name?',
        },
        {
          type: 'confirm',
          name: 'withCSS',
          message: 'Styled Component?',
          default: false,
        },
        {
          type: 'confirm',
          name: 'withState',
          message: 'Add useState?',
          default: false,
        },
        {
          type: 'confirm',
          name: 'withUseEffect',
          message: 'Add useEffect?',
          default: false,
        },
        {
          type: 'confirm',
          name: 'withStory',
          message: 'Add Storybook stories?',
          default: false,
        },
      ],
      actions: (data) => {
        const actions = [
          {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/index.tsx',
            templateFile: 'plop-templates/component-index.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'plop-templates/component.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
            templateFile: 'plop-templates/component-test.hbs',
          },
        ];
  
        if (data.withCSS) {
          actions.push({
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}Styles.ts',
            templateFile: 'plop-templates/component-css.hbs',
          });
        }
  
        if (data.withStory) {
          actions.push({
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: 'plop-templates/component-stories.hbs',
          });
        }
        return actions;
      },
    });
  };
  