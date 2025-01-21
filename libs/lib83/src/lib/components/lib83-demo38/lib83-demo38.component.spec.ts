import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo38Component } from './lib83-demo38.component';

describe('Lib83Demo38Component', () => {
  let component: Lib83Demo38Component;
  let fixture: ComponentFixture<Lib83Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
