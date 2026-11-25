---
layout: page
title: Object Detection Using Faster R-CNN and YOLO
description: Comprehensive comparison of Faster R-CNN and YOLOv8 for object detection on a custom dataset with laptop, mouse, keyboard, and utensils.
img: assets/img/object_detection.png
github: https://github.com/GuangzhiSu/Object-Detection-Using-Faster_RCNN-and-YOLO
importance: 1
category: coursework
badge: Duke AIPI 590
tags: [YOLOv8, Faster R-CNN, ONNX]
---

{% include project_links.liquid size="lg" %}

This project implements and compares two state-of-the-art object detection algorithms - **Faster R-CNN** and **YOLOv8** - for the **Duke AIPI 590 Applied Computer Vision Course**. The project involves training, evaluating, and comparing these models' performance on a custom dataset with four object categories: laptop, mouse, keyboard, and utensils.

## Dataset

- **Total Images**: 362 manually annotated images
- **Classes**: Laptop, Mouse, Keyboard, Utensils
- **Annotation Tool**: CVAT for precise manual labeling
- **Data Quality**: Consistent annotations across both YOLOv8 and Faster R-CNN formats

## Models Implemented

### YOLOv8
- **Architecture**: Real-time, single-stage object detector
- **Training**: 30 epochs with 5-epoch update intervals
- **Performance**: mAP@0.5: 0.858, mAP@0.5:0.95: 0.641
- **Inference Speed**: ~3.5 ms per image
- **Model Size**: 5.26 MB
- **Deployment**: Exported to ONNX format for cross-platform compatibility

### Faster R-CNN
- **Architecture**: Two-stage detector with ResNet-50 backbone and Feature Pyramid Network (FPN)
- **Training**: 3000 iterations with gradient clipping
- **Performance**: mAP@0.5: 0.709, mAP@0.5:0.95: 0.521
- **Inference Speed**: ~60 ms per image
- **Model Size**: 314.85 MB

## Key Results

The comparison reveals important trade-offs between the two approaches:

- **YOLOv8**: Superior speed and efficiency with competitive accuracy
- **Faster R-CNN**: Higher accuracy but significantly larger model size and slower inference
- **Speed vs. Accuracy**: Clear trade-off between real-time performance and detection precision

## Technical Contributions

- Custom dataset creation and annotation
- Comprehensive model training and evaluation pipeline
- Performance benchmarking across multiple metrics
- Cross-platform deployment optimization
- Detailed comparative analysis of modern object detection architectures

This project demonstrates practical implementation skills in computer vision and provides valuable insights into the performance characteristics of different object detection paradigms.
