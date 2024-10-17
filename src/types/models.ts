export interface VstepBenefit {
    title?: string;
    description?: string;
}

export interface VstepWarrior {
    id?: number,
    stdName?: string,
    certification?: string,
    img?: string,
}

export interface VstepBlog {
    id: number,
    img: string,
    title: string,
    content: string,
    category: string,
    shortDescription: string,
    createdDate: string,
    slug: string
    postingDate: string
}

export interface VstepReview {
    id?: number;
    reviewerName?: string;
    reviewerAvatar?: string;
    date?: string;
    link?: string;
    img?: string;
    description?: string;
}

export interface VstepLecturer {
    id?: number;
    name?: string;
    position?: string;
    img?: string;
    background?: string;
}

export interface VstepCourse {
    id?: number
    name?: string
    description?: string
}

export interface VstepInfo {
    id?: string
    name?: string
    value?: string
}

export interface VstepWarrior {
    id?: number
    stdName?: string
    img?: string
    certification?: string
}

export interface StudentFeeling {
    id?: number,
    stdName?: string,
    avatar?: string,
    certification?: string
    feeling?: string
}

export interface VstepDifference {
    title?: string;
    description?: string;
}

export interface VstepSchedule {
    id: number;
    img: string
}
