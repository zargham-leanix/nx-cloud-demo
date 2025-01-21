import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo3Component } from './lib53-demo3.component';

describe('Lib53Demo3Component', () => {
  let component: Lib53Demo3Component;
  let fixture: ComponentFixture<Lib53Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
