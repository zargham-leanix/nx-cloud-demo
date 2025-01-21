import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo38Component } from './lib34-demo38.component';

describe('Lib34Demo38Component', () => {
  let component: Lib34Demo38Component;
  let fixture: ComponentFixture<Lib34Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
