export interface Datas {
    id:string,
    email:string,
    password :string,
    username:string,
    role :string,
    company: string;
    description: string;
    industry: string;
    location: string;
    postedDate: string;
    recruiterId: number;
    requirements: string;
    title: string;
    type: string;
    profilePicture?: string;
    education?: Array<{ degree: string; university: string; year: string }>;
    workExperience?: Array<{ title: string; company: string; startDate: string; endDate: string; description: string }>;
    skills?: Array<{ name: string }>;

}

export interface Education {
    id: number;
    degree: string;
    university: string;
    year: string;
  }
  
  export interface WorkExperience {
    id: number;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  export interface Skills {
    id: number;
    name: string;
  }




