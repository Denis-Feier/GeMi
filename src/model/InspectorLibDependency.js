class InspectorLibDependency {

    constructor(name, version, provider = "Gemfile") {
        this.name = name;
        this.version = version;
        this.provider = provider;
    }

}

exports.default = InspectorLibDependency;