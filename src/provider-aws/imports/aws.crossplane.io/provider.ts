// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * A Provider configures an AWS 'provider', i.e. a connection to a particular AWS account using a particular AWS IAM role. Deprecated: Please migrate to ProviderConfig.
 *
 * @schema Provider
 */
export class Provider extends ApiObject {
  /**
   * Defines a "Provider" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: ProviderOptions) {
    super(scope, name, {
      ...options,
      kind: 'Provider',
      apiVersion: 'aws.crossplane.io/v1alpha3',
    });
  }
}

/**
 * A Provider configures an AWS 'provider', i.e. a connection to a particular AWS account using a particular AWS IAM role. Deprecated: Please migrate to ProviderConfig.
 *
 * @schema Provider
 */
export interface ProviderOptions {
  /**
   * @schema Provider#metadata
   */
  readonly metadata?: any;

  /**
   * A ProviderSpec defines the desired state of a Provider.
   *
   * @schema Provider#spec
   */
  readonly spec: ProviderSpec;

}

/**
 * A ProviderSpec defines the desired state of a Provider.
 *
 * @schema ProviderSpec
 */
export interface ProviderSpec {
  /**
   * CredentialsSecretRef references a specific secret's key that contains the credentials that are used to connect to the provider.
   *
   * @schema ProviderSpec#credentialsSecretRef
   */
  readonly credentialsSecretRef?: ProviderSpecCredentialsSecretRef;

  /**
   * Region for managed resources created using this AWS provider.
   *
   * @schema ProviderSpec#region
   */
  readonly region: string;

  /**
   * UseServiceAccount indicates to use an IAM Role associated Kubernetes ServiceAccount for authentication instead of a credentials Secret. https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html
 If set to true, credentialsSecretRef will be ignored.
   *
   * @schema ProviderSpec#useServiceAccount
   */
  readonly useServiceAccount?: boolean;

}

/**
 * CredentialsSecretRef references a specific secret's key that contains the credentials that are used to connect to the provider.
 *
 * @schema ProviderSpecCredentialsSecretRef
 */
export interface ProviderSpecCredentialsSecretRef {
  /**
   * The key to select.
   *
   * @schema ProviderSpecCredentialsSecretRef#key
   */
  readonly key: string;

  /**
   * Name of the secret.
   *
   * @schema ProviderSpecCredentialsSecretRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema ProviderSpecCredentialsSecretRef#namespace
   */
  readonly namespace: string;

}

