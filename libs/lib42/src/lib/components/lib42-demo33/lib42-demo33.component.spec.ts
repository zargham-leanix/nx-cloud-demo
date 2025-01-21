import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo33Component } from './lib42-demo33.component';

describe('Lib42Demo33Component', () => {
  let component: Lib42Demo33Component;
  let fixture: ComponentFixture<Lib42Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
