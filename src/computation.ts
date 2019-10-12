namespace ICM.Computation {
    ///{
    const binops: INameToValueMap = {
        'ADD': (arr: Array<any>) => arr.reduce((acc: any, cur: any) => acc += cur, 0),
        'MULTIPLY': (arr: Array<any>) => arr.reduce((acc: any, cur: any) => acc *= cur, 1),
    };

    interface Expression {
        Name: string,
        Function: string,
        Parameters: string[],
    }

    interface INameToValueMap {
        [key: string]: any;
    }

    export function evaluate(exprs: Expression[], context: any) {
        let exprObj: INameToValueMap = {};
        exprs.forEach((expr: Expression) => {
            const params = expr.Parameters.map(x => context[x] ? context[x] : (exprObj[x] || Number(x)));
            exprObj[expr.Name] = binops[expr.Function](params);
        });

        return exprObj;
    }


    //ASSUMPTION: Computation JSON is accessible under context object with id format = "{AttributeId}__Computation"
    export function computeDeps(id: string, context: any) {
        const computation = context[`${id}__Computation`] || { "Dependants": [] };
        let result: INameToValueMap = {};
        computation.Dependants.forEach((depId: string) => {
            const depComputation = context[`${depId}__Computation`] || { "Expressions": [], "ResultExpression": "" };
            const expressionsEvaluated = evaluate(depComputation.Expressions, context);
            const resultExpressionValue = expressionsEvaluated[depComputation.ResultExpression];
            context[depId] = result[depId] = resultExpressionValue;
        });

        return result;
    }
    ///}
}

if (typeof (global) !== 'undefined') {
    (global as any).ICM = {};
    (global as any).ICM.Computation = {
        evaluate: ICM.Computation.evaluate,
        computeDeps: ICM.Computation.computeDeps
    };
    //(global as any).evaluate1 = ICM.Computation.evaluate;
}