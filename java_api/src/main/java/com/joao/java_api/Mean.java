package com.joao.java_api;

import lombok.Getter;
import lombok.Setter;


public class Mean {
    
    @Getter
    private float result;

    @Getter
    private float sum;

    @Getter
    private String status;

    public Mean(Float[] values) {
        float sum = 0;
        for (Float value : values) {
            sum += value;
        }
        this.result =  sum / values.length;
        this.sum = sum;
    }

    public void setStatus(){
        if (result > 70)
            this.status = "aprovado";
        else if (result < 30)
            this.status = "reprovado";
        else
            this.status = "parabens";
    }
}
