import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo47Component } from './lib83-demo47.component';

describe('Lib83Demo47Component', () => {
  let component: Lib83Demo47Component;
  let fixture: ComponentFixture<Lib83Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
