export interface CustomRouter {
    path: string
    element: JSX.Element
    name?: string
    children?: CustomRouter[]
    icon?: JSX.Element | string,
    sideBarDisplay?: boolean
}

export interface VstepResponse {
    code: number
    data?: any
    errors?: any
}

export interface LoginInfo {
    email: string
    password: string
}

export interface ImgurReturn {
    link: string
    delHash: string
}

export interface Heading {
    text: string
    id: string
    // level: number;
  }