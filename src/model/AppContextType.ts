export interface FontDoc {
  titleFamily: string;
  titleFamilyUrl: string;
  bodyFamily: string;
  bodyFamilyUrl: string;
}

export interface ColorDoc {
  primary: string;
  secondary: string;
  warning: string;
  danger: string;
  background: string;
}

export interface TextDoc {
  value: string;
  color: string;
  type: "normal" | "typeeffect";
  text_lists: { id: string; value: string }[];
}
export interface BgImageDoc {
  url: string;
}

export interface CarouselDoc {
  id: string;
  image_name: string;
  image_type: "normal";
  title_text: string;
  body_text: string;
}

export interface ProjectCounterDoc {
  id: string;
  image_name: string;
  image_type: "normal" | "svg";
  title_text: string;
  body_text: string;
  counter: number;
}

export interface GalleryDoc {
  id: string;
  image_name: string;
  image_type: "normal";
  title_text: string;
  body_text: string;
  action_type: "url" | "alert" | "tel" | "disabled";
  alert_title?: string;
  phone?: string;
  url?: string;
}
export interface SideImageDoc {
  image_type: "normal" | "svg";
  image_name: string;
  url: string;
  text?: TextDoc;
}

export interface TimeLineDoc {
  id: string;
  icon_name: string;
  title_text: string;
  body_text: string;
}

export interface ButtonDoc {
  id: string;
  name: string;
  icon_name?: string;
  type: "outlined" | "solid";
  action_type: "url" | "alert" | "tel";
  alert_title?: string;
  phone?: string;
  url: string;
}
export interface SectionDoc {
  id: string; // Unique ID
  type:
    | "Header"
    | "Carousel"
    | "TimeLine"
    | "ContactUs"
    | "Gallery"
    | "ProjectCounter"; // Header
  name: string; // Nav Name -> Home, About
  comp_name: string; // HeaderOne, HeaderTwo

  // Common Fields
  swap_direction: boolean;
  show_nav_bar: boolean;
  title_text: string;
  body_text: string;
  type_effect_text?: string[];
  bg_image?: BgImageDoc;
  side_image?: SideImageDoc;
  time_lines?: TimeLineDoc[];
  carousels?: CarouselDoc[];
  galleries?: GalleryDoc[];
  project_counter_list?: ProjectCounterDoc[];
  buttons?: ButtonDoc[];
}

export interface AppContextInterface {
  title: string;
  font: FontDoc;
  color: ColorDoc;
  sections: SectionDoc[];
  is_exporting: boolean;
  editingSections: string | null;

  setFont?: (font: FontDoc) => void | any;
  setColor?: (color: ColorDoc) => void | any;
  setTitle?: (title: string) => void | any;
  setEditingSection?: (section: SectionDoc) => void | any;
  onUpdateSection?: (section: SectionDoc) => void | any;
  onDeleteSection?: (section: SectionDoc) => void | any;
  onSelectSection: (section: SectionDoc) => void | any;
  onExporting?: () => void | any;
  setClearSection?: () => void | any;
}
