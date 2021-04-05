export class Profiles {
    public id: number;
    public name: string;
    public profileImageUrl: string;
    public currentRole: string;
    public skills: Array<string>;
    public status: number;

    constructor(data: any = {}) {
        this.currentRole = data.currentRole;
        this.id = data.id;
        this.name = data.name;
        this.profileImageUrl = data.profileImageUrl;
        this.skills = data.skills ? data.skills : new Array<string>();
        this.status = data.skills;
    }
}