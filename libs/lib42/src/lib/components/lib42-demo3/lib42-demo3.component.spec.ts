import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo3Component } from './lib42-demo3.component';

describe('Lib42Demo3Component', () => {
  let component: Lib42Demo3Component;
  let fixture: ComponentFixture<Lib42Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
