import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo47Component } from './lib68-demo47.component';

describe('Lib68Demo47Component', () => {
  let component: Lib68Demo47Component;
  let fixture: ComponentFixture<Lib68Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
