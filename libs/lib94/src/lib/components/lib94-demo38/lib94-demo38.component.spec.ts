import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo38Component } from './lib94-demo38.component';

describe('Lib94Demo38Component', () => {
  let component: Lib94Demo38Component;
  let fixture: ComponentFixture<Lib94Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
