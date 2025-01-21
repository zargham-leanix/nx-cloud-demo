import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo16Component } from './lib83-demo16.component';

describe('Lib83Demo16Component', () => {
  let component: Lib83Demo16Component;
  let fixture: ComponentFixture<Lib83Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
