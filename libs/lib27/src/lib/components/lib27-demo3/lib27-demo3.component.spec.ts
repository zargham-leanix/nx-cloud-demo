import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo3Component } from './lib27-demo3.component';

describe('Lib27Demo3Component', () => {
  let component: Lib27Demo3Component;
  let fixture: ComponentFixture<Lib27Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
