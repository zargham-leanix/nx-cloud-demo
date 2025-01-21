import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo42Component } from './lib83-demo42.component';

describe('Lib83Demo42Component', () => {
  let component: Lib83Demo42Component;
  let fixture: ComponentFixture<Lib83Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
