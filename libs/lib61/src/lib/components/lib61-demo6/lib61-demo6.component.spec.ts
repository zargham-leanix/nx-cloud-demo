import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo6Component } from './lib61-demo6.component';

describe('Lib61Demo6Component', () => {
  let component: Lib61Demo6Component;
  let fixture: ComponentFixture<Lib61Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
