import boto3
import os

AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_REGION = os.getenv("AWS_REGION", "us-east-1")
S3_BUCKET_NAME = os.getenv("S3_BUCKET_NAME")

s3_client = boto3.client(
    "s3",
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION
)

def create_user_folder(username: str):
    try:
        s3_client.put_object(Bucket=S3_BUCKET_NAME, Key=f"{username}/")
        return True
    except Exception as e:
        print(f"Error creating S3 folder for user {username}: {e}")
        return False

def upload_file_to_s3(file_content, filename: str, username: str):
    try:
        s3_client.put_object(Bucket=S3_BUCKET_NAME, Key=f"{username}/{filename}", Body=file_content)
        return True
    except Exception as e:
        print(f"Error uploading file {filename} to S3 for user {username}: {e}")
        return False

def list_files_in_s3_folder(username: str):
    try:
        response = s3_client.list_objects_v2(Bucket=S3_BUCKET_NAME, Prefix=f"{username}/")
        files = []
        if "Contents" in response:
            for obj in response["Contents"]:
                if obj["Key"].endswith('/'): # Skip the folder itself
                    continue
                files.append({"name": obj["Key"].split('/')[-1], "key": obj["Key"], "size": obj["Size"], "last_modified": obj["LastModified"]})
        return files
    except Exception as e:
        print(f"Error listing files in S3 for user {username}: {e}")
        return []

def get_file_from_s3(file_key: str):
    try:
        response = s3_client.get_object(Bucket=S3_BUCKET_NAME, Key=file_key)
        return response["Body"].read().decode('utf-8')
    except Exception as e:
        print(f"Error getting file {file_key} from S3: {e}")
        return None
