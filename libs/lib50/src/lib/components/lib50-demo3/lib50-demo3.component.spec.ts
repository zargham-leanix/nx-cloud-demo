import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo3Component } from './lib50-demo3.component';

describe('Lib50Demo3Component', () => {
  let component: Lib50Demo3Component;
  let fixture: ComponentFixture<Lib50Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
