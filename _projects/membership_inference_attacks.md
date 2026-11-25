---
layout: page
title: Membership Inference Attacks on Stock Prediction Models
description: Investigating vulnerabilities of stock prediction models to Membership Inference Attacks (MIA) using Transformer, LSTM, and MambaStock architectures.
img: assets/img/stock_prediction.png
github: https://github.com/IsaacJacobson/ECE661_project
importance: 4
category: research
badge: Duke ECE 661
tags: [Privacy, Membership inference, Transformer / LSTM / Mamba]
---

{% include project_links.liquid size="lg" %}

This project investigates the vulnerabilities of stock prediction models to Membership Inference Attacks (MIA) as part of **ECE661 Computer Engineering Machine Learning and Deep Neural Nets** at Duke University. The research was conducted in collaboration with Isaac Jacobson and Alex Niculescu.

## Project Overview

The project focuses on training stock price prediction models using three different architectures and evaluating their susceptibility to two types of MIA attacks:

### Model Architectures
- **Transformer**: Attention-based architecture for sequence modeling
- **LSTM**: Long Short-Term Memory networks for temporal dependencies
- **MambaStock**: State-space model architecture for efficient sequence processing

### Attack Methods
1. **Loss-Based Attack**: Calculates the loss of a target model on potential stock data to infer membership
2. **Shadow Model Attack**: Trains shadow models on a superset of stock data and uses their outputs to train a membership classification model

## Key Features

- **Data Source**: Historical stock data obtained through Yahoo Finance API
- **Dataset**: Comprehensive collection of stock symbols for training and evaluation
- **Evaluation**: Comparative analysis of model performance and vulnerability across different architectures
- **Privacy Analysis**: Systematic assessment of membership inference risks in financial ML models

## Technical Implementation

The project includes implementations of:
- Multiple neural network architectures for stock prediction
- Two distinct membership inference attack strategies
- Comprehensive evaluation metrics and analysis tools
- Data preprocessing and formatting utilities

## Impact

This research provides valuable insights into the privacy vulnerabilities of financial machine learning models and offers a comprehensive toolkit for applying and analyzing Membership Inference Attacks in the context of stock prediction.

The findings contribute to the understanding of privacy risks in financial AI applications and provide guidance for developing more privacy-preserving machine learning systems in the financial domain.
