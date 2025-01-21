import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo3Component } from './lib85-demo3.component';

describe('Lib85Demo3Component', () => {
  let component: Lib85Demo3Component;
  let fixture: ComponentFixture<Lib85Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
