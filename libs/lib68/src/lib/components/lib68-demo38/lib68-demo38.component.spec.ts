import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo38Component } from './lib68-demo38.component';

describe('Lib68Demo38Component', () => {
  let component: Lib68Demo38Component;
  let fixture: ComponentFixture<Lib68Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
