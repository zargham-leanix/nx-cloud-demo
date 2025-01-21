import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo3Component } from './lib30-demo3.component';

describe('Lib30Demo3Component', () => {
  let component: Lib30Demo3Component;
  let fixture: ComponentFixture<Lib30Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
