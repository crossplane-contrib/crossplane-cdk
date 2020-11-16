// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * An ELBAttachment is a managed resource that represents attachment of an AWS Classic Load Balancer and an AWS EC2 instance.
 *
 * @schema ELBAttachment
 */
export class ElbAttachment extends ApiObject {
  /**
   * Defines a "ELBAttachment" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: ElbAttachmentOptions) {
    super(scope, name, {
      ...options,
      kind: 'ELBAttachment',
      apiVersion: 'elasticloadbalancing.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * An ELBAttachment is a managed resource that represents attachment of an AWS Classic Load Balancer and an AWS EC2 instance.
 *
 * @schema ELBAttachment
 */
export interface ElbAttachmentOptions {
  /**
   * @schema ELBAttachment#metadata
   */
  readonly metadata?: any;

  /**
   * An ELBAttachmentSpec defines the desired state of an ELBAttachment.
   *
   * @schema ELBAttachment#spec
   */
  readonly spec: ElbAttachmentSpec;

}

/**
 * An ELBAttachmentSpec defines the desired state of an ELBAttachment.
 *
 * @schema ElbAttachmentSpec
 */
export interface ElbAttachmentSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema ElbAttachmentSpec#deletionPolicy
   */
  readonly deletionPolicy?: ElbAttachmentSpecDeletionPolicy;

  /**
   * ELBAttachmentParameters define the desired state of an AWS ELBAttachment.
   *
   * @schema ElbAttachmentSpec#forProvider
   */
  readonly forProvider: ElbAttachmentSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema ElbAttachmentSpec#providerConfigRef
   */
  readonly providerConfigRef?: ElbAttachmentSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema ElbAttachmentSpec#providerRef
   */
  readonly providerRef?: ElbAttachmentSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema ElbAttachmentSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: ElbAttachmentSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema ElbAttachmentSpecDeletionPolicy
 */
export enum ElbAttachmentSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * ELBAttachmentParameters define the desired state of an AWS ELBAttachment.
 *
 * @schema ElbAttachmentSpecForProvider
 */
export interface ElbAttachmentSpecForProvider {
  /**
   * Name of the Elastic Load Balancer to which the instances will attach.
   *
   * @schema ElbAttachmentSpecForProvider#elbName
   */
  readonly elbName?: string;

  /**
   * ELBNameRef references an ELB to and retrieves its external-name.
   *
   * @schema ElbAttachmentSpecForProvider#elbNameRef
   */
  readonly elbNameRef?: ElbAttachmentSpecForProviderElbNameRef;

  /**
   * ELBNameSelector selects a reference to a ELB to and retrieves its external-name.
   *
   * @schema ElbAttachmentSpecForProvider#elbNameSelector
   */
  readonly elbNameSelector?: ElbAttachmentSpecForProviderElbNameSelector;

  /**
   * List of identities of the instances to be attached.
   *
   * @schema ElbAttachmentSpecForProvider#instanceId
   */
  readonly instanceId: string;

  /**
   * Region is the region you'd like your ELBAttachment to be in.
   *
   * @schema ElbAttachmentSpecForProvider#region
   */
  readonly region: string;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema ElbAttachmentSpecProviderConfigRef
 */
export interface ElbAttachmentSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema ElbAttachmentSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema ElbAttachmentSpecProviderRef
 */
export interface ElbAttachmentSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema ElbAttachmentSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema ElbAttachmentSpecWriteConnectionSecretToRef
 */
export interface ElbAttachmentSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema ElbAttachmentSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema ElbAttachmentSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * ELBNameRef references an ELB to and retrieves its external-name.
 *
 * @schema ElbAttachmentSpecForProviderElbNameRef
 */
export interface ElbAttachmentSpecForProviderElbNameRef {
  /**
   * Name of the referenced object.
   *
   * @schema ElbAttachmentSpecForProviderElbNameRef#name
   */
  readonly name: string;

}

/**
 * ELBNameSelector selects a reference to a ELB to and retrieves its external-name.
 *
 * @schema ElbAttachmentSpecForProviderElbNameSelector
 */
export interface ElbAttachmentSpecForProviderElbNameSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema ElbAttachmentSpecForProviderElbNameSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema ElbAttachmentSpecForProviderElbNameSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

