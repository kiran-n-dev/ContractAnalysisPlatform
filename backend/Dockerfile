# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
# Explicitly add the current directory (where 'backend' folder is) to PYTHONPATH
CMD ["bash", "-c", "PYTHONPATH=$PYTHONPATH:/app uvicorn backend.main:app --host 0.0.0.0 --port 8000"]