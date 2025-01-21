import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo17Component } from './lib81-demo17.component';

describe('Lib81Demo17Component', () => {
  let component: Lib81Demo17Component;
  let fixture: ComponentFixture<Lib81Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
