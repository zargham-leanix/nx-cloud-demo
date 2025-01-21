import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo3Component } from './lib94-demo3.component';

describe('Lib94Demo3Component', () => {
  let component: Lib94Demo3Component;
  let fixture: ComponentFixture<Lib94Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
