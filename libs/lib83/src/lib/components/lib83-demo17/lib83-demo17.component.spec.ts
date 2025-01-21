import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo17Component } from './lib83-demo17.component';

describe('Lib83Demo17Component', () => {
  let component: Lib83Demo17Component;
  let fixture: ComponentFixture<Lib83Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
