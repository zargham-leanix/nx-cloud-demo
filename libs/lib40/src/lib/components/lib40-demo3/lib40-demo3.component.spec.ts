import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo3Component } from './lib40-demo3.component';

describe('Lib40Demo3Component', () => {
  let component: Lib40Demo3Component;
  let fixture: ComponentFixture<Lib40Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
