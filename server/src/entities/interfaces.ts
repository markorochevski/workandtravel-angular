export interface newCity{
    name: string;
    route_name: string;
    img_url: string;
}

export interface newPost{
    route_name: string;
    agency: string;
    employer: string;
    content: string;
    wage: string;
    avg_hours: string;
    year: string;
    profile_link: string;
    profile_link_public: string;
}

export interface newMessage{
    name: string;
    email: string;
    message: string;
}

export interface newQuestion{
    title: string;
    content: string;
}
