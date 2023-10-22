interface Skills {
    id: number;
    skill_bloc_id: number;
    skill_id: Skill_id[];
}

interface Skill_id {
    id: number;
    status: string;
    user_created: string;
    date_created: string;
    Name: string;
    Description: string;
    Icon: string;
}

export default Skills;