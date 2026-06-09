/**
 * @generated SignedSource<<4623e5fd5cd64352e81d8dfd96902765>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PhotoViewerFragment$data = {
  readonly alternateDescription: string;
  readonly id: string;
  readonly isPurchased: boolean;
  readonly previewUrl: string | null | undefined;
  readonly takenAt: any;
  readonly " $fragmentType": "PhotoViewerFragment";
};
export type PhotoViewerFragment$key = {
  readonly " $data"?: PhotoViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PhotoViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PhotoViewerFragment",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      "action": "THROW"
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
      "name": "alternateDescription",
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
      "name": "takenAt",
      "storageKey": null
    }
  ],
  "type": "Photo",
  "abstractKey": null
};

(node as any).hash = "cf7738775541dbfc0ccefa9d10fbd06e";

export default node;
