// generated by cdk8s
import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';

/**
 * Certificate is a managed resource that represents an AWS Certificate Manager.
 *
 * @schema Certificate
 */
export class Certificate extends ApiObject {
  /**
   * Returns the apiVersion and kind for "Certificate"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'acm.aws.crossplane.io/v1alpha1',
    kind: 'Certificate',
  }

  /**
   * Adds "Certificate" kind and apiVersion to props
   * @param props initialization props
   */
  public static propsWithGVK(props: CertificateProps = {}): any {
    return {
      ...props,
      kind: 'Certificate',
      apiVersion: 'acm.aws.crossplane.io/v1alpha1',
    };
  }

  /**
   * Defines a "Certificate" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: CertificateProps = {}) {
    super(scope, id, Certificate.propsWithGVK(props));
  }
}

/**
 * Certificate is a managed resource that represents an AWS Certificate Manager.
 *
 * @schema Certificate
 */
export interface CertificateProps {
  /**
   * @schema Certificate#metadata
   */
  readonly metadata?: any;

  /**
   * CertificateSpec defines the desired state of Certificate
   *
   * @schema Certificate#spec
   */
  readonly spec?: CertificateSpec;

}

/**
 * CertificateSpec defines the desired state of Certificate
 *
 * @schema CertificateSpec
 */
export interface CertificateSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
   *
   * @schema CertificateSpec#deletionPolicy
   */
  readonly deletionPolicy?: CertificateSpecDeletionPolicy;

  /**
   * CertificateParameters defines the desired state of an AWS Certificate.
   *
   * @schema CertificateSpec#forProvider
   */
  readonly forProvider: CertificateSpecForProvider;

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema CertificateSpec#providerConfigRef
   */
  readonly providerConfigRef?: CertificateSpecProviderConfigRef;

  /**
   * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
   *
   * @schema CertificateSpec#providerRef
   */
  readonly providerRef?: CertificateSpecProviderRef;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema CertificateSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: CertificateSpecWriteConnectionSecretToRef;

}

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. The "Delete" policy is the default when no policy is specified.
 *
 * @schema CertificateSpecDeletionPolicy
 */
export enum CertificateSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = "Orphan",
  /** Delete */
  DELETE = "Delete",
}

/**
 * CertificateParameters defines the desired state of an AWS Certificate.
 *
 * @schema CertificateSpecForProvider
 */
export interface CertificateSpecForProvider {
  /**
   * The Amazon Resource Name (ARN) of the private certificate authority (CA)that will be used to issue the certificate.
   *
   * @schema CertificateSpecForProvider#certificateAuthorityARN
   */
  readonly certificateAuthorityARN?: string;

  /**
   * CertificateAuthorityARNRef references an AWS ACMPCA CertificateAuthority to retrieve its Arn
   *
   * @schema CertificateSpecForProvider#certificateAuthorityARNRef
   */
  readonly certificateAuthorityARNRef?: CertificateSpecForProviderCertificateAuthorityArnRef;

  /**
   * CertificateAuthorityARNSelector selects a reference to an AWS ACMPCA CertificateAuthority to retrieve its Arn
   *
   * @schema CertificateSpecForProvider#certificateAuthorityARNSelector
   */
  readonly certificateAuthorityARNSelector?: CertificateSpecForProviderCertificateAuthorityArnSelector;

  /**
   * Parameter add the certificate to a certificate transparency log.
   *
   * @schema CertificateSpecForProvider#certificateTransparencyLoggingPreference
   */
  readonly certificateTransparencyLoggingPreference?: CertificateSpecForProviderCertificateTransparencyLoggingPreference;

  /**
   * Fully qualified domain name (FQDN),that to secure with an ACM certificate.
   *
   * @schema CertificateSpecForProvider#domainName
   */
  readonly domainName: string;

  /**
   * The domain name that you want ACM to use to send you emails so that you can validate domain ownership.
   *
   * @schema CertificateSpecForProvider#domainValidationOptions
   */
  readonly domainValidationOptions?: CertificateSpecForProviderDomainValidationOptions[];

  /**
   * Region is the region you'd like your Certificate to be created in.
   *
   * @schema CertificateSpecForProvider#region
   */
  readonly region: string;

  /**
   * Flag to renew the certificate
   *
   * @schema CertificateSpecForProvider#renewCertificate
   */
  readonly renewCertificate?: boolean;

  /**
   * Subject Alternative Name extension of the ACM certificate.
   *
   * @schema CertificateSpecForProvider#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * One or more resource tags to associate with the certificate.
   *
   * @schema CertificateSpecForProvider#tags
   */
  readonly tags: CertificateSpecForProviderTags[];

  /**
   * Method to validate certificate.
   *
   * @schema CertificateSpecForProvider#validationMethod
   */
  readonly validationMethod?: CertificateSpecForProviderValidationMethod;

}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema CertificateSpecProviderConfigRef
 */
export interface CertificateSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema CertificateSpecProviderConfigRef#name
   */
  readonly name: string;

}

/**
 * ProviderReference specifies the provider that will be used to create, observe, update, and delete this managed resource. Deprecated: Please use ProviderConfigReference, i.e. `providerConfigRef`
 *
 * @schema CertificateSpecProviderRef
 */
export interface CertificateSpecProviderRef {
  /**
   * Name of the referenced object.
   *
   * @schema CertificateSpecProviderRef#name
   */
  readonly name: string;

}

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema CertificateSpecWriteConnectionSecretToRef
 */
export interface CertificateSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema CertificateSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema CertificateSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * CertificateAuthorityARNRef references an AWS ACMPCA CertificateAuthority to retrieve its Arn
 *
 * @schema CertificateSpecForProviderCertificateAuthorityArnRef
 */
export interface CertificateSpecForProviderCertificateAuthorityArnRef {
  /**
   * Name of the referenced object.
   *
   * @schema CertificateSpecForProviderCertificateAuthorityArnRef#name
   */
  readonly name: string;

}

/**
 * CertificateAuthorityARNSelector selects a reference to an AWS ACMPCA CertificateAuthority to retrieve its Arn
 *
 * @schema CertificateSpecForProviderCertificateAuthorityArnSelector
 */
export interface CertificateSpecForProviderCertificateAuthorityArnSelector {
  /**
   * MatchControllerRef ensures an object with the same controller reference as the selecting object is selected.
   *
   * @schema CertificateSpecForProviderCertificateAuthorityArnSelector#matchControllerRef
   */
  readonly matchControllerRef?: boolean;

  /**
   * MatchLabels ensures an object with matching labels is selected.
   *
   * @schema CertificateSpecForProviderCertificateAuthorityArnSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * Parameter add the certificate to a certificate transparency log.
 *
 * @schema CertificateSpecForProviderCertificateTransparencyLoggingPreference
 */
export enum CertificateSpecForProviderCertificateTransparencyLoggingPreference {
  /** ENABLED */
  ENABLED = "ENABLED",
  /** DISABLED */
  DISABLED = "DISABLED",
}

/**
 * DomainValidationOption validate domain ownership.
 *
 * @schema CertificateSpecForProviderDomainValidationOptions
 */
export interface CertificateSpecForProviderDomainValidationOptions {
  /**
   * Additinal Fully qualified domain name (FQDN),that to secure with an ACM certificate.
   *
   * @schema CertificateSpecForProviderDomainValidationOptions#domainName
   */
  readonly domainName: string;

  /**
   * Method to validate certificate
   *
   * @schema CertificateSpecForProviderDomainValidationOptions#validationDomain
   */
  readonly validationDomain: string;

}

/**
 * Tag represents user-provided metadata that can be associated
 *
 * @schema CertificateSpecForProviderTags
 */
export interface CertificateSpecForProviderTags {
  /**
   * The key name that can be used to look up or retrieve the associated value.
   *
   * @schema CertificateSpecForProviderTags#key
   */
  readonly key: string;

  /**
   * The value associated with this tag.
   *
   * @schema CertificateSpecForProviderTags#value
   */
  readonly value: string;

}

/**
 * Method to validate certificate.
 *
 * @schema CertificateSpecForProviderValidationMethod
 */
export enum CertificateSpecForProviderValidationMethod {
  /** DNS */
  DNS = "DNS",
  /** EMAIL */
  EMAIL = "EMAIL",
}

