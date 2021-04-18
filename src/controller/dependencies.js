class ProjectDependency {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }
}

const inspectProjectDependencies = (dependencies) => {
    const keys = Object.keys(dependencies);

    return keys.map(key => {
        const version = dependencies[key]['version'] || '';
        return new ProjectDependency(key, version);
    })
}

exports.inspectProjectDependencies = inspectProjectDependencies;