/**
 * @generated SignedSource<<35cb8b1a34b15bdbceb6e192b02847ca>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FaceFragment$data = {
  readonly id: string;
  readonly label: string;
  readonly photoCount: number;
  readonly thumbnailUrl: string;
  readonly " $fragmentType": "FaceFragment";
};
export type FaceFragment$key = {
  readonly " $data"?: FaceFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FaceFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FaceFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "thumbnailUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "photoCount",
      "storageKey": null
    }
  ],
  "type": "Face",
  "abstractKey": null
};

(node as any).hash = "51e0cec465ca666cf9036c1f66d4e18f";

export default node;
