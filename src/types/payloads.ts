import {StudentFeeling, VstepCourse, VstepInfo, VstepLecturer, VstepReview, VstepWarrior} from "./models";

export interface LecturerPayload extends Omit<VstepLecturer, "img" | "id"> {
    id?: string
    img: Blob | null
}

export interface ReviewPayload
  extends Omit<VstepReview, "img" | "id" | "reviewerAvatar"> {
  id?: string;
  img: Blob | null;
  reviewerAvatar: Blob | null;
}

export interface ContactFormPayload {
    name: string
    phoneNumber: string
    goal?: string
    courseId: string
    availableTime: string[]
}

export interface CoursePayload extends VstepCourse {
}

export interface BlogPayload {
    id?: string
    slug?: string
    img?: Blob | null
    title?: string,
    content?: string,
    category?: string,
    shortDescription?: string,
    createdDate?: string,
    postingDate?: string
}

export interface WarriorPayload extends Omit<VstepWarrior, "img" | "id"> {
    id?: string 
    img: Blob | null
}

export interface VstepInfoPayload extends VstepInfo {}

export interface StudentFeelingPayload extends Omit<StudentFeeling, "id" | "avatar"> {
    id?: string
    avatar: Blob | null
}

export interface SchedulePayload {
    id?: string
    img: Blob | null
}