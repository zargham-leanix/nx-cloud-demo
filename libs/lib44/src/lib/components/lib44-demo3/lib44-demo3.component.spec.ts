import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo3Component } from './lib44-demo3.component';

describe('Lib44Demo3Component', () => {
  let component: Lib44Demo3Component;
  let fixture: ComponentFixture<Lib44Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
