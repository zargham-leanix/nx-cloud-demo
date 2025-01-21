import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo38Component } from './lib5-demo38.component';

describe('Lib5Demo38Component', () => {
  let component: Lib5Demo38Component;
  let fixture: ComponentFixture<Lib5Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
