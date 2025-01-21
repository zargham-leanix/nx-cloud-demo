import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo32Component } from './lib83-demo32.component';

describe('Lib83Demo32Component', () => {
  let component: Lib83Demo32Component;
  let fixture: ComponentFixture<Lib83Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
