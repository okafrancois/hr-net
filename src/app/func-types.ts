import {Dispatch} from "@reduxjs/toolkit";

type LogUserInFunc = (arg: {email: string, password: string}, dispatch: Dispatch, keepLoggedIn: boolean) => void;
type LogUserOutFunc = (dispatch: Dispatch) => void;
type GetUserDataFunc = (token: string, dispatch: Dispatch) => void;
type EditUserFunc = (arg: {firstName: string, lastName: string}, dispatch: Dispatch, resolveCallback: any) => void;

export type {LogUserInFunc, LogUserOutFunc, GetUserDataFunc, EditUserFunc};
