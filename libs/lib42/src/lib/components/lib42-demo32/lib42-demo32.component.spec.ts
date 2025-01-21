import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo32Component } from './lib42-demo32.component';

describe('Lib42Demo32Component', () => {
  let component: Lib42Demo32Component;
  let fixture: ComponentFixture<Lib42Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
