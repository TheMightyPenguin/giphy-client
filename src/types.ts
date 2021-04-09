export type ImageDescription = {
  url: string;
  width: string;
  height: string;
};

export type Gif = {
  id: string;
  slug: string;
  url: string;
  username: string;
  rating: string;
  title: string;
  images: {
    fixed_height: ImageDescription;
    original: ImageDescription;
  };
};

export type TrendingResponse = {
  data: Gif[];
  pagination: any;
  meta: any;
};

export type DetailResponse = {
  data: Gif;
  meta: any;
};

export type FetchResult<T> =
  | {
      loading: true;
      data: undefined;
    }
  | {
      loading: false;
      data: T;
    };
