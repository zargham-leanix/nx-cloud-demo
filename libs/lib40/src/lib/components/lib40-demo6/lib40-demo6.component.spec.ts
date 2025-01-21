import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo6Component } from './lib40-demo6.component';

describe('Lib40Demo6Component', () => {
  let component: Lib40Demo6Component;
  let fixture: ComponentFixture<Lib40Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
