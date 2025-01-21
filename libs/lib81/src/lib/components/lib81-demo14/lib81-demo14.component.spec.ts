import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo14Component } from './lib81-demo14.component';

describe('Lib81Demo14Component', () => {
  let component: Lib81Demo14Component;
  let fixture: ComponentFixture<Lib81Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
