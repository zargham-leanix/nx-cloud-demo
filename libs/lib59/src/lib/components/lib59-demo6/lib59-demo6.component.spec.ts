import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo6Component } from './lib59-demo6.component';

describe('Lib59Demo6Component', () => {
  let component: Lib59Demo6Component;
  let fixture: ComponentFixture<Lib59Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
