import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo13Component } from './lib83-demo13.component';

describe('Lib83Demo13Component', () => {
  let component: Lib83Demo13Component;
  let fixture: ComponentFixture<Lib83Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
