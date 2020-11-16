// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * An IAMGroupUserMembership is a managed resource that represents an AWS IAM User group membership.
 *
 * @schema IAMGroupUserMembership
 */
export class IamGroupUserMembership extends ApiObject {
  /**
   * Defines a "IAMGroupUserMembership" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: IamGroupUserMembershipOptions) {
    super(scope, name, {
      ...options,
      kind: 'IAMGroupUserMembership',
      apiVersion: 'identity.aws.crossplane.io/v1alpha1',
    });
  }
}

/**
 * An IAMGroupUserMembership is a managed resource that represents an AWS IAM User group membership.
 *
 * @schema IAMGroupUserMembership
 */
export interface IamGroupUserMembershipOptions {
  /**
   * @schema IAMGroupUserMembership#metadata
   */
  readonly metadata?: any;

  /**
   * An IAMGroupUserMembershipSpec defines the desired state of an IAMGroupUserMembership.
   *
   * @schema IAMGroupUserMembership#spec
   */
  readonly spec: IamGroupUserMembershipSpec;

}

/**
 * An IAMGroupUserMembershipSpec defines the desired state of an IAMGroupUserMembership.
 *
 * @schema IamGroupUserMembershipSpec
 */
export interface IamGroupUserMembershipSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema IamGroupUserMembershipSpec#deletionPolicy
   */
  readonly deletionPolicy?: IamGroupUserMembershipSpecDeletionPolicy;

  /**
   * IAMGroupUserMembershipParameters define the desired state of an AWS IAMGroupUserMembership.
   *
   * @schema IamGroupUserMembershipSpec#forProvider
   */
  readonly forProvider: IamGroupUserMembershipSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema IamGroupUserMembershipSpec#providerConfigRef
   */
  readonly providerConfigRef?: IamGroupUserMembershipSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema IamGroupUserMembershipSpec#providerRef
   */
  readonly providerRef?: IamGroupUserMembershipSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema IamGroupUserMembershipSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: IamGroupUserMembershipSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema IamGroupUserMembershipSpecDeletionPolicy
 */
export enum IamGroupUserMembershipSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = 'Orphan',
  /** Delete */
  DELETE = 'Delete',
}

/**
 * IAMGroupUserMembershipParameters define the desired state of an AWS IAMGroupUserMembership.
 *
 * @schema IamGroupUserMembershipSpecForProvider
 */
export interface IamGroupUserMembershipSpecForProvider {
  /**
   * GroupName is the Amazon IAM Group Name (IAMGroup) of the IAM group you want to add User to.
   *
   * @schema IamGroupUserMembershipSpecForProvider#groupName
   */
  readonly groupName?: string;

  /**
   * GroupNameRef references to an IAMGroup to retrieve its groupName
   *
   * @schema IamGroupUserMembershipSpecForProvider#groupNameRef
   */
  readonly groupNameRef?: IamGroupUserMembershipSpecForProviderGroupNameRef;

  /**
   * GroupNameSelector selects a reference to an IAMGroup to retrieve its groupName
   *
   * @schema IamGroupUserMembershipSpecForProvider#groupNameSelector
   */
  readonly groupNameSelector?: IamGroupUserMembershipSpecForProviderGroupNameSelector;

  /**
   * UserName presents the name of the IAMUser.
   *
   * @schema IamGroupUserMembershipSpecForProvider#userName
   */
  readonly userName?: string;

  /**
   * UserNameRef references to an IAMUser to retrieve its userName
   *
   * @schema IamGroupUserMembershipSpecForProvider#userNameRef
   */
  readonly userNameRef?: IamGroupUserMembershipSpecForProviderUserNameRef;

  /**
   * UserNameSelector selects a reference to an IAMUser to retrieve its userName
   *
   * @schema IamGroupUserMembershipSpecForProvider#userNameSelector
   */
  readonly userNameSelector?: IamGroupUserMembershipSpecForProviderUserNameSelector;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema IamGroupUserMembershipSpecProviderConfigRef
 */
export interface IamGroupUserMembershipSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema IamGroupUserMembershipSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema IamGroupUserMembershipSpecProviderRef
 */
export interface IamGroupUserMembershipSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema IamGroupUserMembershipSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema IamGroupUserMembershipSpecWriteConnectionSecretToRef
 */
export interface IamGroupUserMembershipSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema IamGroupUserMembershipSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema IamGroupUserMembershipSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * GroupNameRef references to an IAMGroup to retrieve its groupName
 *
 * @schema IamGroupUserMembershipSpecForProviderGroupNameRef
 */
export interface IamGroupUserMembershipSpecForProviderGroupNameRef {
  /**
   * Name of the referenced object.
   *
   * @schema IamGroupUserMembershipSpecForProviderGroupNameRef#name
   */
  readonly name: string;

}

/**
 * GroupNameSelector selects a reference to an IAMGroup to retrieve its groupName
 *
 * @schema IamGroupUserMembershipSpecForProviderGroupNameSelector
 */
export interface IamGroupUserMembershipSpecForProviderGroupNameSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema IamGroupUserMembershipSpecForProviderGroupNameSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema IamGroupUserMembershipSpecForProviderGroupNameSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * UserNameRef references to an IAMUser to retrieve its userName
 *
 * @schema IamGroupUserMembershipSpecForProviderUserNameRef
 */
export interface IamGroupUserMembershipSpecForProviderUserNameRef {
  /**
   * Name of the referenced object.
   *
   * @schema IamGroupUserMembershipSpecForProviderUserNameRef#name
   */
  readonly name: string;

}

/**
 * UserNameSelector selects a reference to an IAMUser to retrieve its userName
 *
 * @schema IamGroupUserMembershipSpecForProviderUserNameSelector
 */
export interface IamGroupUserMembershipSpecForProviderUserNameSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema IamGroupUserMembershipSpecForProviderUserNameSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema IamGroupUserMembershipSpecForProviderUserNameSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

