export interface Coub {
  flag?: null;
  abuses?: null;
  recoubs_by_users_channels?: null;
  favourite: boolean;
  promoted_id?: null;
  recoub?: null;
  like?: null;
  dislike?: null;
  reaction?: null;
  in_my_best2015: boolean;
  id: number;
  type: string;
  permalink: string;
  title: string;
  visibility_type: string;
  original_visibility_type: string;
  channel_id: number;
  created_at: string;
  updated_at: string;
  is_done: boolean;
  views_count: number;
  cotd?: null;
  cotd_at?: null;
  visible_on_explore_root: boolean;
  visible_on_explore: boolean;
  featured: boolean;
  published: boolean;
  published_at: string;
  reversed: boolean;
  from_editor_v2: boolean;
  is_editable: boolean;
  original_sound: boolean;
  has_sound: boolean;
  recoub_to?: null;
  file_versions: FileVersions;
  audio_versions: AudioVersionsOrEditorialInfo;
  image_versions: AvatarVersionsOrImageVersionsOrFirstFrameVersions;
  first_frame_versions: AvatarVersionsOrImageVersionsOrFirstFrameVersions;
  dimensions: Dimensions;
  site_w_h?: number[] | null;
  page_w_h?: number[] | null;
  site_w_h_small?: number[] | null;
  size?: number[] | null;
  age_restricted: boolean;
  age_restricted_by_admin: boolean;
  not_safe_for_work?: null;
  allow_reuse: boolean;
  dont_crop: boolean;
  banned: boolean;
  global_safe: boolean;
  audio_file_url?: null;
  external_download: ExternalDownload;
  application?: null;
  channel: Channel;
  file?: null;
  picture: string;
  timeline_picture: string;
  small_picture: string;
  sharing_picture?: null;
  percent_done: number;
  tags?: TagsEntity[] | null;
  categories?: CategoriesEntity[] | null;
  communities?: CommunitiesEntity[] | null;
  recoubs_count: number;
  remixes_count: number;
  likes_count: number;
  dislikes_count: number;
  raw_video_id: number;
  uploaded_by_ios_app: boolean;
  uploaded_by_android_app: boolean;
  media_blocks: MediaBlocks;
  raw_video_thumbnail_url: string;
  raw_video_title: string;
  video_block_banned: boolean;
  duration: number;
  promo_winner: boolean;
  promo_winner_recoubers?: null;
  editorial_info: AudioVersionsOrEditorialInfo;
  promo_hint?: null;
  beeline_best_2014?: null;
  from_web_editor: boolean;
  normalize_sound: boolean;
  normalize_change_allowed: boolean;
  best2015_addable: boolean;
  ahmad_promo?: null;
  promo_data?: null;
  audio_copyright_claim?: null;
  ads_disabled?: null;
  is_safe_for_ads: boolean;
  megafon_contents?: null[] | null;
}
export interface FileVersions {
  html5: Html5;
  mobile: Mobile;
  share: Share;
}
export interface Html5 {
  video: Video;
  audio: Audio;
}
export interface Video {
  higher: HighOrMed;
  high: HighOrMed;
  med: HighOrMed;
}
export interface HighOrMed {
  url: string;
  size: number;
}
export interface Audio {
  higher: HighOrMed;
  high: HighOrMed;
  med: HighOrMed;
  sample_duration: number;
}
export interface Mobile {
  video: string;
  audio?: string[] | null;
}
export interface Share {
  default?: null;
}
export interface AudioVersionsOrEditorialInfo {}
export interface AvatarVersionsOrImageVersionsOrFirstFrameVersions {
  template: string;
  versions?: string[] | null;
}
export interface Dimensions {
  big?: number[] | null;
  med?: number[] | null;
}
export interface ExternalDownload {
  type: string;
  service_name: string;
  url: string;
  has_embed: boolean;
}
export interface Channel {
  id: number;
  permalink: string;
  title: string;
  description: string;
  followers_count: number;
  following_count: number;
  avatar_versions: AvatarVersionsOrImageVersionsOrFirstFrameVersions;
  background_image: string;
  coubs_count: number;
  recoubs_count: number;
}
export interface TagsEntity {
  id: number;
  title: string;
  value: string;
}
export interface CategoriesEntity {
  id: number;
  title: string;
  permalink: string;
  subscriptions_count: number;
  big_image_url: string;
  small_image_url: string;
  med_image_url: string;
  visible: boolean;
}
export interface CommunitiesEntity {
  id: number;
  title: string;
  permalink: string;
  subscriptions_count: number;
  big_image_url: string;
  small_image_url: string;
  med_image_url: string;
  i_subscribed: boolean;
  community_notifications_enabled?: null;
  description?: null;
}
export interface MediaBlocks {
  uploaded_raw_videos?: null[] | null;
  external_raw_videos?: ExternalRawVideosEntityOrExternalVideo[] | null;
  remixed_from_coubs?: null[] | null;
  external_video: ExternalRawVideosEntityOrExternalVideo;
}
export interface ExternalRawVideosEntityOrExternalVideo {
  id: number;
  title: string;
  url: string;
  image: string;
  image_retina: string;
  meta: Meta;
  duration: number;
  raw_video_id: number;
  has_embed: boolean;
}
export interface Meta {
  service: string;
  duration: string;
}
