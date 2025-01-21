import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo6Component } from './lib93-demo6.component';

describe('Lib93Demo6Component', () => {
  let component: Lib93Demo6Component;
  let fixture: ComponentFixture<Lib93Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
