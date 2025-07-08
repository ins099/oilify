import { TopicType } from "../../components/Subject/Topic";

export interface IGeneralState {
    language: 'en' | 'es' | 'fr' | 'ur';
    accessToken?: string | null;
    refreshToken?: string | null;
    tempToken?: string | null;
}

export interface IStudyState {
    isStudyMode: boolean;
}

export interface IUserState {
    isGuest: boolean;
    isPremium: boolean;
    firstName: string | null;
    lastName: string | null;
    photo: string | null;
    email: string | null;
    loginType: 'google' | 'apple' | null
}

export interface IOfflineState {
    items: SubjectItem[] | []
}

export interface SubjectItem {
    id: string;
    title: string;
    topics: Topic[]
}

export interface Topic extends TopicType {
    questions: {
        id: string;
        question: string;
        materials: {
            id: string;
            type: 'image' | 'video';
            url: string
        }[]

    }[]
}