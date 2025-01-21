import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo9Component } from './lib83-demo9.component';

describe('Lib83Demo9Component', () => {
  let component: Lib83Demo9Component;
  let fixture: ComponentFixture<Lib83Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
