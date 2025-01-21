import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo14Component } from './lib83-demo14.component';

describe('Lib83Demo14Component', () => {
  let component: Lib83Demo14Component;
  let fixture: ComponentFixture<Lib83Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
