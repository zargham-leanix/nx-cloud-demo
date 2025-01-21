import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo35Component } from './lib83-demo35.component';

describe('Lib83Demo35Component', () => {
  let component: Lib83Demo35Component;
  let fixture: ComponentFixture<Lib83Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
