class Branch
{
    constructor(name, parentBranch = null)
    {
        this.name = name;
        this.commits = [];
        this.parentBranch = parentBranch
        this.isActive = false;
    }

    addCommit(message)
    {
        const commit = new Commit(message);
        this.commits.push(commit);
    }

    getLatestCommit()
    {
        return this.commits[this.commits.length - 1];
    }
}
