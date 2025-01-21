import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo3Component } from './lib28-demo3.component';

describe('Lib28Demo3Component', () => {
  let component: Lib28Demo3Component;
  let fixture: ComponentFixture<Lib28Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
