import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo38Component } from './lib27-demo38.component';

describe('Lib27Demo38Component', () => {
  let component: Lib27Demo38Component;
  let fixture: ComponentFixture<Lib27Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
