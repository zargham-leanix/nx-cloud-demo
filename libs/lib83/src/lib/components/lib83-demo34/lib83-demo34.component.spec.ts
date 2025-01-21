import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo34Component } from './lib83-demo34.component';

describe('Lib83Demo34Component', () => {
  let component: Lib83Demo34Component;
  let fixture: ComponentFixture<Lib83Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
