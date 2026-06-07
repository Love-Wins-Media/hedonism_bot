/**
 * @generated SignedSource<<88ccac6fef43ccc6d656026369608b47>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PhotoFragment$data = {
  readonly id: string;
  readonly isPurchased: boolean;
  readonly previewUrl: string | null | undefined;
  readonly takenAt: any;
  readonly " $fragmentType": "PhotoFragment";
};
export type PhotoFragment$key = {
  readonly " $data"?: PhotoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PhotoFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PhotoFragment",
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
      "name": "isPurchased",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "previewUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "takenAt",
      "storageKey": null
    }
  ],
  "type": "Photo",
  "abstractKey": null
};

(node as any).hash = "0dfd521ffec05220818ff5f991d297ed";

export default node;
