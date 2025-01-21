import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo3Component } from './lib83-demo3.component';

describe('Lib83Demo3Component', () => {
  let component: Lib83Demo3Component;
  let fixture: ComponentFixture<Lib83Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
