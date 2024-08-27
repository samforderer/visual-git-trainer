class Repository {
    constructor() {
        this.branches = {};
        this.currentBranch = null;
        this.initializeRepository();
    }

    initializeRepository() {
        const mainBranch = new Branch('main');
        this.branches['main'] = mainBranch;
        this.currentBranch = mainBranch;
        this.currentBranch.isActive = true;
    }

    createBranch(branchName) {
        if (this.branches[branchName]) {
            throw new Error(`Branch ${branchName} already exists.`);
        }
        const newBranch = new Branch(branchName, this.currentBranch);
        this.branches[branchName] = newBranch;
    }

    checkoutBranch(branchName) {
        if (!this.branches[branchName]) {
            throw new Error(`Branch ${branchName} does not exist.`);
        }
        this.currentBranch.isActive = false;
        this.currentBranch = this.branches[branchName];
        this.currentBranch.isActive = true;
    }

    commit(message) {
        if (!this.currentBranch) {
            throw new Error(`No branch is currently checked out.`);
        }
        this.currentBranch.addCommit(message);
    }

    merge(branchName) {
        const targetBranch = this.branches[branchName];
        if (!targetBranch) {
            throw new Error(`Branch ${branchName} does not exist.`);
        }
        if (this.currentBranch === targetBranch) {
            throw new Error(`Cannot merge a branch into itself.`);
        }
        // Simplified merge: add all commits from the target branch to the current branch
        this.currentBranch.commits = [...this.currentBranch.commits, ...targetBranch.commits];
    }

    getBranch(branchName) {
        return this.branches[branchName];
    }

    listBranches() {
        return Object.keys(this.branches);
    }

    getCurrentBranch() {
        return this.currentBranch;
    }
}