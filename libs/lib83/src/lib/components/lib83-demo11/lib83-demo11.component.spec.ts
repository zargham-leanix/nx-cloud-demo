import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo11Component } from './lib83-demo11.component';

describe('Lib83Demo11Component', () => {
  let component: Lib83Demo11Component;
  let fixture: ComponentFixture<Lib83Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
