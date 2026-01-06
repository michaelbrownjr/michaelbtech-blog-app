import { DrupalNode } from "next-drupal";

export interface NodeProject extends DrupalNode {
  type: "node--project";
  field_url: {
    uri: string;
    title: string;
  };
  field_image: {
    uri: {
      url: string;
    };
    resourceIdObjMeta: {
        alt: string;
    }
  };
}

export interface NodeArticle extends DrupalNode {
  type: "node--article";
  field_image: {
    uri: {
      url: string;
    };
    resourceIdObjMeta: {
        alt: string;
    }
  };
}
