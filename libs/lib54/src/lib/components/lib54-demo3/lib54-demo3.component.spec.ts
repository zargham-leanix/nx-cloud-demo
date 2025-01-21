import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo3Component } from './lib54-demo3.component';

describe('Lib54Demo3Component', () => {
  let component: Lib54Demo3Component;
  let fixture: ComponentFixture<Lib54Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
