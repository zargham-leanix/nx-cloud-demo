import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo3Component } from './lib74-demo3.component';

describe('Lib74Demo3Component', () => {
  let component: Lib74Demo3Component;
  let fixture: ComponentFixture<Lib74Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
