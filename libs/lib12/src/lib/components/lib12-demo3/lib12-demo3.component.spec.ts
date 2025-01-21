import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo3Component } from './lib12-demo3.component';

describe('Lib12Demo3Component', () => {
  let component: Lib12Demo3Component;
  let fixture: ComponentFixture<Lib12Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
