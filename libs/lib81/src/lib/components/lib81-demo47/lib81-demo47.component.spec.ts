import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo47Component } from './lib81-demo47.component';

describe('Lib81Demo47Component', () => {
  let component: Lib81Demo47Component;
  let fixture: ComponentFixture<Lib81Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
