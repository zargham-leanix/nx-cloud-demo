import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo3Component } from './lib100-demo3.component';

describe('Lib100Demo3Component', () => {
  let component: Lib100Demo3Component;
  let fixture: ComponentFixture<Lib100Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
