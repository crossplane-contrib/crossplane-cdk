// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * An IAMRolePolicyAttachment is a managed resource that represents an AWS IAM Role policy attachment.
 *
 * @schema IAMRolePolicyAttachment
 */
export class IamRolePolicyAttachment extends ApiObject {
  /**
   * Defines a "IAMRolePolicyAttachment" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: IamRolePolicyAttachmentOptions) {
    super(scope, name, {
      ...options,
      kind: 'IAMRolePolicyAttachment',
      apiVersion: 'identity.aws.crossplane.io/v1beta1',
    });
  }
}

/**
 * An IAMRolePolicyAttachment is a managed resource that represents an AWS IAM Role policy attachment.
 *
 * @schema IAMRolePolicyAttachment
 */
export interface IamRolePolicyAttachmentOptions {
  /**
   * @schema IAMRolePolicyAttachment#metadata
   */
  readonly metadata?: any;

  /**
   * An IAMRolePolicyAttachmentSpec defines the desired state of an IAMRolePolicyAttachment.
   *
   * @schema IAMRolePolicyAttachment#spec
   */
  readonly spec: IamRolePolicyAttachmentSpec;

}

/**
 * An IAMRolePolicyAttachmentSpec defines the desired state of an IAMRolePolicyAttachment.
 *
 * @schema IamRolePolicyAttachmentSpec
 */
export interface IamRolePolicyAttachmentSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema IamRolePolicyAttachmentSpec#deletionPolicy
   */
  readonly deletionPolicy?: IamRolePolicyAttachmentSpecDeletionPolicy;

  /**
   * IAMRolePolicyAttachmentParameters define the desired state of an AWS IAM Role policy attachment.
   *
   * @schema IamRolePolicyAttachmentSpec#forProvider
   */
  readonly forProvider: IamRolePolicyAttachmentSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema IamRolePolicyAttachmentSpec#providerConfigRef
   */
  readonly providerConfigRef?: IamRolePolicyAttachmentSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema IamRolePolicyAttachmentSpec#providerRef
   */
  readonly providerRef?: IamRolePolicyAttachmentSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema IamRolePolicyAttachmentSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: IamRolePolicyAttachmentSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema IamRolePolicyAttachmentSpecDeletionPolicy
 */
export enum IamRolePolicyAttachmentSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * IAMRolePolicyAttachmentParameters define the desired state of an AWS IAM Role policy attachment.
 *
 * @schema IamRolePolicyAttachmentSpecForProvider
 */
export interface IamRolePolicyAttachmentSpecForProvider {
  /**
   * PolicyARN is the Amazon Resource Name (ARN) of the IAM policy you want to attach.
   *
   * @schema IamRolePolicyAttachmentSpecForProvider#policyArn
   */
  readonly policyArn?: string;

  /**
   * PolicyARNRef references an IAMPolicy to retrieve its Policy ARN.
   *
   * @schema IamRolePolicyAttachmentSpecForProvider#policyArnRef
   */
  readonly policyArnRef?: IamRolePolicyAttachmentSpecForProviderPolicyArnRef;

  /**
   * PolicyARNSelector selects a reference to an IAMPolicy to retrieve its Policy ARN
   *
   * @schema IamRolePolicyAttachmentSpecForProvider#policyArnSelector
   */
  readonly policyArnSelector?: IamRolePolicyAttachmentSpecForProviderPolicyArnSelector;

  /**
   * RoleName presents the name of the IAM role.
   *
   * @schema IamRolePolicyAttachmentSpecForProvider#roleName
   */
  readonly roleName?: string;

  /**
   * RoleNameRef references an IAMRole to retrieve its Name
   *
   * @schema IamRolePolicyAttachmentSpecForProvider#roleNameRef
   */
  readonly roleNameRef?: IamRolePolicyAttachmentSpecForProviderRoleNameRef;

  /**
   * RoleNameSelector selects a reference to an IAMRole to retrieve its Name
   *
   * @schema IamRolePolicyAttachmentSpecForProvider#roleNameSelector
   */
  readonly roleNameSelector?: IamRolePolicyAttachmentSpecForProviderRoleNameSelector;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema IamRolePolicyAttachmentSpecProviderConfigRef
 */
export interface IamRolePolicyAttachmentSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema IamRolePolicyAttachmentSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema IamRolePolicyAttachmentSpecProviderRef
 */
export interface IamRolePolicyAttachmentSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema IamRolePolicyAttachmentSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema IamRolePolicyAttachmentSpecWriteConnectionSecretToRef
 */
export interface IamRolePolicyAttachmentSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema IamRolePolicyAttachmentSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema IamRolePolicyAttachmentSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * PolicyARNRef references an IAMPolicy to retrieve its Policy ARN.
 *
 * @schema IamRolePolicyAttachmentSpecForProviderPolicyArnRef
 */
export interface IamRolePolicyAttachmentSpecForProviderPolicyArnRef {
  /**
   * Name of the referenced object.
   *
   * @schema IamRolePolicyAttachmentSpecForProviderPolicyArnRef#name
   */
  readonly name: string;

}

/**
 * PolicyARNSelector selects a reference to an IAMPolicy to retrieve its Policy ARN
 *
 * @schema IamRolePolicyAttachmentSpecForProviderPolicyArnSelector
 */
export interface IamRolePolicyAttachmentSpecForProviderPolicyArnSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema IamRolePolicyAttachmentSpecForProviderPolicyArnSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema IamRolePolicyAttachmentSpecForProviderPolicyArnSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * RoleNameRef references an IAMRole to retrieve its Name
 *
 * @schema IamRolePolicyAttachmentSpecForProviderRoleNameRef
 */
export interface IamRolePolicyAttachmentSpecForProviderRoleNameRef {
  /**
   * Name of the referenced object.
   *
   * @schema IamRolePolicyAttachmentSpecForProviderRoleNameRef#name
   */
  readonly name: string;

}

/**
 * RoleNameSelector selects a reference to an IAMRole to retrieve its Name
 *
 * @schema IamRolePolicyAttachmentSpecForProviderRoleNameSelector
 */
export interface IamRolePolicyAttachmentSpecForProviderRoleNameSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema IamRolePolicyAttachmentSpecForProviderRoleNameSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema IamRolePolicyAttachmentSpecForProviderRoleNameSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

