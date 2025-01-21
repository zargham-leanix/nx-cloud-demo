import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo3Component } from './lib29-demo3.component';

describe('Lib29Demo3Component', () => {
  let component: Lib29Demo3Component;
  let fixture: ComponentFixture<Lib29Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
