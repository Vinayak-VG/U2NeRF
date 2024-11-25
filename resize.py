from PIL import Image

# Load the image
image_path = "/home/vinayak/U2NeRF/docs/assets_copy/starfish_uw.jpeg"
image = Image.open(image_path)

# Resize the image
new_width = 640  # specify the new width
new_height = 360  # specify the new height
resized_image = image.resize((new_width, new_height))

# Save the resized image
resized_image.save("/home/vinayak/U2NeRF/docs/assets/starfish_uw.jpeg")
print("Image resized and saved successfully.")
