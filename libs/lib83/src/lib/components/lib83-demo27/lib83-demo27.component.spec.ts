import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo27Component } from './lib83-demo27.component';

describe('Lib83Demo27Component', () => {
  let component: Lib83Demo27Component;
  let fixture: ComponentFixture<Lib83Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
