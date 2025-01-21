import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo43Component } from './lib83-demo43.component';

describe('Lib83Demo43Component', () => {
  let component: Lib83Demo43Component;
  let fixture: ComponentFixture<Lib83Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
