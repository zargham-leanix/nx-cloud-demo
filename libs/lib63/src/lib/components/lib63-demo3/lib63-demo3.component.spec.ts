import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo3Component } from './lib63-demo3.component';

describe('Lib63Demo3Component', () => {
  let component: Lib63Demo3Component;
  let fixture: ComponentFixture<Lib63Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
