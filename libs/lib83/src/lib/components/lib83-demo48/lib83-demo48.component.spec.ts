import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo48Component } from './lib83-demo48.component';

describe('Lib83Demo48Component', () => {
  let component: Lib83Demo48Component;
  let fixture: ComponentFixture<Lib83Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
