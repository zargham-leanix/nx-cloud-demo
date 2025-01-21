import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo32Component } from './lib40-demo32.component';

describe('Lib40Demo32Component', () => {
  let component: Lib40Demo32Component;
  let fixture: ComponentFixture<Lib40Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
