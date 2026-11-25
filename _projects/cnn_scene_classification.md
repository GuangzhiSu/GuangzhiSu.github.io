---
layout: page
title: CNN for Scene Classification
description: Comprehensive CNN implementation for scene classification using ResNet-50 transfer learning with comparative analysis of dropout regularization and activation functions.
img: assets/img/scene_classification.png
github: https://github.com/GuangzhiSu/CNN-for-scene-classification
importance: 2
category: coursework
badge: Duke AIPI 590
tags: [ResNet-50, Transfer learning, PyTorch]
---

{% include project_links.liquid size="lg" %}

This project implements a comprehensive **CNN-based scene classification system** for the **Duke AIPI 590 Applied Computer Vision Course**. The project focuses on transfer learning using ResNet-50 architecture and conducts systematic experiments to evaluate the impact of different regularization techniques and activation functions on model performance.

## Project Overview

The CNN Scene Classification project implements a professional-grade computer vision pipeline with three main experimental components:

### Core Implementation
- **ResNet-50 Transfer Learning**: Fine-tuning pre-trained ResNet-50 for scene classification on SUN397 dataset
- **Dropout Analysis**: Comparative study of models with and without dropout regularization
- **Activation Function Study**: Evaluation of ReLU, ELU, SiLU, and GELU activation functions

### Key Features
- **Modular Architecture**: Clean, maintainable code with separation of concerns
- **Comprehensive Logging**: Detailed experiment tracking and result visualization
- **Configuration Management**: YAML-based configuration for reproducible experiments
- **Statistical Analysis**: Rigorous evaluation with multiple performance metrics

## Technical Implementation

### Model Architecture
- **Base Model**: ResNet-50 pre-trained on ImageNet
- **Transfer Learning**: Frozen feature extractor with custom classifier
- **Regularization**: Configurable dropout layers and activation functions
- **Training**: SGD optimizer with Nesterov momentum and learning rate scheduling

### Experimental Design
- **Dataset**: SUN397 scene recognition dataset with 20 scene categories
- **Data Split**: 70% training, 10% validation, 20% testing
- **Augmentation**: RandomResizedCrop, RandomHorizontalFlip for training
- **Evaluation**: Accuracy, F1-score, confusion matrix, and classification reports

## Key Results

### Dropout Comparison
- **Regularization Impact**: Systematic analysis of dropout effectiveness in preventing overfitting
- **Performance Metrics**: Comparative evaluation of training and validation performance
- **Statistical Significance**: Rigorous statistical testing of performance differences

### Activation Function Analysis
- **Multi-Activation Study**: Comprehensive comparison of ReLU, ELU, SiLU, and GELU
- **Performance Benchmarking**: Detailed evaluation across multiple metrics
- **Best Practice Identification**: Evidence-based recommendations for activation function selection

## Technical Contributions

- **Professional Code Structure**: Modular design with comprehensive error handling
- **Experiment Management**: Automated logging, model saving, and result visualization
- **Reproducible Research**: Fixed random seeds and detailed configuration management
- **Performance Analysis**: Advanced evaluation metrics including F1-scores and confusion matrices
- **Early Stopping**: Intelligent training termination to prevent overfitting

## Impact

This project demonstrates advanced computer vision implementation skills and provides valuable insights into transfer learning best practices. The systematic experimental approach offers evidence-based guidance for CNN architecture design and hyperparameter selection in scene classification tasks.

The comprehensive evaluation framework and professional code structure make this project a valuable reference for computer vision practitioners and researchers working on similar classification problems.
