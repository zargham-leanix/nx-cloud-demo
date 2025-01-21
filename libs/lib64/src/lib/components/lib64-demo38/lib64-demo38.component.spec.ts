import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo38Component } from './lib64-demo38.component';

describe('Lib64Demo38Component', () => {
  let component: Lib64Demo38Component;
  let fixture: ComponentFixture<Lib64Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
