import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo33Component } from './lib83-demo33.component';

describe('Lib83Demo33Component', () => {
  let component: Lib83Demo33Component;
  let fixture: ComponentFixture<Lib83Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
