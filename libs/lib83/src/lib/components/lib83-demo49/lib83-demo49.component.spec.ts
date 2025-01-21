import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo49Component } from './lib83-demo49.component';

describe('Lib83Demo49Component', () => {
  let component: Lib83Demo49Component;
  let fixture: ComponentFixture<Lib83Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
