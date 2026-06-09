/**
 * @generated SignedSource<<1d4aabd995cdffc462fa77924bb4cbb3>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PhotoFragment$data = {
  readonly caption: string | null | undefined;
  readonly eventName: string | null | undefined;
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
      "name": "eventName",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "caption",
      "storageKey": null
    }
  ],
  "type": "Photo",
  "abstractKey": null
};

(node as any).hash = "9cbb070088501717ee90f1ddfc49552d";

export default node;
