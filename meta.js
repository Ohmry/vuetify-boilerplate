module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project Name',
      default: 'vuetify-boilerplate-project'
    },
    appVer: {
      type: 'string',
      required: true,
      message: 'Application Version',
      default: '0.0.1'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project Description',
      default: 'Vuetify Boilerplate'
    }
  }
}