import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo45Component } from './lib83-demo45.component';

describe('Lib83Demo45Component', () => {
  let component: Lib83Demo45Component;
  let fixture: ComponentFixture<Lib83Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
