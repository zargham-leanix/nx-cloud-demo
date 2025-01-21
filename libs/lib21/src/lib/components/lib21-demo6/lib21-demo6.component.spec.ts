import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo6Component } from './lib21-demo6.component';

describe('Lib21Demo6Component', () => {
  let component: Lib21Demo6Component;
  let fixture: ComponentFixture<Lib21Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
