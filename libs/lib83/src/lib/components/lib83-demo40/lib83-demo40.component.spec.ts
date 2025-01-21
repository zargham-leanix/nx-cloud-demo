import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo40Component } from './lib83-demo40.component';

describe('Lib83Demo40Component', () => {
  let component: Lib83Demo40Component;
  let fixture: ComponentFixture<Lib83Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
