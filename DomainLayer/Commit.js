class Commit 
{
    constructor(message)
    {
        this.message = message;
        this.id = this.generateNumbersAndLettersRandomCommitId();
    }

    /**
     * @returns a unique identifier for this commit based on Base 36 to include numbers
     * and letters.
     * This application does not need absolute uniqueness identifiers, so it will work fine.
     */
    generateNumbersAndLettersRandomCommitId()
    {
        return Math.random().toString(36).substring(2, 15)
    }
}