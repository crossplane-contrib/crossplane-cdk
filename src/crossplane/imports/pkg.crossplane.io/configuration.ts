// generated by cdk8s
import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * Configuration is the CRD type for a request to add a configuration to Crossplane.
 *
 * @schema Configuration
 */
export class Configuration extends ApiObject {
  /**
   * Defines a "Configuration" API object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: ConfigurationOptions = {}) {
    super(scope, name, {
      ...options,
      kind: 'Configuration',
      apiVersion: 'pkg.crossplane.io/v1alpha1',
    });
  }
}

/**
 * Configuration is the CRD type for a request to add a configuration to Crossplane.
 *
 * @schema Configuration
 */
export interface ConfigurationOptions {
  /**
   * @schema Configuration#metadata
   */
  readonly metadata?: any;

  /**
   * ConfigurationSpec specifies details about a request to install a configuration to Crossplane.
   *
   * @schema Configuration#spec
   */
  readonly spec?: ConfigurationSpec;

}

/**
 * ConfigurationSpec specifies details about a request to install a configuration to Crossplane.
 *
 * @schema ConfigurationSpec
 */
export interface ConfigurationSpec {
  /**
   * IgnoreCrossplaneConstraints indicates to the package manager whether to honor Crossplane version constrains specified by the package. Default is false.
   *
   * @default false.
   * @schema ConfigurationSpec#ignoreCrossplaneConstraints
   */
  readonly ignoreCrossplaneConstraints?: boolean;

  /**
   * Package is the name of the package that is being requested.
   *
   * @schema ConfigurationSpec#package
   */
  readonly package: string;

  /**
   * PackagePullPolicy defines the pull policy for the package. Default is IfNotPresent.
   *
   * @default IfNotPresent.
   * @schema ConfigurationSpec#packagePullPolicy
   */
  readonly packagePullPolicy?: string;

  /**
   * PackagePullSecrets are named secrets in the same namespace that can be used to fetch packages from private registries.
   *
   * @schema ConfigurationSpec#packagePullSecrets
   */
  readonly packagePullSecrets?: ConfigurationSpecPackagePullSecrets[];

  /**
   * RevisionActivationPolicy specifies how the package controller should update from one revision to the next. Options are Automatic or Manual. Default is Automatic.
   *
   * @default Automatic.
   * @schema ConfigurationSpec#revisionActivationPolicy
   */
  readonly revisionActivationPolicy?: string;

  /**
   * RevisionHistoryLimit dictates how the package controller cleans up old inactive package revisions. Defaults to 1. Can be disabled by explicitly setting to 0.
   *
   * @default 1. Can be disabled by explicitly setting to 0.
   * @schema ConfigurationSpec#revisionHistoryLimit
   */
  readonly revisionHistoryLimit?: number;

}

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 *
 * @schema ConfigurationSpecPackagePullSecrets
 */
export interface ConfigurationSpecPackagePullSecrets {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
   *
   * @schema ConfigurationSpecPackagePullSecrets#name
   */
  readonly name?: string;

}

