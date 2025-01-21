import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo40Component } from './lib81-demo40.component';

describe('Lib81Demo40Component', () => {
  let component: Lib81Demo40Component;
  let fixture: ComponentFixture<Lib81Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
