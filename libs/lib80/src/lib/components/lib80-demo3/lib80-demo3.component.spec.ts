import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo3Component } from './lib80-demo3.component';

describe('Lib80Demo3Component', () => {
  let component: Lib80Demo3Component;
  let fixture: ComponentFixture<Lib80Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
