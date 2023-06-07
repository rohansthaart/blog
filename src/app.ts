import express from "express";
import { Entity } from "typeorm";
import { appDataSource } from "./config/database.config";

appDataSource.initialize();

console.log("data");
