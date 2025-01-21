import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo2Component } from './lib83-demo2.component';

describe('Lib83Demo2Component', () => {
  let component: Lib83Demo2Component;
  let fixture: ComponentFixture<Lib83Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
