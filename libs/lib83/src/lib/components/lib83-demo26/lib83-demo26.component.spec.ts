import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo26Component } from './lib83-demo26.component';

describe('Lib83Demo26Component', () => {
  let component: Lib83Demo26Component;
  let fixture: ComponentFixture<Lib83Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
