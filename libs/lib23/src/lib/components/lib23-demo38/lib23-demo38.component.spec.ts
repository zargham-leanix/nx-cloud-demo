import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo38Component } from './lib23-demo38.component';

describe('Lib23Demo38Component', () => {
  let component: Lib23Demo38Component;
  let fixture: ComponentFixture<Lib23Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
