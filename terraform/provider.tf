terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.40.0"
      shared_credentials_files = ["/home/vagrant/.aws/credentials"]
    }
  }
}

