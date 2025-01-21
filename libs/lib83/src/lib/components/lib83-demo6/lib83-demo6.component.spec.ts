import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo6Component } from './lib83-demo6.component';

describe('Lib83Demo6Component', () => {
  let component: Lib83Demo6Component;
  let fixture: ComponentFixture<Lib83Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
