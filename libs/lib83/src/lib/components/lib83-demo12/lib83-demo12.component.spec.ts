import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo12Component } from './lib83-demo12.component';

describe('Lib83Demo12Component', () => {
  let component: Lib83Demo12Component;
  let fixture: ComponentFixture<Lib83Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
