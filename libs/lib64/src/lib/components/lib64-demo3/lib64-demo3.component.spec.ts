import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo3Component } from './lib64-demo3.component';

describe('Lib64Demo3Component', () => {
  let component: Lib64Demo3Component;
  let fixture: ComponentFixture<Lib64Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
