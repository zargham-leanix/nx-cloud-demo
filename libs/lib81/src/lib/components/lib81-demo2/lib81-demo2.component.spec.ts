import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo2Component } from './lib81-demo2.component';

describe('Lib81Demo2Component', () => {
  let component: Lib81Demo2Component;
  let fixture: ComponentFixture<Lib81Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
