provider "aws" {
  region = "us-east-1"
  shared_credentials_files = ["/home/vagrant/.aws/credentials"]
}
#######################
# FRONTEND - S3 bucket
#######################

resource "aws_s3_bucket" "frontend" {
  bucket = "electromagnet-bucket"  # must be globally unique
  force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "frontend_policy" {
  bucket = aws_s3_bucket.frontend.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = "*",
      Action    = "s3:GetObject",
      Resource  = "${aws_s3_bucket.frontend.arn}/*"
    }]
  })
}

output "frontend_url" {
  value = aws_s3_bucket_website_configuration.frontend.website_endpoint
}

####################################
# BACKEND - Elastic Beanstalk App
####################################

resource "aws_elastic_beanstalk_application" "backend" {
  name = "my-backend-electromagnet-app"
}

resource "aws_elastic_beanstalk_environment" "backend_env" {
  name                = "my-backend-electromagnet-env"
  application         = aws_elastic_beanstalk_application.backend.name
  solution_stack_name = "64bit Amazon Linux 2 v5.8.4 running Node.js 18"

  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "EnvironmentType"
    value     = "SingleInstance"
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "InstanceType"
    value     = "t2.micro"
  }
}
